import imagePreviewer from './imagePreviewer.vue';
import { createApp } from "vue";
let mountNode = null;
export default {
    install: (app) => {
    },
    name: 'vDirectiveImagePreviewer',
    mounted: (binding) => {
        let { src } = binding;
        binding._clickHandler = handleClick({
            src
        });
        binding.addEventListener('click', binding._clickHandler);
    },
};
const handleClick = ({ src: bindingSrc }) => {
    return (evt) => {
        const ImagePreviewer = createApp(imagePreviewer);
        mountNode = document.createElement("div");
        ImagePreviewer.provide('src', [bindingSrc]);
        ImagePreviewer.provide('closeE', handleClose(ImagePreviewer, mountNode));
        ImagePreviewer.mount(mountNode);
        document.body.appendChild(mountNode);
    };
};
const handleClose = (vm, sourceDom) => {
    return () => {
        vm.unmount();
    };
};
//# sourceMappingURL=vue3DirectiveImagePreviewer.js.map