<template>
    <div>
        <tc-switch v-model="swtichVal" activeText='选项1' inactiveText='选项2' class="switch"></tc-switch>
        <div>{{this.swtichVal}}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            swtichVal: false
        };
    }
};
</script>
<style lang="less" scoped>
.switch{
    margin-top: 80px;
    margin-left: 100px;
}
</style>

