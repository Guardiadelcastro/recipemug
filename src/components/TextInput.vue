<template>
  <text-input type="text" :class="theme" :placeholder="message">
</template>

<script>
export default {
  props: {
    theme: {
      type: string,
      default: template
    },
    message: {
      type: string,
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
