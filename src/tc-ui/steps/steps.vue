<template>
    <div class="tc-steps">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "tc-steps",
    props: {
        active: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            steps: []
        };
    },
    watch: {
        steps(steps) {
            console.log('watch')
            steps.forEach((step, index) => {
                step.index = index
            });
        }
    }
};
</script>