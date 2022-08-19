import imagePreviewer from './imagePreviewer.vue'
import { ComponentOptions,createApp, App } from "vue";
let mountNode = null;

interface optionI{
  src?:string;
}
export default{
    install:(app:any)=>{

    },
    name: 'vDirectiveImagePreviewer',
    mounted: (binding:ComponentOptions)=> {
        let {src} = binding
        binding._clickHandler = handleClick({
            src
        })
        binding.addEventListener('click', binding._clickHandler)
    },
}
const handleClick = ({src: bindingSrc}:optionI) => {
    return (evt:Event) => {
      const ImagePreviewer = createApp(imagePreviewer);
      mountNode = document.createElement("div");
      ImagePreviewer.provide('src', [bindingSrc])
      ImagePreviewer.provide('closeE', handleClose(ImagePreviewer, mountNode))
      ImagePreviewer.mount(mountNode)
      document.body.appendChild(mountNode)
    }
  }

  const handleClose = (vm:App<Element>, sourceDom:HTMLDivElement) => {
    return () => {
      vm.unmount()
    }
  }