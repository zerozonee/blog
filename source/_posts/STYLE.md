---
title: 样式测试
date: 2019-06-10 12:59:19
categories: [TEST2]
tags: [test_tag,test_tag2]
---
abc.b
# 标题测试区

## 二级标题

### 三级标题

取消四级标题

---




# 样式测试区
**粗体**

*斜体*

***粗斜体***

`强调块`

~~删除线~~

取消粗体



---

# 图片和链接
*PS VSCode中本地图片加载不出来*

![图片](http://zero.cn-bj.ufileos.com/img-1560297747870.jpg)

[百度](https://baidu.com)

---

# 列表
- If you love someone,you must let him know.Maybe you‘d get no answer,but at least you have tied and won‘t regret.

- If two past lovers can remain friends, it's either they were never in love or they still are.

- You are the reason why I became stronger.But still，you are my weakness.

- Love a person too much, the heart will be drunk; Hate a person too long, the heart will be broken.

---

# 表格
标题1|标题2
:-:|:-:
正文1|正文2
正文3|正文4

---

# 块
Markdown原生块：

> If you love someone,you must let him know.Maybe you‘d get no answer,but at least you have tied and won‘t regret.

阳光：  

<span class="highlevel-style sunshine">
    <section class="top"></section>
    <span class="sunshine-text">If you love someone,you must let him know.Maybe you‘d get no answer,but at least you have tied and won‘t regret.</span>
    <section class="bottom"></section>
</span>

清爽：

<span class="highlevel-style simple">
<section class="top"></section><span class="simple-text">If you love someone,you must let him know.Maybe you‘d get no answer,but at least you have tied and won‘t regret.</span><section class="bottom"></section></span>

绿色：

<span class="highlevel-style green">If you love someone,you must let him know.Maybe you‘d get no answer,but at least you have tied and won‘t regret.</span>

序号：

<span class="highlevel-style num">
<section class="num-first"><section style="width:15%;"><section class="num-second"><section class="num-third"><p><strong><span class="num_num" style="color: #ffffff;">01</span></strong></p></section></section></section><section class="num-fourth"><section style="margin-left:5px;"><section class="num-fifth"><section style="margin-top: -14px;"><section class="num-sixth"><p><span class="num_title">TEST1</span></p></section></section></section></section><section style="margin:5px 0px;"><p><span style="font-size: 14px;">If you love someone,you must let him know.Maybe you‘d get no answer,but at least you have tied and won‘t regret.</span></p></section></section></section>

<span class="highlevel-style num">
<section class="num-first"><section style="width:15%;"><section class="num-second"><section class="num-third"><p><strong><span class="num_num" style="color: #ffffff;">02</span></strong></p></section></section></section><section class="num-fourth"><section style="margin-left:5px;"><section class="num-fifth"><section style="margin-top: -14px;"><section class="num-sixth"><p><span class="num_title">TEST2</span></p></section></section></section></section><section style="margin:5px 0px;"><p><span style="font-size: 14px;">If you love someone,you must let him know.Maybe you‘d get no answer,but at least you have tied and won‘t regret.</span></p></section></section></section>


<span class="highlevel-style num">
<section class="num-first"><section style="width:15%;"><section class="num-second"><section class="num-third"><p><strong><span class="num_num" style="color: #ffffff;">02</span></strong></p></section></section></section><section class="num-fourth"><section style="margin-left:5px;"><section class="num-fifth"><section style="margin-top: -14px;"><section class="num-sixth"><p><span class="num_title">TEST2</span></p></section></section></section></section><section style="margin:5px 0px;"><p><span style="font-size: 14px;">If you love someone,you must let him know.Maybe you‘d get no answer,but at least you have tied and won‘t regret.</span></p></section></section></section>

<span class="highlevel-style num">
<section class="num-first"><section style="width:15%;"><section class="num-second"><section class="num-third"><p><strong><span class="num_num" style="color: #ffffff;">02</span></strong></p></section></section></section><section class="num-fourth"><section style="margin-left:5px;"><section class="num-fifth"><section style="margin-top: -14px;"><section class="num-sixth"><p><span class="num_title">TEST2</span></p></section></section></section></section><section style="margin:5px 0px;"><p><span style="font-size: 14px;">If you love someone,you must let him know.Maybe you‘d get no answer,but at least you have tied and won‘t regret.</span></p></section></section></section>

<span class="highlevel-style num">
<section class="num-first"><section style="width:15%;"><section class="num-second"><section class="num-third"><p><strong><span class="num_num" style="color: #ffffff;">02</span></strong></p></section></section></section><section class="num-fourth"><section style="margin-left:5px;"><section class="num-fifth"><section style="margin-top: -14px;"><section class="num-sixth"><p><span class="num_title">TEST2</span></p></section></section></section></section><section style="margin:5px 0px;"><p><span style="font-size: 14px;">If you love someone,you must let him know.Maybe you‘d get no answer,but at least you have tied and won‘t regret.</span></p></section></section></section>

*PS VSCode中不支持Latex显示*

$$
asdfadfafasdf
$$

```typescript
const codeBlock = (editor:vscode.TextEditor) =>{
    let supportLanguages = ['applescript','applescript3','bash','coldfusion','c','csharp','css','delphi','diff','erl','groovy','java','javafx','javascript','perl','php','text','plain','python','ruby','sass','scala','sql','vb','xml','objc','fsharp','r','matlab','swift','go','json','yaml','html','typescript','custom']
    vscode.window.showQuickPick(supportLanguages).then(str=>{
        if(str){
            if(str=='custom'){
                str='{$1:language}';
            }
            editor.insertSnippet(new vscode.SnippetString('```'+str+'\n$2\n```'));
        }
    });
}
```
