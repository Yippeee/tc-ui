<template>
    <div class="tc-switch" @click="toggleVal" :class="{'is-selected': checked}">
        <span class="tc-switch_label tc-switch_label--right" :class="{'isActive' : !checked}" v-if="activeText">{{activeText}}</span>
        <span class="tc-switch__core"></span>
        <span class="tc-switch_label tc-switch_label--left" :class="{'isActive' : checked}" v-if="inactiveText">{{inactiveText}}</span>
    </div>
</template>
<script>
export default {
    name: "tc-switch",
    model: {
        prop: "value",
        event: "change"
    },
    props: {
        value: {
            type: Boolean
        },
        activeColor: {
            type: String,
            default: ""
        },
        inactiveColor: {
            type: String,
            default: ""
        },
        activeValue: {
            type: [Number, String, Boolean],
            default: true
        },
        inactiveValue: {
            type: [Number, String, Boolean],
            default: false
        },
        activeText: {
            type: [String],
            default: ""
        },
        inactiveText: {
            type: [String],
            default: ""
        }
    },
    data() {
        return {};
    },
    methods: {
        toggleVal() {
            this.$emit("change", !this.value);
        }
    },
    computed: {
        checked() {
            return this.value === this.activeValue;
        }
    }
};
</script>
