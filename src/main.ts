import App from './App.vue'
import { createApp } from 'vue'
import './index.css'
import vDirectiveImagePreviewer from './index';
import 'uno.css'

const app = createApp(App)
app.directive("directiveImagePreviewer", vDirectiveImagePreviewer.directive.vDirectiveImagePreviewer);

app.mount('#app')
