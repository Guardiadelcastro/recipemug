<template>
  <text-input :class="theme" :placeholder="message">
</template>

<script>
export default {
  name: 'TemplateInput',
  props: {
    theme: {
      type: String,
      default: 'template'
    },
    message: {
      type: String,
      default: 'Write here'
    }
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

input
  outline none
  font-size 16px
  padding 10px 15px
  border-bottom 3px solid $grey
  transform: all ease 0.5s
  &:active
    border 3px solid

.blue
  border-color $blue

.green
  border-color $green
    
</style>
