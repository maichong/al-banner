# al-banner
***
banner组件，展示一组广告图。宽度为全屏，高度为宽度的1/2。
### 使用方法
---
```
//安装npm包
npm install al-banner --save
```
### 接口说明
---
|props    |type |default| Description|
|---------|:----|:------|:-----------|
|indicatorDots|Boolean |true|是否显示代表所引的"点"，默认显示。|
|autoPlay|Boolean | true|是否自动循环显示，默认自动循环。|
|interval|Number | 3000|自动切换时间间隔，默认3秒。|
|duration|Number | 1000|切换速度，默认1秒。|
|list|Array|[]|显示的广告图数组。数据结构见[[alaska-banner]](https://github.com/maichong/alaska-banner/blob/master/src/models/Banner.js),其中`pic`属性为必选属性|
|onBannerTap|Function| |点击事件,点击任一广告图时触发，返回数组元素中的`id`和`url`,如果`没有url`则只返回`id`，如果`没有id`则只返回`url`，如果`两者都没有`，则`不会触发事件`。|
---
#### 关于页面和组件间相互传值以及该组件所依赖的基础框架详见[labrador](https://github.com/maichong/labrador);
