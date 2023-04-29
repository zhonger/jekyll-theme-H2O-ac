---
layout: post
title: 'H2O-ac theme for Jekyll'
subtitle: '基于或许是最漂亮的 Jekyll 主题 H2O 的学术版'
date: 2021-12-22 19:50:00 +0800
categories: tech
author: zhonger
cover: 'https://images.unsplash.com/photo-1529322365446-6efd62aed02e?w=1600&q=900'
cover_author: 'inma santiago'
cover_author_link: 'https://unsplash.com/@inmasantiago'
tags: 
- jekyll 
- theme 
- blog 
- ac 
- develop 
- 主题 
- 前端开发 
- 学术 
- 运维
pin: true
---

## 前言

&emsp;&emsp;正如大家所知，Jekyll 是一款高可定制的、非常流行的静态博客生成工具。围绕着 Jekyll 也衍生出了很多优秀的 Jekyll 主题， 由 [廖柯宇](https://github.com/kaeyleo) 开发的 [H2O](https://github.com/kaeyleo/jekyll-theme-H2O) 主题就是其中之一。极简主义、风格扁平化、卡片式布局、Medium 及知乎专栏的视觉风格等等特点，为我们带来了或许是迄今为止最漂亮的 Jekyll 主题。

&emsp;&emsp;诞生之初，H2O 主题就在 Github 平台上以 MIT 许可证协议开放了源代码。这吸引了很多小伙伴纷纷转投 Jekyll 和 H2O 主题的阵营，本人也是其中之一。随着使用者越来越多，不少的小伙伴在使用过程中发现了一些小问题并主动修复，最后贡献到了 H2O 的主项目，这让 H2O 主题变得更好。本人在使用过程中也的确是发现了一些与自己实际需求不大一致的地方，并且在原 H2O 主题的基础上做了一些改动。考虑到这些改动可能并不是大多数人的需求，直接向原 H2O 主题提交 pull 请求合并的必要性不大，因此决定将原项目 fork 并改名。现正式将源代码以与 H2O 主题相同的 MIT 许可证协议在 Github 平台上公开，新项目地址为 [zhonger/jekyll-theme-H2O-ac](https://github.com/zhonger/jekyll-theme-H2O-ac)。

&emsp;&emsp;在此，非常感谢廖柯宇及其他小伙伴对于 H2O-ac 主题的基础主题 H2O 的代码开发和开放共享。

## 新特性

### 更适合学术人和运维程序员的页面结构

&emsp;&emsp;H2O 主题其实在很大程度上已经满足了大部分人的需求，只是对于学术研究人员和运维程序员来说，个人觉得页面结构还是有点不够合适。学术研究人员比较重视在首页直接展示个人信息和研究情况，能够让人很快地了解到所需的信息，这其实是将 About me 这样一个平常的辅助页面当成了主页面来用。另外，运维程序员比较重视能一览所有文章的标题以迅速找到感兴趣的文章。虽然搜索功能、标签页、卡片展示页都能够列出所有的文章，但个人觉得还是不够简洁、方便。而像 Hexo 静态生成工具自带的 Archive 归档页面比较能满足这样的需求。除此之外，整个博客的系统日志变迁记录对于运维程序员来说也非常重要，毕竟如果通过发布一篇文章来描述变迁过程并不适合联系起来完整了解。如果有系统日志页，就可以按照年份、月份、事件的先后进行简要的描述，并且一览无遗。

&emsp;&emsp;因此，在 H2O-ac 主题中，从原来 H2O 的主页中抽出框架做成了页面模板。根据实际页面的内容需求，增加了**学术首页**、**归档页**和**系统日志页**。

#### 学术首页

&emsp;&emsp;学术首页如下图所示，并将原来 H2O 中的卡片首页移动到 blog 子目录下了。如果读者想要看到文章卡片展示页，还是可以点击顶部的导航栏中的 BLOG 直接访问。

![首页 Home](https://i.luish.cc/blog/XyT038.webp)

#### 归档页

&emsp;&emsp;归档页设置为由 Jekyll 按照模板自动生成，以年份、日期、文章标题分级列表展示，简洁清晰。

![归档页 Archives](https://i.luish.cc/blog/lj4vUP.webp)

#### 系统日志页

&emsp;&emsp;系统日志页其实也不是经常更新的，只有在博客整体作出设置或改进的才加以说明。另外，也可以将一些固定的站点信息放置在系统日志页，比如站点的多点部署信息，读者可以根据此信息访问最快、最合适的节点。

![系统日志 Log](https://i.luish.cc/blog/7QLEc6.webp)

### 使用体验提升

&emsp;&emsp;廖柯宇也在 H2O 主题的默认页面中写道，目前 H2O 主题还有一些可优化的内容，比如夜间模式、查看大图等。这里，根据个人的一些实际需求和了解，在 H2O-ac 主题中做了调整。

#### 社交图标扩展

&emsp;&emsp;H2O 原有的社交图标其实已经比较广泛，只是还有些领域局限性，比如学术研究人员可能更希望展示谷歌学术、ResearchGate、ORCID 等社交图标及链接，而运维开发人员可能更希望展示 SegmentFault、CSDN、博客园等社交图标及链接。这里在 H2O 提供的社交图标类型基础上做了这些平台图标的扩充，同时尝试了 Symbol 引用的方式来实现社交图标鼠标悬停的效果，从而简化代码（H2O 采用的是字体图标的方式，需要为每一个社交图标定义不同的主题色）。

![社交图标 SNS](https://i.luish.cc/blog/UpnQdk.webp)

#### 查看大图

&emsp;&emsp;查看大图功能的确对于读者的阅读体验来说有很大的提升。就像我们阅读文献一样，可能首先会只看文章附图来大致掌握文章的核心点。博文的查看大图功能也可能有这样的异曲同工之妙。这里是采用的 [Fancybox](https://fancyapps.com/docs/ui/fancybox) 插件实现的。H2O-ac 主题中只使用了最简单的配置，用户可以根据需求查看文档做出更多的修改。

![查看大图 Fancybox](https://i.luish.cc/blog/BzfBoz.webp)

(2022年4月30日更新)

&emsp;&emsp;由于 fancybox 库作者对原使用的 v3.5.7 版本不再进行维护和更新，现将版本更新至新的 v4.0 版本，即 [fancyapps/ui](https://github.com/fancyapps/ui)。另，新增将 alt 内容作为图片的描述显示在 fancybox 中。

#### 深色模式切换按钮

(2022年4月30日更新)

&emsp;&emsp;原来 H2O 主题的深色模式切换需要在 _config.yml 文件中配置开启，并且只能在固定时间段使用。此次更新在页面右上角提供了深色/浅色模式一键切换按钮，如下图所示。由于更新了深色模式采用 cookie 的方式来确定，此深色模式切换按钮可以与原来的深色模式配置共存。

![浅色模式 Day mode](https://i.luish.cc/blog/EPhFN9.webp)

![深色模式 Night mode](https://i.luish.cc/blog/BD7BqC.webp)

#### 提示框

(2022年4月30日更新)

&emsp;&emsp;通过引入 [lazee/premonition](https://github.com/lazee/premonition) 库新增五种提示框：笔记、提示、警告、错误、引用，完全兼容原生 Markdown 语法，并对样式进行了主题适应。以下为五种提示框的实际效果。

> note ""
> The body of the note goes here. Premonition allows you to write any `Markdown` inside the block.

> info "小提示"
> The body of the info goes here. Premonition allows you to write any `Markdown` inside the block.

> warning ""
> The body of the warning goes here. Premonition allows you to write any `Markdown` inside the block.

> error ""
> The body of the error goes here. Premonition allows you to write any `Markdown` inside the block.

> citation "莎士比亚"
> To be or not to be is a question.

#### 代码高亮优化

&emsp;&emsp;本人使用 H2O 主题的时候代码高亮功能还是沿用的 Jekyll 自带的，后来 H2O 主题也开始采用了 [Prism.js](https://prismjs.com/)。不过由于使用的是 `OKAIDIA` 高亮主题，所以有些段落中的格式化字段显示上有些问题。这里，仍然采用默认主题，并且扩增到 Prism.js 支持的所有编程语言类型。效果可以从前一句的 OKAIDIA 字段和下面即将出现的代码片段看出。

```css
@font-face {
  font-family: 'Merriweather';
  src: local('Merriweather'), url(https://fonts.gstatic.com/...) format('woff2');
}
```

(2022年5月14日更新)

&emsp;&emsp;更换 Prism 库加载方式，采用按需自动加载代码类型，尽可能减少因 Prism 造成的阻塞。修复了某些样式问题。增加显示行数支持、官方主题选择支持。如下所示可以进行设置，具体主题风格样式可以访问 [Prism 官网](https://prismjs.com/) 了解更多。

(2022年5月23日更新)

&emsp;&emsp;除官方代码库中默认代码主题外，新增扩展代码主题支持，比如常用的 One Light 等等。具体主题风格样式可以查看 [PrismJS/prism-themes](https://github.com/PrismJS/prism-themes/tree/master/themes) 了解更多。

```yaml
# Prism
prism:
  theme: tomorrow
  line_numbers: true
```

#### 代码复制

(2022年5月1日更新)

&emsp;&emsp;由于主题设置有复制自动添加版权保护文字，导致复制代码或无法直接使用。但是如果直接去掉版权保护又不大合适，于是新增代码复制功能。当使用如下所示代码片段右上角的复制按钮时，代码会被复制到粘贴板，且不包含版权保护文字，可以放心直接使用。

(2022年5月14日更新)

&emsp;&emsp;调整复制按钮位置，自动识别代码块的代码类型并显示。

```html
<!-- Target -->
<input id="foo" value="https://github.com/zenorocha/clipboard.js.git">

<!-- Trigger -->
<button class="btn" data-clipboard-target="#foo">
    <img src="assets/clippy.svg" alt="Copy to clipboard">
</button>
```

#### 文章置顶功能

(2022年5月26日更新)

&emsp;&emsp;鉴于现有的 Jekyll 文章置顶库有点年久失修，决定徒手实现了一下文章置顶功能。具体文章列表页和归档页置顶效果如下所示：

![文章置顶 Top acticles](https://i.luish.cc/blog/mcF2Z3.webp)
![归档页文章置顶 Top acticles in archives](https://i.luish.cc/blog/yajcoi.webp)

#### 分页依赖升级

(2022年5月26日更新)

&emsp;&emsp;由于原有的 jekyll-paginate 库已停止更新，所以升级到目前更新、维护活跃的 [jekyll-paginate-v2](https://github.com/sverrirs/jekyll-paginate-v2) 库。原有的分页配置自 v1.1.7 版本后无法使用，请更换为如下类似设置：

```yaml
# _config.yml 旧配置
paginate: 10
paginate_path: 'blog/page:num'

# _config.yml 新配置
pagination:
  enabled: true
  per_page: 10
  permalink: 'page:num/'
```

&emsp;&emsp;另外，blog/index.html 的头部信息中应该加上如下**启用分页**的配置。否则，jekyll-paginate-v2 不会主动工作。

```yaml
pagination: 
  enabled: true
```

#### 封面图片作者及链接

(2022年5月26日更新)

&emsp;&emsp;一直以来封面图片都是来自 [Unsplash](https://unsplash.com) 的免费高清图片，为了表明封面图片的来源和作者，现在文章的元信息中添加了对封面图片作者及链接的支持。如果想要声明，可以直接在文章的头部信息中添加如下配置：

```yaml
......
cover: ''
cover_author: ''
cover_author_link: ''
......
```

&emsp;&emsp;非文章的页面中也可以像上面那样声明相关的封面作者及链接，效果如下所示：

![页面封面图片信息 Cover author for pages](https://i.luish.cc/blog/fzWjPs.webp)

#### 字数统计及阅读时间估计

&emsp;&emsp;字数统计及阅读时间估计这个小功能其实以前在用 WordPress 的时候比较常见。虽然说统计和估计的结果不一定完全准确，但是还是起到了一定的辅助阅读的作用。效果可以查看本页标题下的基本信息区域。

#### 时间本地化与最近更新时间

(2022年5月22日更新)

&emsp;&emsp;为了支持来自不同时区的读者直接可以看到文章发布对应的本地时间，现已利用 dayjs 新增**时间本地化**功能。并利用 Github API 查询页面的最近一次 commit 更新时间作为文章**最近更新时间**。效果如下图所示。

![构建位置时区 Jekyll deployment timezone](https://i.luish.cc/blog/Anb4xH.webp)
![读者时区 Reader timezone](https://i.luish.cc/blog/NMPXmQ.webp)

&emsp;&emsp;如需使用**最近更新时间**功能，务必在 _config.yml 文件中添加以下配置项：

```yaml
# Github
github:
  enabled: true
  owner: github_username
  repository: github_project_name
```

&emsp;&emsp;如未正确进行以上配置，默认会将最近更新时间与发布时间保持一致。

#### 版权显式声明

(2022年5月18日更新)

&emsp;&emsp;之前的版本只会在页面底部的信息栏中显示一个 CC 4.0 的小图标，不是很醒目。根据调研其他静态网站主题，发现一般都会在文章的末尾自动生成一个比较醒目的版权声明。另外，在版权声明中也将根据最近更新时间来判断内容是否可能过时。如果最近更新时间距离当前时间大于 365 天，则会显示具体日期并提醒有内容过时的可能。效果如下所示。

![版权显式声明 Copyright](https://i.luish.cc/blog/scNRyd.webp)
![内容可能过时提醒 Long time ago notification](https://i.luish.cc/blog/C8RWtL.webp)

#### 文章侧边索引导航

(2022年1月9日更新)

&emsp;&emsp;在一些基于 Bootstrap 前端框架的 Jekyll 主题中，这个功能比较常见。由于本主题未使用 Bootstrap 前端框架，所以添加起来稍微有些麻烦，现已增加此功能。在浏览器窗口超过 1050 px 的情况下，在文章页面可以正常看到右侧的文章侧边索引导航。当窗口滑动时，侧边索引导航也会跟着滑动。在浏览器窗口不足 1050 px 的情况下，侧边索引导航自动隐藏。在 _config.yml 配置文件中，可以通过设置 `toc: false` 来全局禁用此功能。

(2022年4月30日更新)

&emsp;&emsp;在原来的基础上增加了跟随左侧内容滑动高亮。当左侧内容向上或向下滑动时，右侧索引导航将会使对应的对应一级标题高亮。

(2022年5月14日更新)

&emsp;&emsp;为文章的移动端页面添加了索引导航按钮。鉴于单页面的内容有限及侧边位置空间有限，暂未对单页面进行支持。

#### 支持 Waline 评论系统

&emsp;&emsp;目前已支持基于 Valine 衍生的简洁、安全的评论系统 Waline。可以根据官方提供的 [快速上手](https://waline.js.org/guide/get-started.html) 进行配置，以下为 _config.yml 中需要配置的内容：

```yaml
# _config.yml

comments:
  waline: true
  waline_url: https://xxxxxx.vercel.app
```

&emsp;&emsp;~~目前未对多评论系统同时支持进行优化，所以如果 Disqus 和 Waline 同时开启时，Disqus 在前 Waline 在后同时出现。如果用户环境无法访问 Disqus 即只能看到 Waline。~~

(2022年5月22日更新)

&emsp;&emsp;新增多评论切换按钮：当同时使用 Disqus 和 Waline 时，会在评论区域的右上角看到一个左右滑动切换按钮。如下所示，从左往右滑动即可从 Disqus 切换到 Waline。

&emsp;&emsp;同时修复了手动切换深色模式时 Disqus 不会自动切换模式而造成的显示问题。目前在模式切换时 Disqus 会主动进行重新加载以适应当前模式。

![Disqus 评论系统 Disqus comment](https://i.luish.cc/blog/WBgbUB.webp)
![Waline 评论系统 Waline comments](https://i.luish.cc/blog/45JQ9H.webp)

#### 支持 PWA

(2022年5月11日更新)

&emsp;&emsp;全面支持 PWA，访问速度得到较大提升。移动端访问可以像原生 APP 那样使用。如果访问过全站一遍之后，则可以完全离线使用。如下所示，可以配置 PWA 的主题色和短名称。

```yaml
# PWA
pwa:
  color: '#81BBFF'
  short_name: 'lisz'
```

#### 支持 Mermaid

(2022年8月29日更新)

&emsp;&emsp;不少同学可能会有在文章中放置流程图的需求，为了满足这一需求，现添加了 [Mermaid](https://mermaid-js.github.io/mermaid/#/) 来支持像写代码一样画图。

&emsp;&emsp;为了兼容 Markdown 语法，这里采用了自定义的代码类型。当代码类型为 `mermaid` 时，PrismJS 会自动以代码的形式美化展示；当代码类型为 `mermaid2` 时，页面会自动使用 Mermaid 画成图展示出来，如下所示。

&emsp;&emsp;考虑到页面宽度有限，Mermaid 所画出的甘特图等其他比较大一点的图不太好看，也增加了**放大重绘**的功能。如下所示，点击图的右上角的按钮即可全屏查看大图。

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```mermaid2
    graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```mermaid2
    gantt
      title A Gantt Diagram
      dateFormat x
      axisFormat %L
      section Section
      A task           :a1, 0, 30ms
      Another task     :after a1, 20ms
      section Another
      Another another task      :b1, 20, 12ms
      Another another another task     :after b1, 24ms
```

```mermaid2
    gantt
    dateFormat  YYYY-MM-DD
    title       Adding GANTT diagram functionality to mermaid
    excludes    weekends
    %% (`excludes` accepts specific dates in YYYY-MM-DD format, days of the week ("sunday") or "weekends", but not the word "weekdays".)

    section A section
    Completed task            :done,    des1, 2014-01-06,2014-01-08
    Active task               :active,  des2, 2014-01-09, 3d
    Future task               :         des3, after des2, 5d
    Future task2              :         des4, after des3, 5d

    section Critical tasks
    Completed task in the critical line :crit, done, 2014-01-06,24h
    Implement parser and jison          :crit, done, after des1, 2d
    Create tests for parser             :crit, active, 3d
    Future task in critical line        :crit, 5d
    Create tests for renderer           :2d
    Add to mermaid                      :1d
    Functionality added                 :milestone, 2014-01-25, 0d

    section Documentation
    Describe gantt syntax               :active, a1, after des1, 3d
    Add gantt diagram to demo page      :after a1  , 20h
    Add another diagram to demo page    :doc1, after a1  , 48h

    section Last section
    Describe gantt syntax               :after doc1, 3d
    Add gantt diagram to demo page      :20h
    Add another diagram to demo page    :48h
```

#### 配置项

&emsp;&emsp;配置项中新增了**友情链接**和**备案号**功能，可以直接在 _config.yml 文件的对应配置项下设置即可，如下所示。友情链接主要是方便跟其他博主交换友链，备案号主要是为了方便部署在国内需备案的 vps 或虚拟主机上。此处，二者都可以置空。

(2022年4月30日更新)

&emsp;&emsp;新增**全站一键灰度化功能**、**时间格式**配置。在国家公祭日等需要灰度化以示哀悼的时候可以将灰度化配置设置为 true，平常使用默认配置 false。时间格式这里一共提供了 3 种：第一种中英文站点使用皆宜，第二种适用于英文站点，第三种适用于中文站点。默认时间格式为第一种。

(2022年5月14日更新)

&emsp;&emsp;新增 [**不蒜子**](https://busuanzi.ibruce.info/) 统计方式，可以显示全站访问次数、全站访问用户数、文章页面阅读量。如下设置可以开启。

(2022年5月16日更新)

&emsp;&emsp;新增 [**umami**](https://github.com/mikecao/umami) 统计方式，需要自行先搭建 umami 然后接入。接入配置只需要如下所示配置跟踪 id 和 JS 脚本地址。

```yaml
# Links 友情链接
links:
  'Mr Li': 'https://lisz.me'

# Beian 备案号
beian: '沪ICP备xxxxxxxx号'

# Gray 灰度化
gray: true

# Time format 时间格式 
# 0 -- 2022-04-29    1 -- 29 Apr 2022   2 -- 2022年4月29日
formats:
  time: 0 

# Busuanzi Analytics
busuanzi: true

# Umami Analytics
umami:
  status: true
  id: xxxxxxxxxxxxx
  js: https://umami.example.com/umami.js
```

#### 前端自动构建工作流优化

&emsp;&emsp;H2O 主题中使用了 Gulp + ~~Node-Sass~~ Sass 的方案来自动化前端构建工作流。不得不说，这个方案还是很不错的，只是随着 Gulp 和 ~~Node-Sass~~ Sass 版本的更新，对 NodeJS 环境及其他依赖库都有一些要求。这里，H2O-ac 主题在 package.json 文件中将所有库都更新到目前最新，对应版本列表如下所示。另外，为了减少一些第三方 CSS 样式的请求数，利用自动构建工作流将固定的第三方 CSS 样式文件合并并压缩为 plugins.min.css 文件。app.min.css 仍为多个自编写 CSS 样式文件的合并压缩。

| 运行环境或依赖库 | 版本号 |
| :--: | :--: |
| NodeJS | v17.0.0 |
| gulp | v4.0.2 |
| gulp-clean-css | v4.3.0 |
| gulp-rename | v20.0 |
| gulp-sass | v5.0.0 |
| gulp-uglify | v3.0.2 |
| gulp-concat | v2.6.1 |
| ~~node-sass~~ | ~~v7.0.0~~ |
| sass | v1.51.0 |

## 使用方法

### 初始化

#### 方式一：从模板新建博客

&emsp;&emsp;为了方便用户使用 H2O-ac 主题，特别提供了 Github 的模板功能。如下图所示，访问 [H2O-ac](https://github.com/zhonger/jekyll-theme-H2O-ac) 可以看到如下的 Use this template 按钮，点击该按钮即可用 H2O-ac 主题创建自己的博客代码仓库。想要了解更多步骤，可以访问 Github 官方文档之 [从模板创建仓库](https://docs.github.com/cn/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)。

![从模板新建 Start the blog from the template](https://i.luish.cc/blog/oHHZZh.webp)

#### 方式二：已有博客迁移

&emsp;&emsp;~~暂时无法支持 gem 直接切换主题，后续将更新此方式。目前只能使用方式一创建仓库后，将文章的 markdown 文件复制到 _posts 目录下应用 H2O-ac 主题。~~

(2021年12月26日更新)

&emsp;&emsp;现已支持使用 gem 直接切换主题 `jekyll-theme-h2o-ac`。同时，也推出了一键式构建工具 [easy-to-h2o-ac](https://github.com/zhonger/easy-to-h2o-ac)，详细可以见项目主页。

### 本地测试

&emsp;&emsp;在进行本地测试时，如果需要修改一些样式，则需要先执行 `npm install` 来完成前端自动构建工作流依赖库的安装。注意，这里设定的可用 NodeJS 版本为 v17.0.0，使用老版本会报错。其次，务必使用 `bundle install` 安装主题所需的所有 Ruby 依赖库。最后执行 `bundle exec jekyll serve --livereload` 命令即可在本地实时同步预览。只要不修改 _config.yml 文件，不必中断后再启动。然后就是在 `_posts` 目录下写 markdown 文章即可。

### 发布部署

&emsp;&emsp;由于 Github 提供 Jekyll 静态生成器的静态页面托管，只要打开仓库的 Pages 功能，当推送更新到 Github 时即会自动部署。此处值得注意的是，如果代码仓库的名字不是 `username.github.io`，而也没有为该仓库的 Pages 提供自定义域名，那么这个仓库将会被部署到子目录，因此此时必须在 _config.yml 文件中设置 base_url，从而生成正常的静态页面。

## 结束语

&emsp;&emsp;再次感谢廖柯宇及其他小伙伴们对 H2O 主题的付出，没有 H2O 主题就没有 H2O-ac 主题！H2O-ac 主题后续也将继续更新，欢迎小伙伴们使用和 [Star](https://github.com/zhonger/jekyll-theme-H2O-ac)，也欢迎大家一起来贡献代码。

（Ps: ~~由于沿用了 H2O 的 Logo，可能会侵犯廖柯宇的版权。如果的确如此，后续将会设计一个新的 Logo。~~ 已采用新 Logo。）
（2022年1月10日更新）
