/*
 * Released under MIT License
 * Copyright (c) 2014-2016 hanxiaomax@qq.com
 *
 */
var mind1 = {
    /* 元数据，定义思维导图的名称、作者、版本等信息 */
    "meta": {
        "name": "How to talk about personality",
        "author": "lingfeng_ai@foxmail.com",
        "version": "1.0",
    },
    /* 数据格式声明 */
    "format": "node_tree",
    /* 数据内容 */
    "data": {
        "id": "root",
        "topic": "How to talk about personality",
        "children": [{
            "id": "easy",
            "topic": "<div data-toggle='popover' data-content='这里是英文翻译'>easy to use</div>",
            "direction": "left",
            "expanded": false,
            "children": [
                { "id": "easy1", "topic": "Easy to show" },
                { "id": "easy2", "topic": "<div title='123322bkhjbkjhbjhkbkhjbkjhbkjbjkbkjhjvvjhvjhvjhvjhvjhgvjhvjhvjvj6'>easy to 11e</div>" },
                { "id": "easy3", "topic": "Easy to store" },
                { "id": "easy4", "topic": "Easy to embed" }
            ]
        }, {
            "id": "open",
            "topic": "Open Source",
            "direction": "right",
            "expanded": true,
            "children": [
                { "id": "open1", "topic": "on GitHub" },
                { "id": "open2", "topic": "BSD License" }
            ]
        }, {
            "id": "powerful",
            "topic": "Powerful",
            "direction": "right",
            "children": [
                { "id": "powerful1", "topic": "Base on Javascript" },
                { "id": "powerful2", "topic": "Base on HTML5" },
                { "id": "powerful3", "topic": "Depends on you" }
            ]
        }, {
            "id": "other",
            "topic": "test node",
            "direction": "left",
            "children": [
                { "id": "other1", "topic": "I'm from local variable" },
                { "id": "other2", "topic": "I can do everything" }
            ]
        }]
    }
};
var mind2 = {
    /* 元数据，定义思维导图的名称、作者、版本等信息 */
    "meta": {
        "name": "How to talk about doctors",
        "author": "lingfeng_ai",
        "version": "0.2"
    },
    /* 数据格式声明 */
    "format": "node_tree",
    /* 数据内容 */
    "data": {
        "id": "root",
        "topic": "How to talk about doctors",
        "children": [{
            "id": "easy",
            "topic": "<div data-toggle='popover' data-content='这里是英文翻译'>easy to use</div>",
            "direction": "left",
            "expanded": false,
            "children": [
                { "id": "easy1", "topic": "Easy to show" },
                { "id": "easy2", "topic": "<div title='123322bkhjbkjhbjhkbkhjbkjhbkjbjkbkjhjvvjhvjhvjhvjhvjhgvjhvjhvjvj6'>easy to 11e</div>" },
                { "id": "easy3", "topic": "Easy to store" },
                { "id": "easy4", "topic": "Easy to embed" }
            ]
        }, {
            "id": "open",
            "topic": "Open Source",
            "direction": "right",
            "expanded": true,
            "children": [
                { "id": "open1", "topic": "on GitHub" },
                { "id": "open2", "topic": "BSD License" }
            ]
        }, {
            "id": "powerful",
            "topic": "Powerful",
            "direction": "right",
            "children": [
                { "id": "powerful1", "topic": "Base on Javascript" },
                { "id": "powerful2", "topic": "Base on HTML5" },
                { "id": "powerful3", "topic": "Depends on you" }
            ]
        }, {
            "id": "other",
            "topic": "test node",
            "direction": "left",
            "children": [
                { "id": "other1", "topic": "I'm from local variable" },
                { "id": "other2", "topic": "I can do everything" }
            ]
        }]
    }
};

var mind13 = {
    /* 元数据，定义思维导图的名称、作者、版本等信息 */
    "meta": {
        "name": "学习资源",
        "author": "lingfeng_ai",
        "version": "0.2"
    },
    /* 数据格式声明 */
    "format": "node_tree",
    /* 数据内容 */
    "data": {
        "id": "root",
        "topic": "学习资源",
        "children": [{
            "id": "easy",
            "topic": "<a href='http://www.etymonline.com'>在线词源字典</a>",
            "direction": "right",
            "expanded": true,
        }, {
            "id": "open",
            "topic": "Open Source",
            "direction": "right",
            "expanded": true,

        }, {
            "id": "powerful",
            "topic": "Powerful",
            "direction": "right",

        }, {
            "id": "other",
            "topic": "test node",
            "direction": "right",

        }]
    }
};

var options = {
    container: 'jsmind_container',
    theme: 'clouds',
    editable: false,
    support_html: true, // 是否支持节点里的HTML元素
    view: {
        hmargin: 50, // 思维导图距容器外框的最小水平距离
        vmargin: 50, // 思维导图距容器外框的最小垂直距离
        line_width: 3, // 思维导图线条的粗细
        line_color: '#ffffff' // 思维导图线条的颜色
    },
    layout: {
        hspace: 30, // 节点之间的水平间距
        vspace: 30, // 节点之间的垂直间距
        pspace: 20 // 节点收缩/展开控制器的尺寸
    },
};
var jm = new jsMind(options);
jm.show(mind1);
console.log(jm.get_meta())

$(document).ready(function() {
    popsetup();

})

var options = {
    container: 'jmnodes',
    trigger: 'hover',
    placement: 'top',
    title: '释义',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title pop-title"></h3><div class="popover-content pop-content"></div></div>'

};

function popsetup() {
    $('[data-toggle="popover"]').popover(options)
    $("#copyright").html("作者:\t" + jm.get_meta()['author'])
    $("#version").html("版本:\t" + jm.get_meta()['version'])
    $("#liscence").html("许可:\tMIT")
}
