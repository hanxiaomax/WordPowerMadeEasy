wpme_notes = {
    "第1章": ['How_to_talk_about_personality'],
    "第2章": ['How_to_talk_about_doctors'],
    "第3章": ['How_to_talk_about_various_practitioners'],
    "第4章": ['How_to_talk_about_science_and_scientist'],
    "第5章": ['How_to_talk_about_liars_and_lying'],
    "第6章": ['How_to_talk_about_actions'],
    "第7章": ['How_to_talk_about_various_speech_habits'],
    "第8章":['How_to_insult_your_enemies'],
    "第9章":['How_to_flatter_your_friends'],
    "第10章":['How_to_talk_about_common_phenomena_and_occurrences'],
    "第11章":['How_to_talk_about_what_goes_on'],
    "第12章":['How_to_talk_about_a_variety_of_personal_characteristics']
}


module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    dest: 'docs',
    base: '/WordPowerMadeEasy/',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'Word Power Made Easy',
            description: 'by Lingfeng Ai'
        }
    },
    head: [
        ['link', {
            rel: 'icon',
            href: `/logo.png`
        }],
        ['link', {
            rel: 'manifest',
            href: '/manifest.json'
        }],
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ['link', {
            rel: 'apple-touch-icon',
            href: `/icons/apple-touch-icon-152x152.png`
        }],
        ['link', {
            rel: 'mask-icon',
            href: '/icons/safari-pinned-tab.svg',
            color: '#3eaf7c'
        }],
        ['meta', {
            name: 'msapplication-TileImage',
            content: '/icons/msapplication-icon-144x144.png'
        }],
        ['meta', {
            name: 'msapplication-TileColor',
            content: '#000000'
        }]
    ],
    serviceWorker: true,
    themeConfig: {
        repo: 'hanxiaomax/WordPowerMadeEasy ',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        docsDir: 'package',
        nav: [{
                text: '主页',
                link: '/'
            },
            {
                text: '笔记/脑图',
                items: [
                    {
                        text: 'Word Power Made Easy',
                        link: '/wpme/'
                    },
                    {
                        text: '思维导图',
                        link: 'https://hanxiaomax.github.io/word_power_made_easy_mindmap/'
                    },
                ]
            },
            {
                text: '资源',
                link: 'https://link.zhihu.com/?target=https%3A//pan.baidu.com/s/1jIEEp86/'
            },
            {
                text: '联系',
                link: 'https://www.zhihu.com/people/lingfeng/'
            },
        ],
        sidebar: {
            '/wpme/': genSidebarConfig(wpme_notes),
        }
    }
}

function genSidebarConfig(content) {
    var sidebar_content = new Array();

    for (var title in content) {
        var temp = {
            title,
            collapsable: true,
            children: content[title]
        }
        sidebar_content.push(temp)
    }
    return sidebar_content
}