import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: resolve => require(['./pages/Index'], resolve),
            children: [
                {
                    path: 'discover',
                    name: 'discover',
                    component: resolve => require(['./pages/Discover'], resolve)
                },
                {
                    path: 'order',
                    name: 'order',
                    component: resolve => require(['./pages/Order'], resolve)
                }, {
                    path: 'training',
                    name: 'training',
                    component: resolve => require(['./pages/Training'], resolve)
                },
                {
                    path: 'user',
                    name: 'user',
                    component: resolve => require(['./pages/User'], resolve)
                }
            ]
        }
    ]
})
