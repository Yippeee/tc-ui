import { getOutScrollContainer, inScrollView } from '../util/dom'

export default {
    install(Vue, option) {
        Vue.component('tc-img', {
            props: {
                src: {
                    type: String,
                    default: ''
                },
                style_: {
                    type: String,
                    default: ''
                },
                fit: {
                    type: String,
                    default: 'none'
                },
                lazy: {
                    type: Boolean,
                    default: true
                }
            },
            data() {
                return {
                    show: false,
                    loadSuccess: false,
                    isLazy: this.lazy,
                    parentScroll: null
                }
            },
            watch: {
                src: {
                    handler(val) {
                        !this.isLazy && this.loadImage(val);
                    },
                    immediate: true
                },
                isLazy() {
                    this.loadImage(this.src)
                }
            },
            mounted() {
                this.isLazy && this.addLazyHander()
            },
            methods: {
                imgOnload() {
                    this.show = true
                    this.loadSuccess = true
                },
                imgOnloadFailed() {
                    this.show = true
                    this.loadSuccess = false
                },
                loadImage(src) {
                    const img = new Image()
                    img.onload = this.imgOnload.bind(this)
                    img.onerror = this.imgOnloadFailed.bind(this)
                    img.src = src
                    this.removeLazyHander()
                },
                addLazyHander() {
                    let parentScroll = getOutScrollContainer(this.$el)
                    this.parentScroll = parentScroll
                    parentScroll.addEventListener('scroll',this.scrollFunction, false)
                },
                scrollFunction() {
                    if (inScrollView(this.$el, this.parentScroll)) {
                        this.isLazy = false
                    }
                },
                removeLazyHander() {
                    const { parentScroll } = this
                    parentScroll.removeEventListener('scroll', this.scrollFunction, false)
                }
            },
            render(h) {
                return (
                    <section class='tc-image' style={this.style_}>
                        {this.isLazy || !this.show ?
                            <slot name='placeholder'>
                                <div class='tc-image_placeholder'>placeholder content</div>
                            </slot>
                            :
                            !this.loadSuccess ?
                                <div class='tc-image_error'>
                                    {this.$slots.error || <div class='tc-image_error_info'>加载失败!</div>}
                                </div>
                                :
                                <img class='tc-image_inner' src={this.src} style={{ 'object-fit': this.fit }}></img>
                        }
                    </section >
                )
            }
        })

    }
}