import { App } from 'vue'

import Counter from './Counter.vue'
Counter.install = function (app: App) {
  // 组件注册，按需引入
  app.component(Counter.name, Counter)
  return app
}

export default Counter

