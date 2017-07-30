# coding:utf-8

import json
from bs4 import BeautifulSoup
import mistune
from bs4.element import NavigableString
import os

id = 0

def _get_topic(string):
    try:
        word = string.split(':')[0].strip()
        meaning = string.split(':')[1].strip()
        topic = u"<div data-toggle='popover' data-content='{0}'>{1}</div>".format(meaning, word)
        return topic
    except Exception, e:
        print string



def _get_markdown_file():
    return [file for file in os.listdir(".") if ((os.path.splitext(file)[1] == '.md') and (file != "README.md"))]

class Markdown2MindMap(object):
    def __init__(self, markdown):
        self.id = 0
        self.markdown = markdown
        self.html = mistune.markdown(markdown)
        self.data = {
            'id': 'root',
            'topic': "",
            'children': []
        }

        self.mind = {
            "meta": {
                "name": "jsMind-demo-tree",
                "author": "hizzgdev@163.com",
                "version": "0.2"
            },
            "format": "node_tree",
            "data": self.data}

    def _getid(self):
        self.id += 1
        return self.id

    def parse_current_tree(self, data, tree):
        if tree and tree != '\n':
            try:
                if tree.contents[0] != '\n' and isinstance(tree.contents[0], NavigableString):
                    d = {
                        'id': self._getid(),
                        'topic': _get_topic(tree.contents[0]),
                        'children': []
                    }
                    data['children'].append(d)
                    for node in filter(lambda x: x != '\n', tree.children)[1:]:  # 第一个child是<li>par : equal<ul>中的字符串
                        self.parse_current_tree(d, node)
                else:
                    for node in filter(lambda x: x != '\n', tree.children):
                        self.parse_current_tree(data, node)
            except Exception, e:
                print e
                print tree.parent

    def parse_h1(self, h1):
        self.data['topic'] = h1.string

    def parse_h2(self, h2,direction):
        data_h2 = {
            'id': self._getid(),
            'topic': _get_topic(h2.string),
            "direction": direction,
            'children': []
        }
        self.data['children'].append(data_h2)
        return data_h2

    def run(self, output,toHtml=False):
        soup = BeautifulSoup(self.html, 'html.parser')
        if toHtml :
            with open(output.replace('.json','.html'),'w') as f:
                f.write(soup.prettify(encoding='utf-8'))

        data = self.parse_h1(soup.h1)
        h2_tags = soup.find_all('h2')

        for index,h2 in enumerate(h2_tags):
            direction = 'left' if index>=len(list(h2_tags))/2 else 'right'
            data_h2 = self.parse_h2(h2,direction)
            ol = h2.find_next_sibling('ol')
            self.parse_current_tree(data_h2, ol)

        with open(output, 'w') as f:
            j = json.dumps(self.mind, ensure_ascii=False, indent=2)
            f.write(j.encode("utf-8"))


if __name__ == '__main__':
    for md in _get_markdown_file():
        out_put_file = md.replace(' ','_').replace('.md','.json')
        with open(md) as f:
            print md
            covertor = Markdown2MindMap(f.read())
            covertor.run("docs/"+out_put_file)







