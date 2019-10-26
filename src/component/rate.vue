<template>
    <div>
        <tc-rate v-model="rate"></tc-rate>
        <button @click="c"></button>
        <div>
            <customMenu :menus="menuData"></customMenu>
        </div>
        <div>1212123</div>
    </div>
</template>
<script>
import customMenu from "^/menu/index.js"
export default {
    data() {
        return {
            rate: 0,
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
    methods: {
        c() {
            console.log(this.rate)
        },
    },
}
</script>
