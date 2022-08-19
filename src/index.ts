import vDirectiveImagePreviewer from "./directives/vue3DirectiveImagePreviewer";
vDirectiveImagePreviewer.install = (app:any)=>{
    app.component(vDirectiveImagePreviewer.name,vDirectiveImagePreviewer)
}
export default vDirectiveImagePreviewer;