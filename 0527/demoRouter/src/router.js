import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './components/Home.vue';
import About from './components/About.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {path: '/',redirect: '/home'},
        {path: '/home',component: ()=>import('./components/Home.vue')},
        {
            path: '/about',component: ()=>import('./components/About.vue'),
            children:[
                {path:'tab1',component: ()=>import('./components/pages/Tab1.vue')},
                {path:'tab2',component: ()=>import('./components/pages/Tab2.vue')},
            ]
        }
    ]
});

export default router;
