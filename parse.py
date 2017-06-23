#coding:utf-8

import re
import json




# ## 1.egoist           	:	利己主义者
l1=re.compile('## (?P<session>[\d]+.[\w]+)[\s]*:[\s]*(?P<meaning>.+)')
l2=re.compile('^(?P<session>(-|[\d]+.) .+)[\s]*:[\s]*(?P<meaning>.+)')
l3=re.compile('(?P<tabs>\t+)(?P<session>(-|[\d].+) .+)[\s]*:[\s]*(?P<meaning>.+)')

buf=[]




with open('How to talk about personality.md','r') as f:
	l1current=0
	output=open('data.js','w')
	for index,line in enumerate(f.readlines()):
		if line.count("#")==1:
			root = {
				"id": "1"+'-'+str(index),
			    "topic": line.replace('#','').strip(),
			    "children": []
			}

			buf.append(root)

		elif line.count("#")==2:
			meaning = re.match(l1,line).group('meaning')
			w = re.match(l1,line).group('session')
			topic = "<div data-toggle='popover' data-content='{0}'>{1}</div>".format(meaning,w)
			data_l1 = {
				"id": "2"+'-'+str(index),
			    "topic": topic,
			    "direction":  "left",
			    "expanded": False,
			    "children": []
			}
			
			buf.append(data_l1)

		elif re.match(l2,line):#1. alter=other
			result = re.match(l2,line)
			meaning = result.group('meaning')
			w = result.group('session').strip()
			topic = "<div data-toggle='popover' data-content='{0}'>{1}</div>".format(meaning,w)
			data_l2 = {
				"id": "3"+'-'+str(index),
			    "topic": topic,
			    "children": []
			}
			buf.append(data_l2)
		elif re.match(l3,line):
			result = re.match(l3,line)
			meaning = result.group('meaning')
			w = result.group('session').strip()
			topic = "<div data-toggle='popover' data-content='{0}'>{1}</div>".format(meaning,w)

			data = {
				"id": str(len(result.group('tabs'))+3)+'-'+str(index),
			    "topic": topic,
			    "children": []
			}
			buf.append(data)
		

	output.write(json.dumps(buf, ensure_ascii=False))

	output.write('\n\n\n')

	root = buf[0]
	node = 2

	for i in range(1,len(buf)):
		temp = buf[i-1]
		curr = buf[i]
		#12344
		if curr['id'].split('-')[0] == '2':
			root['children'].append(curr)
			node = i
		else :
			if int(curr['id'].split('-')[0])>int(temp['id'].split('-')[0]):
				buf[node]['children'].append(curr)
				node = i
			elif int(curr['id'].split('-')[0])==int(temp['id'].split('-')[0]):#如果后面的等于前面的，则要向前一个 node 插入
				buf[node-1]['children'].append(curr)
			else :
				buf[node-2]['children'].append(curr)


	output.write(json.dumps(root, ensure_ascii=False))

output.close()





