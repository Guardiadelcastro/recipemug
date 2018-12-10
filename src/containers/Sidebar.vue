<template>
  <div class="container">
    <div class="image">RecipeMug</div>
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
  props: {}
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

.container
  height 100vh
  display grid
  grid-template-rows 2fr 8fr

.image
  grid-row 1 / 2
  width 50px
  height 50px
  background $blue
  border-bottom 5px solid $red

.nav-list
  grid-row 2 / 3
  display grid
  grid-template-rows auto

</style>

