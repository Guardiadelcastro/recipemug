<template>
  <div :class="theme">
    <span class="recipe-title">
      Recipe
    </span>
    <span class="mug-title">
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
      default: 'light'
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

.light
  display flex
  flex-flow row nowrap
  justify-content center
  align-items center
  background $white

.light span.recipe-title
  background-color $red
  padding 0 3px 0 5px
  font-family $font-title
  font-size 2em
  color $white
  font-weigth bold

.light span.mug-title
  color $red
  font-family $font-title
  font-size 2em
  font-weigth bold

.dark
  display flex
  flex-flow row nowrap
  justify-content center
  align-items center
  background $red

.dark span.recipe-title
  background-color $white
  padding 0 3px 0 5px
  font-family $font-title
  font-size 2em
  color $red
  font-weigth bold

.dark span.mug-title
  color $white
  font-family $font-title
  font-size 2em
  font-weigth bold
</style>

