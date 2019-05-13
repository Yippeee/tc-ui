<template>
  <div>
    <button @click="clickMe">click me</button>
    <p>这里是：{{goods}} {{goods2}} {{goods3}}</p>
    <tc-calendar v-model="day"></tc-calendar>
    <el-calendar v-model="day"></el-calendar>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      day: new Date("2019-01-01")
    };
  },
  computed: {
      ...mapState(['goods', 'goods2', 'goods3'])
  },
  methods: {
    clickMe() {
      console.log(this.day);
      console.log("this.$store: ", this.$store);
      console.log("this.$store.state.goods: ", this.$store.state.goods);
      this.$store.commit("showGoods");
    }
  }
};
</script>
