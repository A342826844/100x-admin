import { createApp } from 'vue';

/*
Chrome51 版本以后，Chrome 增加了新的事件捕获机制－Passive Event Listeners。
Passive Event Listeners：就是告诉前页面内的事件监听器内部是否会调用preventDefault函数来阻止事件的默认行为，以便浏览器根据这个信息更好地做出决策来优化页面性能。
当属性passive的值为true的时候，代表该监听器内部不会调用preventDefault函数来阻止默认滑动行为，Chrome浏览器称这类型的监听器为被动（passive）监听器。
目前Chrome主要利用该特性来优化页面的滑动性能，所以Passive Event Listeners特性当前仅支持mousewheel/touch相关事件。
*/
import 'default-passive-events';

import App from './App.vue';
import router from './router';
import store from './store';
import installAntd from './plugins/antd';

const app = createApp(App);
app.use(installAntd);
app.use(store).use(router).mount('#app');
