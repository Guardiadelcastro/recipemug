<template>
  <button 
    :class="theme"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>

export default {
  name: 'BaseButton',
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: 'light'
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'
@import '../styles/mixins'

button
  display flex
  flex-flow row nowrap
  justify-content center
  align-items center
  border 2px solid
  font-size 16px
  transition all ease 0.3s
  cursor pointer
  font-weight bold
  border-radius $br
  padding 10px

button:disabled, button[disabled=disabled]
  background $grey !important
  color $white !important
  border-color transparent !important
  &:hover
    background $grey

.light
  color $dark
  background-color $light
  border-color $dark
  &:hover
    color $light
    background-color $dark
    border-color $light

.dark
  color $white
  background-color $dark
  border-color transparent
  &:hover
    color $dark
    background-color $white
    border-color $dark

.danger 
  color $white
  background-color $red
  border-color $red
  &:hover
    color $red
    background-color $white

.info 
  color $white
  background-color $blue
  border-color $blue
  &:hover
    color $blue
    background-color $white

.success
  color $white
  background-color $green
  border-color $green
  &:hover
    color $green
    background-color $white

.warning
  color $white
  background-color $yellow
  border-color $yellow
  &:hover
    color $yellow
    background-color $white


.square 
  square(35px)
  padding 0

.square-small 
  square(10px)
  padding 0

.circle
  square(45px)
  border-radius 50px
  padding 0

</style>
