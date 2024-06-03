import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: () => import('./components/Home.vue') },
        {
            path: '/about',
            component: () => import('./components/About.vue'),
            children: [
                { path: 'tab1', component: () => import('./components/pages/Tab1.vue') },
                { path: 'tab2', component: () => import('./components/pages/Tab2.vue') }
            ]
        },
        {
            path:'/movie',
            component: ()=>import('./components/Movie.vue'),
            children: [
                {path: ':id', name: 'MovieDetails', component: ()=>import('./components/MovieDetails.vue'), props: true}
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: ()=>import('./components/Login.vue')
        }
    ]
});

router.beforeEach((to, from, next)=>{
    let isLogin = false;
    if(to.name === 'MovieDetails'){
        if(isLogin){
            next();
        }else{
            next({name:'login'});
        }
    }else{
        next()
    }
});

export default router;