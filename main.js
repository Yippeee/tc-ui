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

// calendar 注入
import tcCalender from './src/calendar/index'
import './src/calendar/calendar.less'

// switch 注入
import tcSwitch from './src/switch/index'
import './src/switch/index.less'

import router from './src/router/index'

Vue.use(tcSwitch)
Vue.use(tcCalender)
Vue.use(tcDialog)
Vue.use(tcImg)
Vue.use(ElementUI)
Vue.use(toast, { type: 'top' })


Vue.config.productionTip = false // 可以关闭开发(development)下的vue的提示信息

new Vue({
    el: '#app',
    router,
    render: (h) => {
        return h(main)
    },
    renderError(h, err) {
        return h('pre', { style: { color: 'red' } }, err.stack)
    }
})