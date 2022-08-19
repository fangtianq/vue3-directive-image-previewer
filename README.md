# Vue 3 + TypeScript + Vite

## 功能简介

参考：[vue-directive-image-previewer](https://github.com/wszxdhr/vue-directive-image-previewer)
支持vue3的指令式 图片点击预览  
无任何多余参数
例子：  

## 能使用，简陋版

## 打包步骤

```node
pnpm adduser
pnpm config set registry https://registry.npm.taobao.org
pnpm config set registry https://registry.npmjs.org/

修改版本号
复制directives里边的vue到dist里去
tsc
pnpm publish


```

## 使用

```js
npm install vue3-directive-image-previewer@latest -D
import directiveImagePreviewer from 'vue3-directive-image-previewer'
const app = createApp(App)
app.directive("directiveImagePreviewer", directiveImagePreviewer);
app.mount('#app')

<img v-directive-image-previewer src='https://pic1.zhimg.com/80/v2-f920346b7269e801ab93dc87e0e18ba4_720w.jpg?source=1940ef5c' />
```
