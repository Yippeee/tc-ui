<template>
    <div class="tc-rate">
        <span
            v-for="(item, index) in max"
            :key="index"
            @mouseenter="mouseenter(item, $event)"
            @mouseleave="resetHoveIndex"
            @click="click(item, $event)"
        >
            <i class="icon_star icon tc-rate-star" :class="classes[item - 1]" style></i>
        </span>
    </div>
</template>
<script>
export default {
    name: "tcRate",
    data() {
        return {
            hoverIndex: 0,
            clickIndex: 0
        };
    },
    props: {
        max: {
            type: Number,
            default: 5
        },
        activeClass: {
            type: String,
            default: "icon_star_fill"
        },
        voidClass: {
            type: String,
            default: "icon_star"
        }
    },
    computed: {
        classes() {
            let result = Array(5);
            let index = this.hoverIndex || this.clickIndex;
            result.fill(this.activeClass, 0, index);
            result.fill(this.voidClass, index, this.max);
            return result;
        }
    },
    model: {
        prop: "value",
        event: "change"
    },
    methods: {
        mouseenter(item, e) {
            this.hoverIndex = item;
        },
        click(item, e) {
            this.clickIndex = item;
            this.$emit('change', item);
        },
        resetHoveIndex() {
            this.hoverIndex = 0;
        }
    }
};
</script>
