let dialogInfo = {
    width: '660px'
}
export default {
    install(Vue, option) {
        Vue.component('tc-dialog', {
            props: {
                title: {
                    type: String,
                    default: '标题'
                },
                width: {
                    type: String,
                    default: dialogInfo.width
                },
                visible: {
                    type: Boolean,
                    default: false
                },
                closeOnClickModal: {
                    type: Boolean,
                    default: false
                },
                showCloseBtn: {
                    type: Boolean,
                    default: true
                }
            },
            methods: {
                close() {
                    this.$emit('update:visible', false)
                    this.$emit('close')
                },
                modelClick(e) {
                    if (e.currentTarget === e.target && this.closeOnClickModal) {
                        this.close()
                    }
                }
            },
            watch: {
                visible(val) {
                    if (!val) {
                        this.$emit('close')
                    } else {
                        this.$emit('open')
                    }
                }
            },
            render(h) {
                if (!this.visible) {
                    return
                }

                return ( // jsx 方法
                    <transition name="tc-dialog-fade">
                        <div class='tc-dialog-wrapper' onClick={this.modelClick}>
                            <div class="tc-dialog" style={{ width: this.width }}>
                                <div class="tc-dialog-header">
                                    <span class="tc-dialog-header_content'">{this.title}</span>
                                    {this.showCloseBtn ? <div class="tc-dialog-header_closeBtn" onClick={this.close}>x</div> : ''}
                                </div>
                                <div class="tc-dialog-content">
                                    {this.$slots.default}
                                </div>
                                <div class="tc-dialog-footer">
                                    {this.$slots.footer}
                                </div>
                            </div>
                        </div>
                    </transition>
                )
                // createElement 函数方法
                return h('div', {
                    class: 'tc-dialog-wrapper',
                    on: {
                        click: this.modelClick
                    }
                }, [
                        h('div',
                            {
                                class: 'tc-dialog',
                                style: {
                                    width: this.width
                                }
                            }, [
                                h('div', {
                                    class: 'tc-dialog-header',

                                }, [
                                        h('span', {
                                            class: 'tc-dialog-header_content',
                                            domProps: {
                                                innerHTML: this.title
                                            }
                                        }),
                                        this.showCloseBtn ?
                                            h('div', {
                                                class: 'tc-dialog-header_closeBtn',
                                                domProps: {
                                                    innerHTML: 'x'
                                                },
                                                on: {
                                                    click: this.close
                                                }
                                            })
                                            :
                                            h()
                                    ]),
                                h('div', {
                                    class: 'tc-dialog-content'
                                },
                                    this.$slots.default
                                ),
                                h('div', {
                                    class: 'tc-dialog-footer'
                                },
                                    this.$slots.footer
                                ),
                            ])
                    ])
            }
        })
    }
}