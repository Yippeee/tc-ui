<template>
    <div class="tc-step" :style="style" :class=process>
        <div class="tc-step__icon">
            <div class="tc-step__icon-text" v-if='index < $parent.active'>✔️</div>
            <div class="tc-step__icon-text" v-else>{{index}}</div>
        </div>
        <div class="tc-step__line"></div>
        <div class="tc-step__main">{{this.title}}</div>
    </div>
</template>
<script>
export default {
    name: "tc-step",
    props: {
        title: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            index: -1,
            process: 'is-wait'
        };
    },
    beforeCreate() {
        this.$parent.steps.push(this);
    },
    computed: {
        isLast() {
            const parent = this.$parent;
            return parent.steps[parent.steps.length - 1] === this;
        },
        style() {
            const style = {};
            // if (this.isLast) {
            //     style.maxWidth = 100 / this.$parent.steps.length + "%";
            // }
            style.flexBasis = 100 / (this.$parent.steps.length - 1) + "%";
            return style;
        },
    },
    methods: {
        updataStatus() {
            if (this.index === this.$parent.active){
                this.process = 'is-process'
            } else if (this.index <= this.$parent.active){
                this.process = 'is-success'
            } else {
                this.process = 'is-wait'
            }
        }
    },
    mounted() {
        const unwatch = this.$watch(
            "index",
            val => {
                // 这里是保证了在父组件已经设置了 step 的index 值
                console.log(val);
                this.$watch('$parent.active', () => {
                    this.updataStatus()
                }, { immediate: true }) // immediate 的表现有点不解，需要看一下原因
            }
        );
    }
};
</script>