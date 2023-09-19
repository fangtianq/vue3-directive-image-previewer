import 'uno.css';
import './index.css';
import { App } from 'vue'
import vDirectiveImagePreviewer from "./directives/vue3DirectiveImagePreviewer";
import { useInc } from './composables/inc'
import components from './component'
// 所有组件
export * from './component'
vDirectiveImagePreviewer.install = (app:any)=>{
    app.component(vDirectiveImagePreviewer.name,vDirectiveImagePreviewer)
}

// 完整引入组件
const install = function (app: App) {
  components.forEach(component => {
    app.component(component.__name,component)
  })
}
export default {
    directive:{
        vDirectiveImagePreviewer
    },
    composables:{
        useInc
    },
    components:{
        install
    }
};