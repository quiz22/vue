import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import Vant from 'vant';
import 'vant/lib/index.css';
import AntDesignVue from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css'
import router from './router.js';

createApp(App).use(ElementPlus).use(Vant).use(AntDesignVue).use(router).mount('#app')
