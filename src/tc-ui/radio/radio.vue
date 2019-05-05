<template>
    <div class="tc-radio" :class="{'is-checked' : ischecked}" @click="change" :tabindex="ischecked ? 0 : -1">
        <span class="tc-radio__input">
            <span class="tc-radio__inner"></span>
            <!-- <input
                type="radio"
                v-model="value"
                :value="label"
                @focus="focus = true"
                @blur="focus = false"
                @change="handleInputChange"
            > -->
        </span>
        <span class="tc-radio__label">
            <slot></slot>
        </span>
    </div>
</template>
<script>
export default {
    name: "tcRadio",
    model: {
        prop: "value",
        event: "change"
    },
    data() {
        return {
            focus: false
        };
    },
    props: {
        label: {
            type: String
        },
        value: {
            type: String
        }
    },
    computed: {
        ischecked() {
            return this.valueReal === this.label;
        },
        valueReal() {
            return !this.isGroup ? this.value : this.$parent.value;
        },
        isGroup() {
            if (this.$parent.$options._componentTag === "tc-radio-group") {
                return true;
            }
            return false;
        }
    },
    methods: {
        change() {
            this.$emit("change", this.label);
            if (this.isGroup) this.$parent.value = this.label;
        },
    }
};
</script>
