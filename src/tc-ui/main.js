/**
 *  此文件应该是由配置文件打包自动生成，但是暂时不知怎么操作。
 */

import tcToast from './toast/index'
import tcImg from './imgComponent/image'
import tcDialog from './dialog/index'

import tcCalendar from './calendar/calendar'
import tcSwitch from './switch/switch'

const components = [tcCalendar, tcSwitch]


export default {
    install(Vue, option) {
        components.forEach(com => {
            console.log('com: ', com);
            Vue.component(com.name, com)
        })
        tcToast.install.call(this, Vue)
        tcImg.install.call(this, Vue)
        tcDialog.install.call(this, Vue)
    }
}