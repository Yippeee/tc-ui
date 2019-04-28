import router from 'vue-router'

import posterEditor from "@/component/posterEditor";

export default new router({
  routes: [
    {
      path: '/',
      component: posterEditor
    }
  ]
})