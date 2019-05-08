<template>
  <div class="tc-input">
    <input class="tc-input__inner" type="text" @focus="inputFocus" :placeholder='placeholder'>
  </div>
</template>
<script>
export default {
  name: "tcInput",
  props: {
    placeholder: {
      type: String,
      default: undefined
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
      inputFocus() {
          this.$el.focus();
          console.log(this.clearable)
      }
  }
};
</script>
