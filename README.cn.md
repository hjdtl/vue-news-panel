# AsheUI
material design ui for vue2

使用说明
## 下载
在项目的根目录下安装改组件：

```npm
npm install ashe-ui -s
```

## 使用(示例)
1. 在项目入口的引入该框架：

[English](https://github.com/hjdtl/AsheUI)

```javascript
import AsheUI from 'ashe-ui'
Vue.use(AsheUI,Vue)
```

2. 在Vue组件的template中实例化：

```html 
<d-news :newsObj=news />
```

3. d-news props数据说明

在实例的组件通过newsObj接收数据，数据类型要求：
```javascript
data() {
  return {
    news: {
          type: 5,
          imgList: ["https://p3.pstatp.com/list/6ec60003439bd0e04b45", "https://p3.pstatp.com/list/6ec60003439bd0e04b45", "https://p3.pstatp.com/list/6ec60003439bd0e04b45"],
          title:'这是你的标题部分',
          time: '这里显示时间',
          author: '作者姓名等其他内容'
      },
    }
}
```

## 打包
```bash
webpack
```

## 其他

组件清单

* news
* slideDown
* loading


该组件还在更新中，欢迎issues。

2018年3月28日