<template>
    <div>
        <button @click="clickMe">click me</button>
        <tc-calendar v-model="day"></tc-calendar>
        <!-- <el-calendar v-model="day"></el-calendar> -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            day: new Date('2019-01-01')
        };
    },
    methods: {
        clickMe() {
            console.log(this.day)
        }
    }
};
</script>
