<template>
  <div class="logo">
    <div class="title">
      <span class="recipe-title">
        Recipe
      </span>
      <span class="mug-title">
        Mug
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseLogo',
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

.logo
  display flex
  flex-flow row nowrap
  justify-content center
  align-items center
  background $white
  box-shadow 4px 0 4px 0 rgba(0, 0, 0, 0.03)

.recipe-title
  background-color $red
  padding 0 3px 0 5px
  font-family $font-title
  font-size 2em
  color $white
  font-weigth bold

.mug-title
  color $red
  font-family $font-title
  font-size 2em
  font-weigth bold
</style>

