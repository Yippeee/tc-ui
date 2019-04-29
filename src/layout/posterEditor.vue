<template>
    <div id="center">
        <router-view></router-view>
    </div>
</template> 
<script>
export default {
    data() {
        return {
            toastShow: false,
            dialogVisible: false,
            dialogVisible2: false,
            closeOnClickModal: true
        };
    },
    methods: {
    },

};
</script>
<style lang="less" scoped>
#center {
    height: 100%;
    flex: 1 1 auto;
    background-color: #ececec;
    overflow-y: scroll;
}
</style>
