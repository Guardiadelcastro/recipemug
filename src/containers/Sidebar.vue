<template>
  <div class="nav-container">
    <div class="image"></div>
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
  name:'sidebar',
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
  background-color $dark-blue

.image
  grid-row 1 / 2
  align-self center
  justify-self center
  width 125px
  height 125px
  background $blue
  border 5px solid $green


.nav-list
  grid-row 2 / 3
  display grid
  grid-auto-rows minmax(25px, auto)
  justify-items left 
  align-items center

.nav
  margin-left 10px
  font-size 20px
  height 25px
</style>

