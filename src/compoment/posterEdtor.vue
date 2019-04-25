<template>
    <div id="posterEdtor">
        <button @click="toast"></button>
        <button @click="toast2"></button>
        <div v-test>test content</div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            toastShow: false
        };
    },
    methods: {
        toast() {
            this.$loading("this is my msg");
            this.toastShow = !this.toastShow
        },
        toast2() {
            this.$toast("this is my toast");
        },
        closeToast() {
            this.toastShow = !this.toastShow
        }
    },
    directives: {
        test: {
            bind() {
                console.log("asd");
            }
        }
    }
};
</script>
<style lang="less" scoped>
#posterEdtor {
    height: 100%;
    flex: 1 1 auto;
    background-color: #ececec;
}
</style>
