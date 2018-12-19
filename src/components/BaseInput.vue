<template>
  <input 
    v-model="content" 
    :class="theme"
    :placeholder="message"
    @input="handleInput"
    @keyup="handleInput"
  >
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    theme: {
      type: String,
      default: 'default'
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
  border 1px solid transparent
  background-color white
  transition all ease 0.3s
  font-font-family $font
  
.default
  border 1px solid $blue

.correct
  border 1px solid $green

.error
  border 1px solid $red
</style>
