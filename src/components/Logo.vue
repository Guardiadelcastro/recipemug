<template>
  <div :class="theme">
    <span class="recipe">
      Recipe
    </span>
    <span class="mug">
      Mug
    </span>
  </div>
</template>

<script>
export default {
  name: 'BaseLogo',
  props: {
    theme: {
      type: String,
      default: 'dark'
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

.red
  display flex
  flex-flow row nowrap
  justify-content center
  align-items center
  background $white
  font-family $font-title
  font-size 2em
  font-weigth bold
  .recipe
    background-color $red
    padding-right 3px
    color $white
  .mug
    color $red

.dark
  display flex
  flex-flow row nowrap
  justify-content center
  align-items center
  font-family $font-title
  font-size 2em
  background $dark
  .recipe
    color $dark
    background-color $light
    padding 5px
    border-radius $br
  .mug
    color $light
    padding 5px 
    
</style>

