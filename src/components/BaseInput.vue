<template>
  <input 
    v-model="content" 
    :class="theme"
    :placeholder="message"
    @input="handleInput"
    @keyup.prevent
  >
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    theme: {
      type: String,
      default: 'template'
    },
    message: {
      type: String,
      default: 'Write here'
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      content: this.value
    };
  },
  methods: {
    handleInput() {
      this.$emit('input', this.content);
    }
  }
};

</script>

<style lang="stylus" scoped>
@import '../styles/variables'

input
  outline none
  font-size 16px
  padding 10px 15px
  border-radius $br
  border 0
  color $white
  background-color $blue
  
</style>
