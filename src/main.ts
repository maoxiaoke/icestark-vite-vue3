import { createApp } from 'vue'
import type { App as Root} from 'vue';
import App from './App.vue'
import isInIcestark from '@ice/stark-app/lib/isInIcestark';
import setLibraryName from '@ice/stark-app/lib/setLibraryName';

let vue: Root<Element> | null = null;

if (!isInIcestark ()) {
  createApp(App).mount('#app')
}

// 注意：`setLibraryName` 的入参需要与 webpack 工程配置的 output.library 保持一致
setLibraryName('microapp')

export function mount({ container }: { container: Element}) {
  vue = createApp(App);
  vue.mount(container);
}

export function unmount() {
  if (vue) {
    vue.unmount();
  }
}
