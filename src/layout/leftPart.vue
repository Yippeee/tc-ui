<template>
    <div id="leftPart">
        <!-- <el-image
      style="width: 100px; height: 100px"
      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        fit="fill"></el-image>-->
        <ul class="route-ui">
            <router-link to="/" tag='li'>image & dialog</router-link>
            <router-link to="/a" tag='li'>calendar</router-link>
        </ul>
    </div>
</template>
<style lang="less" scoped>
#leftPart {
    height: 100%;
    flex: 0 0 150px;
}
.route-ui{
    li {
        height: 36px;
        cursor: pointer;
        &:hover{
            background-color: #fff;
        }
    }
}
</style>
