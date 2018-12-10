<template>
  <div class="nav-container">
    <div class="title">
      <span class="recipe-title">Recipe</span>
      <span class="mug-title">Mug</span>
    </div>
    <div class="nav-list">
      <div class="nav">Profile</div>
      <div class="nav">My Cookbook</div>
      <div class="nav">Shared With Me</div>
      <div class="nav">Week plan</div>
      <div class="nav">Something else</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'SideBar',
  props: {}
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

.nav-container
  height 100vh
  display grid
  grid-template-rows 2fr 8fr
  grid-gap 10px
  background-color $red

.title
  grid-row 1 / 2
  display flex
  flex-flow row nowrap
  justify-content center
  align-items center
  background $white
  box-shadow 4px 0 4px 0 rgba(0, 0, 0, 0.03)


.recipe-title, .mug-title
  font-family 'Pacifico', 'Monserrat', serif 
  font-size 2em
  color $white
  font-weigth bold

.recipe-title
  background-color $red
  padding 0 3px 0 5px

.mug-title
  color $red

.nav-list
  grid-row 2 / 3
  display grid
  grid-auto-rows minmax(25px, auto)
  justify-items left 
  align-items center
  color $white

.nav
  margin-left 10px
  font-size 20px
  height 25px

  
</style>

