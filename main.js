! function () {
    //封装  
    /**
     * @description: 
     * @param {type} String element string 
     * @return: element
     */
    function createAndappendElement(ele, fatherBox, className) {
        let element = document.createElement(ele)
        element.className = className;
        fatherBox.append(element);
        return element;
    }


    //code显示在可见页面
    let viewpre = createAndappendElement('pre', document.body, 'viewPre')

    //code写入样式里面
    let style = createAndappendElement('style', document.head, 'styleCode')

    //一张白纸
    let div = createAndappendElement('div', document.body, 'markdown-body')
    let fatherDiv = document.querySelector('.markdown-body')
    let peper = createAndappendElement('pre', fatherDiv, 'peper')

    // 动态简历开始
    let result = `
    /**下面是我的个人的简单动态简历
    首先添加一点样式
    */

    * { 
        transition:all 1s;
    }
    html {
        background: #eee;
    }
    .viewPre {
        border: 1px solid #aaa;
        padding: 16px;
        overflow: hidden;
    }
    body {
        font-size:14px;
    }
    
    /*代码高亮*/

     .token.selector { color: #690; }
     .token.property { color: #905; }

     /* 加一个呼吸效果 */
     
     .viewPre{
        animation: breath 0.5s infinite alternate-reverse;
      }

      /* 现在正式开始 */
      /* 我需要一张白纸 */

      .viewPre {
          position:fixed;
          left:0;
          width:50%;
          height:100%;
          margin:16px;
      }

      .markdown-body {
          height:100%;
          background-color: #444;
          position:fixed;
          right:0;
          width:50%;
          font-size:16px;
          padding:16px;
      }

      .peper {
          width:100%;
          height:100%;
          display: block;
          padding:16px;
          background:white;
          overflow: auto;

      }
      /* 于是我就可以在白纸上写字了，请看右边 */
    `
    let resume = `
# 自我介绍
我叫 XXX
1990 年 1 月出生
XXX 学校毕业
自学前端半年
希望应聘前端开发岗位

# 技能介绍

熟悉 JavaScript CSS

# 项目介绍

1. XXX 轮播
2. XXX 简历
3. XXX 画板

# 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx

# 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx

# 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx

# 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx

# 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx

# 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx

# 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx

# 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
`
    writeCss();//执行
    function writeCss() {
        let n = 0;
        let id = setInterval(function () {
            n += 1
            let code = result.substring(0, n)
            var html = Prism.highlight(code, Prism.languages.css);
            viewpre.innerHTML = html;
            style.innerHTML = code;
            viewpre.scrollTop = viewpre.scrollHeight;
            if (n >= result.length) {
                window.clearInterval(id)
                //开始写字
                writeResume();
            }

            // Returns a highlighted HTML string

        }, 10)
    }



    function writeResume() {
        let n = 0;
        let id = setInterval(function () {
            n += 1
            let code = resume.substring(0, n)
            peper.innerHTML = code;
            peper.scrollTop = peper.scrollHeight;
            if (n >= resume.length) {
                window.clearInterval(id)
                //将Markdown文本转化位HTML
                markdownTransHtml(peper.innerHTML);
            }


        }, 10)
    }

    function markdownTransHtml(e) {
        console.log(e)
        peper.innerHTML = marked(resume);

    }

}.call()