let tpl = null

export default {
    install(Vue, option) {
        // const { type } = option
        /**
         * @param  {显示文本信息} msg
         */
        Vue.prototype.$toast = (msg) => {
            if (!tpl) { // 防止VM多次创建
                let Tpl = Vue.extend({
                    props: {
                        'position': String,
                        'show': {
                            type: Boolean,
                            default: false
                        }
                    },
                    methods: {
                        click() {
                            this.$emit('close')
                        }
                    },
                    data() {
                        return {
                            msg: msg
                        }
                    },
                    render(h) {
                        if (!this.show) {
                            return false
                        }
                        return (
                            <div class='toast-warp' position={this.position}>
                                <div class='toast-content'>{this.msg}</div>
                            </div>
                        )
                        return h(
                            "div",
                            {
                                class: "toast-warp"
                            },
                            [
                                h("div", {
                                    class: "toast-content",
                                    attrs: {
                                        position: this.position
                                    },
                                    domProps: {
                                        innerHTML: this.msg
                                    },
                                    on: {
                                        click: this.click
                                    }
                                })
                            ]
                        );
                    }
                })
                tpl = new Tpl()
                document.body.appendChild(tpl.$mount().$el)
            }

            tpl.show = true

            setTimeout(() => {
                tpl.show = false
            }, 1000)
        }
        /**
         * @param  {} msg
         */
        Vue.prototype.$loading = (msg) => {
            console.log(msg)
        }
    }
}