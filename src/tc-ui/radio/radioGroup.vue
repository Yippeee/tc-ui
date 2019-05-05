<template>
    <div class="tc-radio-group" @keydown="handleKeyDown">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "tcRadioGroup",
    componentName: "tcRadioGroup",
    model: {
        prop: "value",
        event: "changed"
    },
    props: {
        value: String
    },
    watch: {
        value() {
            this.changed(this.value);
        }
    },
    methods: {
        handleKeyDown(e) {
            const radioArr = this.$el.querySelectorAll(".tc-radio");
            let index = [].indexOf.call(
                radioArr,
                this.$el.querySelector(".is-checked")
            );
            if (e.keyCode === 39) {
                // right
                if (index + 1 === radioArr.length) index = -1;
                radioArr[index + 1].click();
                radioArr[index + 1].focus();
            } else if (e.keyCode === 37) {
                if (index === 0) index = radioArr.length;
                radioArr[index - 1].click();
                radioArr[index - 1].focus();
            }
        },
        changed(val) {
            this.$emit("changed", val);
            this.$emit("change", val);
        }
    }
};
</script>

