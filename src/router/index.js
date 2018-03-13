import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/index'
import Post from '@/components/pages/post'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [{
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/post',
            name: 'Post',
            component: Post
        }
    ]
})
