<template>
    <div>
        <tc-switch
            v-model="swtichVal"
            activeText="选项1"
            inactiveText="选项2"
            class="switch"
            @click.native="c"
        ></tc-switch>
        <div>{{this.swtichVal}}</div>
        <!-- <el-steps finish-status="success" :active="a">
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 1"></el-step>
        </el-steps>-->
        <tc-steps :active="a">
            <tc-step title="步骤 1"></tc-step>
            <tc-step title="步骤 2"></tc-step>
            <tc-step title="步骤 3"></tc-step>
            <tc-step title="步骤 4"></tc-step>
            <tc-step title="步骤 5"></tc-step>
        </tc-steps>
        <br>
        <tc-radio v-model="radio" label="1">列哈是1</tc-radio>
        <tc-radio v-model="radio" label="2">列哈是2</tc-radio>
        <tc-radio v-model="radio" label="3">列哈是2</tc-radio>
        <tc-radio v-model="radio" label="4">列哈是2</tc-radio>
        <tc-radio v-model="radio" label="5">列哈是2</tc-radio>
        <br>
        <tc-radio-group v-model="radio2" @change="handleGroupChange">
            <tc-radio label="1">列哈是1</tc-radio>
            <tc-radio label="2">列哈是2</tc-radio>
            <tc-radio label="3">列哈是2</tc-radio>
            <tc-radio label="4">列哈是2</tc-radio>
            <tc-radio label="5">列哈是2</tc-radio>
        </tc-radio-group>
        <br>
        <el-input v-model="input" placeholder="请输入内容">
            <template slot="prepend">ss</template>
            <template slot="append">ss</template>
        </el-input>
        <br>
        <br>
        <div style="width: 200px">
            <tc-input v-model="input" placeholder="请输入内容" clearable></tc-input>
        </div>
        <br>
        <br>
        <tc-tooltip content="content1" placement="top">
            <el-button>上</el-button>
        </tc-tooltip>
        <tc-tooltip content="content2" placement="left">
            <!-- <el-button>左</el-button> -->
            <el-button type="danger" icon="el-icon-delete" circle style="width:30px;height:30px;"></el-button>
        </tc-tooltip>
        <tc-tooltip content="content3" placement="bottom">
            <!-- <el-button>下</el-button> -->
            <el-button type="danger" icon="el-icon-delete" circle style="width:30px;height:30px;"></el-button>
        </tc-tooltip>
        <div>
            <tc-tooltip content="content4" placement="right">
                <!-- <el-button size="mini">右</el-button> -->
                <el-button
                    type="danger"
                    icon="el-icon-delete"
                    circle
                    style="width:30px;height:30px;"
                ></el-button>
            </tc-tooltip>
        </div>
        <tc-tooltip content="content4" placement="right">
            <el-button size="mini">右</el-button>
            <!-- <el-button type="danger" icon="el-icon-delete" circle style="width:30px;height:30px;"></el-button> -->
        </tc-tooltip>
        <div>
            <tc-tooltip content="content4" placement="left">
                <!-- <el-button size="mini">右</el-button> -->
                <el-button
                    type="danger"
                    icon="el-icon-delete"
                    circle
                    style="width:30px;height:30px;"
                ></el-button>
            </tc-tooltip>
        </div>
        <tc-tooltip content="content4" placement="left">
            <el-button size="mini">右</el-button>
            <!-- <el-button type="danger" icon="el-icon-delete" circle style="width:30px;height:30px;"></el-button> -->
        </tc-tooltip>
    </div>
</template>
<script>
export default {
    data() {
        return {
            swtichVal: false,
            a: 0,
            radio: "1",
            radio2: "3",
            input: "",
        };
    },
    methods: {
        c() {
            this.a++;
            if (this.a > 5) this.a = 0;
        },
        handleGroupChange(val) {
            console.log("val: ", val);
            console.log("this.radio2: ", this.radio2);
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

