<template>
    <div id="main">
        <topbar></topbar>
        <div class="contentWraper">
            <leftPart></leftPart>
            <posterEditor></posterEditor>
            <rightPart></rightPart>
        </div>
    </div>
</template>
<script>
import posterEditor from "./compoment/posterEdtor.vue";
import leftPart from "./compoment/leftPart.vue";
import rightPart from "./compoment/rightPart.vue";
import topbar from "./compoment/topbar.vue";

export default {
    data() {
        return {};
    },
    components: {
        posterEditor,
        leftPart,
        rightPart,
        topbar
    }
};
</script>
<style lang="less" scoped>
#main{
    height: 100%;
}
.contentWraper {
    display: flex;
    height: calc(100% - 100px);
    background-color: gray;
    flex-direction: row;
}
</style>
