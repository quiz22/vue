import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './components/Home.vue';
import About from './components/About.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {path: '/home',component: ()=>import('./components/Home.vue')},
        {path: '/About',component: ()=>import('./components/About.vue')}
    ]
});

export default router;
