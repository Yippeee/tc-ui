import Vue from 'vue'
import main from './src/main.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'reset-css';
import './src/css/index.less'

// toast 注入
import toast from './src/toast/toast';
import './src/toast/style.less'

// dialog 注入
import tcDialog from './src/dialog/index';
import './src/dialog/dialog.less'

// img 注入
import tcImg from './src/imgComponent/image'
import './src/imgComponent/index.less'

import VueRouter from 'vue-router'


Vue.use(tcDialog)
Vue.use(tcImg)
Vue.use(ElementUI)
Vue.use(toast, { type: 'top' })

Vue.ues(VueRouter)

Vue.config.productionTip = false // 可以关闭开发(development)下的vue的提示信息

new Vue({
    el: '#app',
    render: (h) => {
        return h(main)
    },
    renderError(h, err) {
        return h('pre', { style: { color: 'red' } }, err.stack)
    }
})