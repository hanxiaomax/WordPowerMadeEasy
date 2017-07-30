# coding:utf-8

import json
from bs4 import BeautifulSoup
import mistune
from bs4.element import NavigableString
import os

id = 0
def _getMarkDownFile():
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
                        'topic': tree.contents[0],
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

    def parse_h2(self, h2):
        data_h2 = {
            'id': self._getid(),
            'topic': h2.string,
            'children': []
        }
        self.data['children'].append(data_h2)
        return data_h2

    def run(self, output):
        soup = BeautifulSoup(self.html, 'html.parser')
        data = self.parse_h1(soup.h1)

        for h2 in soup.find_all('h2'):
            data_h2 = self.parse_h2(h2)
            ol = h2.find_next_sibling('ol')
            self.parse_current_tree(data_h2, ol)

        with open(output, 'w') as f:
            j = json.dumps(self.mind, ensure_ascii=False, indent=2)
            f.write(j.encode("utf-8"))


if __name__ == '__main__':
    for md in _getMarkDownFile():
        out_put_file = md.replace(' ','_').replace('.md','.json')
        print out_put_file
        with open(md) as f:
            covertor = Markdown2MindMap(f.read())
            covertor.run('out.json')

