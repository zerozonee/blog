---
title: 样式测试
date: 2019-06-10 12:59:19
categories: [TEST2]
tags: [test_tag,test_tag2]
---


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

![图片](/home/ns/Pictures/blog_img/qrwc.png)

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

> If you love someone,you must let him know.Maybe you‘d get no answer,but at least you have tied and won‘t regret.

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
