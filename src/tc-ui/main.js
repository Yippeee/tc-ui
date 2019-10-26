/**
 *  此文件应该是由配置文件打包自动生成，但是暂时不知怎么操作。
 */

import tcToast from "./toast/index"
import tcImg from "./imgComponent/image"
import tcDialog from "./dialog/index"

// 组件形式注册
import tcCalendar from "./calendar/calendar"
import tcSwitch from "./switch/switch"
import tcSteps from "./steps/steps"
import tcStep from "./steps/step"
import tcRadio from "./radio/radio"
import tcRadioGroup from "./radio/radioGroup"
import tcInput from "./input/input"
import tcSelect from "./select/select"
import tcTooltip from "./tooltip/tooltip"
import tcRate from "./rate/rate"

import forbidPaste from './forbiddenPaste/index'

const components = [tcCalendar, tcSwitch, tcSteps, tcStep, tcRadio, tcRadioGroup, tcInput, tcSelect, tcTooltip, tcRate]

export default {
    install(Vue, option) {
        components.forEach(com => {
            Vue.component(com.name, com)
        })
        tcToast.install.call(this, Vue)
        tcImg.install.call(this, Vue)
        tcDialog.install.call(this, Vue)
        forbidPaste.install.call(this, Vue)
    },
}
