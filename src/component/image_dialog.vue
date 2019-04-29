<template>
    <div id="img_dig">
        <button @click="toast"></button>
        <button @click="toast2"></button>
        <div v-test>test content</div>
        <div class="srcollDiv">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>0</p>
            <tc-img
                fit="contain"
                style_="width:200px;height:200px"
                src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            >
                <div slot="placeholder">加载中...</div>
                <div slot="error">sorry load failed!</div>
            </tc-img>
            <tc-img
                fit="contain"
                style_="width:200px;height:200px"
                src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171111jpeg.jpeg"
            >
                <div slot="placeholder">加载中...</div>
                <div slot="error">sorry load failed!</div>
            </tc-img>
            <tc-img
                fit="contain"
                style_="width:200px;height:200px"
                src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c2594117221jpeg.jpeg"
            >
                <div slot="placeholder">加载中...</div>
            </tc-img>
        </div>

        <tc-dialog
            title="不容易啊"
            width="50%"
            :visible.sync="dialogVisible"
            @close="dialogClose"
            closeOnClickModal
            :showCloseBtn="false"
        >
            <span>这里是dialog 文本信息</span>
            <span slot="footer">
                <button @click="dialogVisible = false">取 消</button>
            </span>
        </tc-dialog>
        <tc-dialog :visible.sync="dialogVisible2">
            <span>这里是dialog2222 的文本信息</span>
            <span slot="footer">
                <button @click="dialogVisible2 = false">取 消</button>
            </span>
        </tc-dialog>
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
        toast() {
            // this.$loading("this is my msg");
            // this.toastShow = !this.toastShow
            this.dialogVisible2 = true;
        },
        toast2() {
            this.dialogVisible = true;
            // this.$toast("this is my toast");
        },
        closeToast() {
            this.toastShow = !this.toastShow;
        },
        dialogClose() {
            console.log("dialog is closed!");
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
.srcollDiv{
    display: inline-block;
    width: 400px;
    height: 200px;
    overflow-y: scroll;
}
</style>
