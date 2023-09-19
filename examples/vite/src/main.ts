import { createApp } from 'vue'
import App from './App.vue'
import directiveImagePreviewer from 'vue3-directive-image-previewer'

const app = createApp(App)
app.use(directiveImagePreviewer.components.install)
app.directive('directiveImagePreviewer',directiveImagePreviewer.directive.vDirectiveImagePreviewer)
app.mount('#app')
