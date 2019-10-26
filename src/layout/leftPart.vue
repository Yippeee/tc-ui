<template>
    <div id="leftPart">
        <!-- <el-image
      style="width: 100px; height: 100px"
      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        fit="fill"></el-image>-->
        <ul class="route-ui">
            <router-link to="/" tag="li">image & dialog</router-link>
            <router-link to="/a" tag="li">calendar</router-link>
            <router-link to="/switch" tag="li">switch</router-link>
            <router-link to="/rate" tag="li">rate</router-link>
            <customMenu :menus="menuData"></customMenu>
        </ul>
    </div>
</template>
<script>
import customMenu from "^/menu/index.js"

export default {
    data() {
        return {
            menuData: [
                {
                    name: "nameA",
                    content: "内容A",
                    path: "/a",
                },
                {
                    name: "nameB",
                    content: "内容B",
                    children: [
                        {
                            name: "nameB_1",
                            content: "内容B_1",
                            path: "/a",
                        },
                        {
                            name: "nameB_2",
                            content: "内容B_2",
                            children: [
                                {
                                    name: "nameB_1_1",
                                    content: "内容B_1",
                                    path: "/switch",
                                },
                                {
                                    name: "nameB_1_2",
                                    content: "内容B_1_2",
                                    path: "/switch",
                                },
                            ],
                        },
                    ],
                },
            ],
        }
    },
    components: {
        customMenu,
    },
}
</script>
<style lang="less" scoped>
#leftPart {
    height: 100%;
    flex: 0 0 150px;
}
.route-ui {
    li {
        height: 36px;
        cursor: pointer;
        &:hover {
            background-color: #fff;
        }
    }
}
</style>
