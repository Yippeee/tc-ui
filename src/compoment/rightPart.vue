<template>
    <div id="rightPart">
        <div class="imageZone">
            <div
                v-for="(item, index) in imagesArray"
                :key="index"
                class="imgItem"
                @mouseover="over"
                @mouseleave="leave"
                @click="chooseImg($event, index)"
            >
                <img :src="item" alt srcset >
                <div class="imgDelBtn" @click="delImg(index)">
                    <i class="el-icon-delete"></i>
                </div>
            </div>
        </div>
        <button class="addImage" @click="addImg">
            <span>添加图片</span>
            <input
                type="file"
                id="inputFile"
                style="display:none"
                accept="image/*"
                @change="uploadImg"
            >
        </button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            imagesArray: [
                "https://photo.minwt.com/img/Content/wordpress/google-drive-photos-to-wp/google-drive-photos-to-wp_00.jpg"
            ]
        };
    },
    methods: {
        over(e) {
            const hoverImg = e.target;
            hoverImg.classList.add("overing");
        },
        leave(e) {
            const hoverImg = e.target;
            hoverImg.classList.remove("overing");
        },
        delImg(index) {
            this.imagesArray.splice(index, 1);
        },
        addImg() {
            inputFile.click();
        },
        uploadImg(e) {
            const files = e.target.files;
            const reader = new FileReader();
            reader.onload = function(e) {
                this.imagesArray.push(e.target.result);
            }.bind(this);
            reader.readAsDataURL(files[0]);
        },
        chooseImg(e, index) {
            console.log("e.currentTarget: ", e.currentTarget);
            console.log('[1,2,3].includes(1): ', [1,2,3].includes(1));
        }
    }
};
</script>

<style lang="less" scoped>
#rightPart {
    height: 100%;
    flex: 0 0 250px;
    position: relative;
    .imageZone {
        height: calc(100% - 50px);
        overflow-y: scroll;
        overflow-x: hidden;
        &::-webkit-scrollbar {
            width: 0 !important;
        }
    }
    .imgItem {
        position: relative;
        cursor: pointer;
        height: 150px;
        text-align: center;
        img {
            width: auto;
            height: 100%;
            margin: 5px;
            border: 4px transparent solid;
        }
        .imgDelBtn {
            display: none;
            position: absolute;
            right: 3px;
            top: 15px;
            background-color: grey;
            padding: 5px;
        }
        &.overing .imgDelBtn {
            display: inline;
        }
    }
    .addImage {
        position: absolute;
        bottom: 0px;
        text-align: center;
        span {
            color: #fff;
        }
    }
}
</style>
