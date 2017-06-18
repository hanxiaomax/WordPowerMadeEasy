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
    "data": { "topic": "How to talk about personality", "id": "root", "children": [{ "topic": "<div data-toggle='popover' data-content='利己主义者'>1.egoist</div>", "direction": "right", "expanded": false, "id": "1.egoist", "children": [{ "topic": "<div data-toggle='popover' data-content='I,self'>1. ego</div>", "id": "1. ego", "children": [] }] }, { "topic": "<div data-toggle='popover' data-content='自大的人'>2.egotist</div>", "direction": "right", "expanded": false, "id": "2.egotist", "children": [] }, { "topic": "<div data-toggle='popover' data-content='利他主义者'>3.altruist</div>", "direction": "right", "expanded": false, "id": "3.altruist", "children": [{ "topic": "<div data-toggle='popover' data-content='other'>1. alter</div>", "id": "1. alter", "children": [] }] }, { "topic": "<div data-toggle='popover' data-content='内向的人'>4.introvert</div>", "direction": "right", "expanded": false, "id": "4.introvert", "children": [{ "topic": "<div data-toggle='popover' data-content='inward   向内'>1. intro-</div>", "id": "1. intro-", "children": [] }, { "topic": "<div data-toggle='popover' data-content='来自拉丁语 verto=to turn'>2. vert-</div>", "id": "2. vert-", "children": [] }] }, { "topic": "<div data-toggle='popover' data-content='外向的人'>5.extrovert</div>", "direction": "right", "expanded": false, "id": "5.extrovert", "children": [{ "topic": "<div data-toggle='popover' data-content='outward 向外'>1. extro-</div>", "id": "1. extro-", "children": [] }] }, { "topic": "<div data-toggle='popover' data-content='又内向又外向的普通人'>6.ambivert</div>", "direction": "left", "expanded": false, "id": "6.ambivert", "children": [{ "topic": "<div data-toggle='popover' data-content='both       向两个方向'>1. ambi-</div>", "id": "1. ambi-", "children": [] }] }, { "topic": "<div data-toggle='popover' data-content='反人类'>7.misanthrope</div>", "direction": "left", "expanded": false, "id": "7.misanthrope", "children": [{ "topic": "<div data-toggle='popover' data-content='拉丁语 to hate'>1. misein</div>", "id": "1. misein", "children": [] }, { "topic": "<div data-toggle='popover' data-content='人类的  '>2. anthropes</div>", "id": "2. anthropes", "children": [] }] }, { "topic": "<div data-toggle='popover' data-content='反女人'>8.misogynist</div>", "direction": "left", "expanded": false, "id": "8.misogynist", "children": [{ "topic": "<div data-toggle='popover' data-content='女人 woman'>1. gyne</div>", "id": "1. gyne", "children": [] }, { "topic": "<div data-toggle='popover' data-content='man,来自拉丁语andros    '>2. andry</div>", "id": "2. andry", "children": [] }] }, { "topic": "<div data-toggle='popover' data-content='反婚姻    '>9.misogamist</div>", "direction": "left", "expanded": false, "id": "9.misogamist", "children": [{ "topic": "<div data-toggle='popover' data-content='婚姻,marriage '>1. gamos</div>", "id": "1. gamos", "children": [] }] }, { "topic": "<div data-toggle='popover' data-content='禁欲主义者'>10.ascetic</div>", "direction": "left", "expanded": false, "id": "10.ascetic", "children": [{ "topic": "<div data-toggle='popover' data-content='拉丁语，monk，hermit'>1. asketes</div>", "id": "1. asketes", "children": [] }] }] }


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
        "topic": "How to talk about personality",
        "id": "root",
        "children": [{
            "topic": "<div data-toggle='popover' data-content='利己主义者'>1.egoist</div>",
            "direction": "left",
            "expanded": true,
            "id": "1.egoist",
            "children": []
        }, {
            "topic": "<div data-toggle='popover' data-content='自大的人'>2.egotist</div>",
            "direction": "right",
            "expanded": true,
            "id": "2.egotist",
            "children": []
        }, {
            "topic": "<div data-toggle='popover' data-content='利他主义者'>3.altruist</div>",
            "direction": "right",
            "expanded": true,
            "id": "3.altruist",
            "children": []
        }, {
            "topic": "<div data-toggle='popover' data-content='内向的人'>4.introvert</div>",
            "direction": "right",
            "expanded": true,
            "id": "4.introvert",
            "children": []
        }, {
            "topic": "<div data-toggle='popover' data-content='外向的人'>5.extrovert</div>",
            "direction": "right",
            "expanded": true,
            "id": "5.extrovert",
            "children": []
        }, {
            "topic": "<div data-toggle='popover' data-content='又内向又外向的普通人'>6.ambivert</div>",
            "direction": "right",
            "expanded": true,
            "id": "6.ambivert",
            "children": []
        }, {
            "topic": "<div data-toggle='popover' data-content='反人类'>7.misanthrope</div>",
            "direction": "right",
            "expanded": true,
            "id": "7.misanthrope",
            "children": []
        }, {
            "topic": "<div data-toggle='popover' data-content='反女人'>8.misogynist</div>",
            "direction": "right",
            "expanded": true,
            "id": "8.misogynist",
            "children": []
        }, {
            "topic": "<div data-toggle='popover' data-content='反婚姻    '>9.misogamist</div>",
            "direction": "right",
            "expanded": true,
            "id": "9.misogamist",
            "children": []
        }, {
            "topic": "<div data-toggle='popover' data-content='禁欲主义者'>10.ascetic</div>",
            "direction": "right",
            "expanded": true,
            "id": "10.ascetic",
            "children": []
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
            "topic": "<a href='http://www.etymonline.com' target='_blank'>1.在线词源字典</a>",
            "direction": "right",
            "expanded": true,
        }, ]
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

//切换导图后重新设置 meta 数据和 popup
function popsetup() {
    $('[data-toggle="popover"]').popover(options)
    $("#copyright").html("作者:\t" + jm.get_meta()['author'])
    $("#version").html("版本:\t" + jm.get_meta()['version'])
    $("#liscence").html("许可:\tMIT")
}
