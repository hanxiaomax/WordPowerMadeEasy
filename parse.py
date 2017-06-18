#coding:utf-8

import re
import json
root = {
	"id": "",
    "topic": "",
    "children": []
}



data = {
	'id':'',
	'topic':''
}

# ## 1.egoist           	:	利己主义者
l1=re.compile('## (?P<session>[\d]+.[\w]+)[\s]*:[\s]*(?P<meaning>.+)')
l2=re.compile('^(?P<session>(-|[\d]+.) .+)[\s]*:[\s]*(?P<meaning>.+)')
l3=re.compile('\t{1}(?P<session>(-|[\d].+) [\w]+)[\s]*:[\s]*(?P<meaning>.+)')



l1count = 0
with open('How to talk about personality.md','r') as f:
	for line in f.readlines():
		if line.count("#")==2:
			l1count +=1


with open('How to talk about personality.md','r') as f:
	l1current=0
	output=open('data.js','w')
	for index,line in enumerate(f.readlines()):
		if line.count("#")==1:
			root['id']='root'
			root['topic']=line.replace('#','').strip()
		elif line.count("#")==2:
			l1current +=1
			data_l1 = {
				"id": "",
			    "topic": "",
			    "direction":  "left" if l1current > (l1count /2) else "right",
			    "expanded": False,
			    "children": []
			}
			meaning = re.match(l1,line).group('meaning')
			w = re.match(l1,line).group('session')
			topic = "<div data-toggle='popover' data-content='{0}'>{1}</div>".format(meaning,w)
			data_l1['id']=w
			data_l1['topic']=topic
			root['children'].append(data_l1)
		elif re.match(l2,line):#1. alter=other
			data_l2 = {
				"id": "",
			    "topic": "",
			    "children": []
			}
			result = re.match(l2,line)
			meaning = result.group('meaning')
			print meaning
			w = result.group('session').strip()
			topic = "<div data-toggle='popover' data-content='{0}'>{1}</div>".format(meaning,w)
			data_l2['id']=w
			data_l2['topic']=topic
			data_l1['children'].append(data_l2)

	


	output.write(json.dumps(root, ensure_ascii=False))

output.close()





