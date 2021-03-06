import Vue from 'vue'
import main from './src/main.vue'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import 'reset-css';
import './src/css/index.less'

import tcUI from './src/tc-ui/main'
import './src/tc-ui/index.less'

import router from './src/router/index'

import store from './src/store/index'

// Vue.use(ElementUI)
// if (!window.ElementUI) Vue.use(ElementUI)

Vue.use(tcUI)

Vue.config.productionTip = false // 可以关闭开发(development)下的vue的提示信息
Vue.config.devtools = true // 解决使用 CDN 的 vue 下 devtools 不能使用的问题

new Vue({
    el: '#app',
    router,
    store,
    render: (h) => {
        return h(main)
    },
    renderError(h, err) {
        return h('pre', { style: { color: 'red' } }, err.stack)
    }
})