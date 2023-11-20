import { App } from 'vue';
import ExTable from './components/ExTable/index.vue';

declare const ExComponents: {
    install(App: App<any>): void;
};
export default ExComponents;

export { ExTable }

export { }
