import Vue from 'vue'
import main from './src/main.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'reset-css';
import './src/css/index.less'

Vue.use(ElementUI)

new Vue({
    el: '#app',
    render: (h) => {
        return h(main)
    }
})