#coding:utf-8

import re
import json


l1=re.compile('## (?P<session>[\d]+.[\w]+)[\s]*:[\s]*(?P<meaning>.+)')
l2=re.compile('^(?P<session>(-|[\d]+.) .+)[\s]*:[\s]*(?P<meaning>.+)')
l3=re.compile('(?P<tabs>\t+)(?P<session>(-|[\d].+) .+)[\s]*:[\s]*(?P<meaning>.+)')

buf=[]
nodelist=[]

def  getParentID(clevel):
	temp = []
	print nodelist
	for (plevel,index) in nodelist:
		if plevel == clevel-1:
			temp.append((plevel,index))
	print clevel,str(temp[-1][0])+"-"+str(temp[-1][0])
	return str(temp[-1][0])+"-"+str(temp[-1][1])


with open('How to talk about personality.md','r') as f:
	l1current=0
	output=open('data.js','w')
	for index,line in enumerate(f.readlines()):
		if line.count("#")==1:
			root = {"id":"root", "isroot":True, "topic":line.replace('#','').strip()}
			nodelist.append((1,index+1))
			buf.append(root)
		elif line.count("#")==2:
			meaning = re.match(l1,line).group('meaning')
			w = re.match(l1,line).group('session')
			topic = "<div data-toggle='popover' data-content='{0}'>{1}</div>".format(meaning,w)
			
			data_l2 = {"id":"2"+'-'+str(index+1), 
						"parentid":"root", 
						"topic":topic, 
						"expanded":False,
						"direction":"left"}
			
			nodelist.append((2,index+1))
			buf.append(data_l2)
		elif re.match(l2,line):#1. alter=other
			result = re.match(l2,line)
			meaning = result.group('meaning')
			w = result.group('session').strip()
			topic = "<div data-toggle='popover' data-content='{0}'>{1}</div>".format(meaning,w)
			data_l3 = {"id":"3"+'-'+str(index+1),
						"parentid":getParentID(3), 
						"topic":topic, 
						"direction":"left"}
			nodelist.append((3,index+1))
			buf.append(data_l3)
		elif re.match(l3,line):
			result = re.match(l3,line)
			meaning = result.group('meaning')
			w = result.group('session').strip()
			topic = "<div data-toggle='popover' data-content='{0}'>{1}</div>".format(meaning,w)
			level = len(result.group('tabs'))+3
			data_n = {"id":str(level)+'-'+str(index+1), 
						"parentid":getParentID(level), 
						"topic":topic, 
						"direction":"left"}

			
			
			nodelist.append((level,index+1))
			buf.append(data_n)
		else:
			l1current+=1
	for i,k in enumerate(nodelist):
		print k
	output.write(json.dumps(buf, ensure_ascii=False))

output.close()




