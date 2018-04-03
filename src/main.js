// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import 'highlight.js/styles/monokai-sublime.css' //样式文件
// import 'highlight.js/styles/atom-one-dark.css' //样式文件
import hljs from 'highlight.js'
Vue.directive('highlight', {
    bind: function (el) {
        let elPre = el.querySelectorAll('pre');
        elPre.forEach((item) => {
            hljs.highlightBlock(item);
        })
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})
