(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{491:function(s,a,t){"use strict";t.r(a);var e=t(23),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 📚 准备工作")]),s._v(" "),t("h3",{attrs:{id:"技术栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#技术栈"}},[s._v("#")]),s._v(" 技术栈")]),s._v(" "),t("ol",[t("li",[s._v("Markdown")]),s._v(" "),t("li",[s._v("Git")]),s._v(" "),t("li",[s._v("Vuepress")]),s._v(" "),t("li",[s._v("Html(对界面要求不高可以忽略)")])]),s._v(" "),t("h3",{attrs:{id:"git配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git配置"}},[s._v("#")]),s._v(" Git配置")]),s._v(" "),t("ol",[t("li",[s._v("懒的写了，请自行百度或参考这篇文章《"),t("a",{attrs:{href:"https://blog.csdn.net/huangqqdy/article/details/83032408",target:"_blank",rel:"noopener noreferrer"}},[s._v("Git下载、安装与环境配置"),t("OutboundLink")],1),s._v("》")])]),s._v(" "),t("h3",{attrs:{id:"搭建环境并运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搭建环境并运行"}},[s._v("#")]),s._v(" 搭建环境并运行")]),s._v(" "),t("ol",[t("li",[s._v("安装Node.js，打开"),t("a",{attrs:{href:"http://nodejs.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Node.js官网"),t("OutboundLink")],1),s._v("，点击下载相应系统的文件。")]),s._v(" "),t("li",[s._v("从GitHub上下载工程")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git clone https://github.com/gcfae/dms.git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("进入文件夹，并安装")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("cd dms\n# 配置淘宝镜像，速度快一些\nnpm config set registry https://registry.npm.taobao.org\nnpm install\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("运行")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm run dev\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("编译完成后会生成本地访问地址，浏览器打开即可预览")])]),s._v(" "),t("h2",{attrs:{id:"日常维护"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#日常维护"}},[s._v("#")]),s._v(" 🌴 日常维护")]),s._v(" "),t("h3",{attrs:{id:"添加markdown文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加markdown文章"}},[s._v("#")]),s._v(" 添加markdown文章")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("添加文件/文件夹规则")]),s._v(" "),t("p",[s._v("目前架构基本定型，维护只需要修改"),t("code",[s._v("docs")]),s._v("中的文档文件夹，可在对应的文件夹下添加对应的markdown文件，需注意无论是添加文件夹或者文件，都需要按固定格式以 "),t("b",[s._v("序号.")]),s._v(" 开头，如"),t("code",[s._v("\\dms\\docs\\01.新人培训\\01.初级理论\\01.CCM.md")])])]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("仅修改md文件内容可以页面实时更新，但添加MD文件则需重新编译")])]),s._v(" "),t("h3",{attrs:{id:"front-matter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#front-matter"}},[s._v("#")]),s._v(" front matter")]),s._v(" "),t("p",[s._v("当你没有给.md文件的front matter (如下md开头三点划线之间书写的有效的YAML)，在运行开发服务npm run dev或打包npm run build时将自动为你生成 "),t("code",[s._v("指定标题(title)")]),s._v("、"),t("code",[s._v("时间(date)")]),s._v("、"),t("code",[s._v("永久链接(permalink)")]),s._v("、"),t("code",[s._v("分类(categories)")]),s._v("；你也可以自己手动设置这些数据，当你手动设置之后，相应的数据就不会再自动生成。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("---\ntitle: CCM\ndate: 2020-12-02 15:08:56\npermalink: /pages/b82798/\ncategories: \n  - 新人培训\n  - 初级理论\ntags: (根据需求添加)  \n  - 模组\nauthor: (根据需求添加)\n  name: George He \n---\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("建议")]),s._v(" "),t("p",[s._v("新建.md后，先保存运行，在自动生成的front matter中添加对应的"),t("code",[s._v("tags")]),s._v("或"),t("code",[s._v("author")]),s._v("即可")])]),s._v(" "),t("h3",{attrs:{id:"插入pdf链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插入pdf链接"}},[s._v("#")]),s._v(" 插入PDF链接")]),s._v(" "),t("p",[s._v("PDF存放路径：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\\dms\\docs\\.vuepress\\public\\pdf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在md中插入PDF链接")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(':telescope: <a href="$withBase(\'/pdf/科普-潜望式长焦镜头.pdf\')" target="_blank">《潜望式长焦镜头》</a>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("🔭 "),t("a",{attrs:{href:s.$withBase("/pdf/科普-潜望式长焦镜头.pdf"),target:"_blank"}},[s._v("《潜望式长焦镜头》")])]),s._v(" "),t("h3",{attrs:{id:"插入图片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插入图片"}},[s._v("#")]),s._v(" 插入图片")]),s._v(" "),t("p",[s._v("图片存放路径：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\\dms\\docs\\.vuepress\\public\\img\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在md中使用图片：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("![travis](/img/logo-nav.png)\n或者\n<img :src=\"$withBase('/img/logo-nav.png')\">\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("img",{attrs:{src:s.$withBase("/img/logo-nav.png")}}),s._v(" "),t("h3",{attrs:{id:"插入视频"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插入视频"}},[s._v("#")]),s._v(" 插入视频")]),s._v(" "),t("p",[s._v("视频存放路径：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\\dms\\docs\\.vuepress\\public\\video\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在md中插入视频：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('<video id="video1" controls="" preload="none" controlsList="nodownload" oncontextmenu="return(false);"\n  :poster="$withBase(\'/video/1.模组.jpg\')" style="width: 100%; height: 100%; object-fit: fill; margin: 0px;" >\n  <source id="mp4" :src="$withBase(\'/video/1.模组.mp4\')" type="video/mp4">\n</video>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("strong",[s._v("其中poster为封面图片")])]),s._v(" "),t("h2",{attrs:{id:"markdown扩展语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#markdown扩展语法"}},[s._v("#")]),s._v(" ⭐️ Markdown扩展语法")]),s._v(" "),t("h3",{attrs:{id:"自定义容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义容器"}},[s._v("#")]),s._v(" 自定义容器")]),s._v(" "),t("p",[t("strong",[s._v("输入")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("::: tip\n这是一个提示\n:::\n\n::: warning\n这是一个警告\n:::\n\n::: danger\n这是一个危险警告\n:::\n\n::: details 查看详情\n这是一个详情块，在 IE / Edge 中不生效\n:::\n\n::: theorem 牛顿第一定律\n假若施加于某物体的外力为零，则该物体的运动速度不变。\n\n::: right\n来自 [维基百科](https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B)\n:::\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("p",[t("strong",[s._v("输出")])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("这是一个提示")])]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("这是一个警告")])]),s._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[s._v("警告")]),s._v(" "),t("p",[s._v("这是一个危险警告")])]),s._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("查看详情")]),s._v(" "),t("p",[s._v("这是一个详情块，在 IE / Edge 中不生效")])]),s._v(" "),t("div",{staticClass:"custom-block theorem"},[t("p",{staticClass:"title"},[s._v("牛顿第一定律")]),t("p",[s._v("假若施加于某物体的外力为零，则该物体的运动速度不变。")]),s._v(" "),t("div",{staticClass:"custom-block right"},[t("p",[s._v("来自 "),t("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B",target:"_blank",rel:"noopener noreferrer"}},[s._v("维基百科"),t("OutboundLink")],1)])])]),t("h3",{attrs:{id:"emoji图标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#emoji图标"}},[s._v("#")]),s._v(" Emoji图标")]),s._v(" "),t("p",[t("strong",[s._v("输入")]),s._v(" "),t("code",[s._v(":smile:")]),s._v(" "),t("code",[s._v(":joy:")]),s._v(" "),t("code",[s._v("scream")]),t("br"),s._v(" "),t("strong",[s._v("输出")]),s._v("   😄 😂  😱"),t("br"),s._v("\n你可以在这个"),t("a",{attrs:{href:"https://www.webfx.com/tools/emoji-cheat-sheet/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Emoji列表"),t("OutboundLink")],1),s._v("找到所有可用的图标")]),s._v(" "),t("h2",{attrs:{id:"提交版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交版本"}},[s._v("#")]),s._v(" 💾 提交版本")]),s._v(" "),t("p",[s._v("本地git提交指令")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('git add -A\ngit commit -m "此次提交的简单描述"\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("请确认本地版本ok后再提交到git仓库主分支，切勿频繁提交")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git push origin master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("关于git")]),s._v(" "),t("p",[s._v("以上只是git常规提交指令，如需进一步了解git，请自行百度")])]),s._v(" "),t("h2",{attrs:{id:"打包-部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包-部署"}},[s._v("#")]),s._v(" 📦 打包&部署")]),s._v(" "),t("p",[s._v("最后由上海S组合入版本并上传服务器"),t("a",{attrs:{href:"http://192.168.2.124/",target:"_blank",rel:"noopener noreferrer"}},[s._v("FAE-DMS"),t("OutboundLink")],1),s._v("。")])])}),[],!1,null,null,null);a.default=n.exports}}]);