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

.light
  color $dark
  background-color $light
  border-color $dark
  &:hover
    color $light
    background-color $dark
    border-color $light
 
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
.gradient
  right-gradient()
  color $white
  border-color transparent
  &:hover
    background $green
  
.blue
  color $white
  background-color $blue
  border-color transparent

  &:hover
    background-color $dark-blue

  &:active
    background-color $white
    color $blue

.red
  color $white
  background-color $red
  border-color transparent

  &:hover
    background-color $dark-red

  &:active
    background-color $white
    color $red

.orange
  color $white
  background-color $orange
  border-color transparent

  &:hover
    background-color $dark-orange

  &:active
    background-color $white
    color $orange

.yellow
  color $white
  background-color $yellow
  border-color transparent

  &:hover
    background-color $dark-yellow

  &:active
    background-color $white
    color $yellow

.green
  color $white
  background-color $green
  border-color transparent

  &:hover
    background-color $dark-green

  &:active
    background-color $white
    color $green

.grey
  color $white
  background-color $grey
  border-color transparent
    &:hover
      background-color $dark-grey
      border-color $dark-grey
    &:active
      background-color $white
      color $grey

</style>
