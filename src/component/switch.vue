<template>
    <div>
        <tc-switch v-model="swtichVal" activeText="选项1" inactiveText="选项2" class="switch" @click.native="c"></tc-switch>
        <div>{{this.swtichVal}}</div>
        <!-- <el-steps finish-status="success" :active="a">
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 1"></el-step>
        </el-steps> -->
        <tc-steps :active="a">
            <tc-step title="步骤 1"></tc-step>
            <tc-step title="步骤 2"></tc-step>
            <tc-step title="步骤 3"></tc-step>
            <tc-step title="步骤 4"></tc-step>
            <tc-step title="步骤 5"></tc-step>
        </tc-steps>
    </div>
</template>
<script>
export default {
    data() {
        return {
            swtichVal: false,
            a: 0,
        };
    },
    methods: {
        c(){
            this.a++
            if(this.a > 5)this.a=0
        }
    }
};
</script>
<style lang="less" scoped>
.switch {
    margin-top: 80px;
    margin-left: 100px;
}
</style>

