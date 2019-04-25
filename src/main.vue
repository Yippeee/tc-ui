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
import posterEditor from "./compoment/posterEdtor";
import leftPart from "./compoment/leftPart";
import rightPart from "./compoment/rightPart";
import topbar from "./compoment/topbar";

export default {
    data() {
        return {};
    },
    components: {
        posterEditor,
        leftPart,
        rightPart,
        topbar
    },
    created() {
        document.title = 'DOVE'
        // window.onbeforeunload = function() {
        //     return '关闭提示'
        // }
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
