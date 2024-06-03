import {createRouter, createWebHashHistory, RouterView} from 'vue-router';
import {h} from 'vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', redirect: '/login'},
        {path: '/login', component: ()=> import('./components/Login.vue')},
        {
            path: '/home', 
            component:()=>import('./components/Home.vue'),
            redirect: '/home/users',
            children: [
                {
                    path: 'users', 
                    component: { render: () => h(RouterView) },
                    children: [
                        {path: '', component: ()=>import('./components/subComponents/MyUsers.vue')},
                        {path: ':id', component: ()=>import('./components/subComponents/MyUserDetail.vue'), props: true}
                    ]
                },
                {path: 'rights', component: ()=>import('./components/subComponents/MyRights.vue')},
                {path: 'goods', component: ()=>import('./components/subComponents/MyGoods.vue')},
                {path: 'orders', component: ()=>import('./components/subComponents/MyOrders.vue')},
                {path: 'settings', component: ()=>import('./components/subComponents/MySettings.vue')},
                // {path: 'users/:id', component: ()=>import('./components/subComponents/MyUserDetail.vue'), props: true}
            ]
        }
    ]
});

router.beforeEach((to, from, next)=>{
    if(to.path === '/login'){
        next();
    }else{
        const token = localStorage.getItem('token');
        if(!token){
            alert('身份验证失败！请重新登录！')
            next('/login');
        }else{
            next();
        }
    }
});

export default router;