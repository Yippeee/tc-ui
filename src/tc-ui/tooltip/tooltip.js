export default {
    name: 'tcTooltip',
    mounted() {
        this.getElementPosition(this.$slots.default[0])
        const _this = this
        const tcTooltipTpl = new Vue({
            data() {
                return {
                    left: 0,
                    right: 0,
                    isShow: false,
                    arrow_left: 0,
                    arrow_top: 0,
                    margin_left: 0,
                }
            },
            computed: {

            },
            render() {
                return (
                    <transition name="tc-tooltip-fade">
                        <div class="tc-tooltip" style={{ left: this.left, top: this.top }} v-show={this.isShow}>
                            {_this.content}
                            <span class={['tooltip-arrow', 'tooltip-arrow__' + _this.placement]} style={{ left: this.arrow_left, top: this.arrow_top, 'margin-left': this.margin_left }}></span>
                        </div>
                    </transition>
                )
            },
            methods: {
                getPositionIfo() {
                    const leftOrRight = ['left', 'right'].includes(_this.placement)

                    const elInfo = this.$el.getBoundingClientRect()
                    this.left = _this.referLeft - elInfo.width / 2 + 'px'
                    this.top = _this.referTop - elInfo.height * 3 / 2 - 6
                    this.arrow_left = elInfo.width / 2 - 10 + 'px'
                    this.arrow_top = (leftOrRight ? 2 : elInfo.height - 1) + 'px' // 減去border的長度
                    if (leftOrRight) {
                        this.margin_left = elInfo.width / 2 + 10 - 1 + 'px';
                    }
                    if(_this.placement === 'bottom'){
                        this.top += elInfo.height
                    }
                    this.top += 'px'
                }
            },
            mounted() {
                this.$el.addEventListener('mouseenter', () => {
                    this.isShow = true
                    this.$nextTick(() => {
                        this.getPositionIfo()
                    })
                })
                this.$el.addEventListener('mouseleave', () => {
                    this.isShow = false
                })
            }
        })
        document.body.appendChild(tcTooltipTpl.$mount().$el)
        this.$el.addEventListener('mouseenter', () => {
            tcTooltipTpl.isShow = true
            this.$nextTick(() => {
                tcTooltipTpl.getPositionIfo()
            })
        })
        this.$el.addEventListener('mouseleave', () => {
            // tcTooltipTpl.isShow = false
        })
    },
    props: {
        content: {
            type: String,
            default: ''
        },
        placement: {
            type: String,
            default: 'top'
        }
    },
    render() {
        return (
            this.$slots.default[0]
        )
    },
    data() {
        return {
            referTop: 0,
            referLeft: 0,
        }
    },
    methods: {
        getElementPosition(element) {
            const referElement = element.elm
            const refPosition = referElement.getBoundingClientRect()
            const leftOrRight = ['left', 'right'].includes(this.placement)
            const topOrBottom = ['top', 'bottom'].includes(this.placement)
            this.referLeft = topOrBottom ? refPosition.left + refPosition.width / 2 : refPosition.left - refPosition.width / 2
            this.referTop = leftOrRight ? refPosition.top + refPosition.height / 2 : refPosition.top - refPosition.height / 2
        }
    }
}