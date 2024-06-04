import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/button'},
        {path: '/button', component: ()=> import('./components/Button.vue')},
        {path: '/table', component: ()=> import('./components/Table.vue')},
    ]
});

export default router;