import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vDirectiveImagePreviewer from './index';
const app = createApp(App)
app.directive("directiveImagePreviewer", vDirectiveImagePreviewer);

app.mount('#app')
