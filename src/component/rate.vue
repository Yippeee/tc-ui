<template>
    <div>
        <tc-rate v-model="rate"></tc-rate>
        <button @click="c"></button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            rate: 0
        }
    },
    methods: {
        c(){
            console.log(this.rate)
        }
    }
}
</script>
