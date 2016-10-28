# al-banner
banner组件，展示一组广告图。宽度为全屏，高度为宽度的1/2。
### 使用方法
```
//安装npm包
npm install al-banner --save
```
### 接口说明
- indicatorDots：Boolean = true
是否显示代表所引的"点"，默认显示。
- autoPlay：Boolean = true
是否自动循环显示，默认自动循环。
- interval：Number = 3000
自动切换时间间隔，默认3秒。
- duration：Number = 1000
切换速度，默认1秒。
- list：Array
显示的广告图数组。数据结构如下：
```
[
    {
        "id":"580eff833eb5cd0008b5667b",//id 可选
        "url":"www.maichong.it",//点击时的跳转链接 可选
        "pic":'www.maichong.it/pic/123.png' //必选 图片地址
    }
]
```
- onBannerTap():(id,url)
点击事件 点击任一广告图时触发，返回数组元素中的id和url,如果没有url则只返回id，如果没有id则只返回url，如果两者都没有，则不会触发事件。
