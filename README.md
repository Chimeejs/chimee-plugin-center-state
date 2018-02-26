# chimee-plugin-center-state

## install

安装

```shell
# 依赖于 chimee， 首先需要安装 chimee
npm install chimee
# 安装控制条组件
npm install chimee-plugin-center-state
```

使用

```javascript
import chimee from 'chimee';
import chimeePluginCenterState from 'chimee-plugin-center-state';

// 安装插件
chimee.install(chimeePluginCenterState);
const player = new chimee({
  // ...
  // 使用插件
  plugin: [
    chimeePluginCenterState.name,
    errorTips: 'xxx' // 自定义错误信息
  ]
});
```

**也可以在页面中引用 `/lib/index.browser.js` 然后在页面中使用 chimeePluginCenterState**

## 包含状态

* 开始
* 暂停
* 快进
* 回退
* 音量加
* 音量减
