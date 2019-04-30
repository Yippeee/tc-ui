import tcCalender from './calendar.vue'

export default {
    install (Vue, option) {
        Vue.component(tcCalender.name, tcCalender)
    }
}