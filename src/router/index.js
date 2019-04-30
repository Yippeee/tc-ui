import Vue from 'vue'
import router from 'vue-router'

import img_dig from "@/component/image_dialog";
import calendar from "@/component/calendar";
import tcSwitch from "@/component/switch";

Vue.use(router)

export default new router({
  routes: [
    {
      path: '/',
      component: img_dig
    },
    {
      path: '/a',
      component: calendar
    },
    {
      path: '/switch',
      component: tcSwitch
    }
  ]
})