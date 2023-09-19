import 'uno.css';
import './index.css';
import { App } from 'vue';
export * from './component';
declare const _default: {
    directive: {
        vDirectiveImagePreviewer: {
            install: (app: any) => void;
            name: string;
            mounted: (binding: import("vue").ComponentOptions<{}, any, any, any, any, any, any, any>) => void;
        };
    };
    composables: {
        useInc: (n?: import("vue").Ref<number>) => readonly [import("vue").Ref<number>, (v?: number) => number];
    };
    components: {
        install: (app: App<any>) => void;
    };
};
export default _default;
