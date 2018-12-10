<template>
  <div class="nav-container">
    <div class="image"></div>
    <div class="nav-list">
      <div class="nav">
        <p>Profile</p>
      </div>
      <div class="nav">
        <p>My Cookbook</p>
      </div>
      <div class="nav">
        <p>Shared With Me</p>
      </div>
      <div class="nav">
        <p>Week plan</p>
        </div>
      <div class="nav">
        <p>Something else</p>
      </div>
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

.nav-container
  height 100vh
  display grid
  grid-template-rows 2fr 8fr
  grid-gap 10px
  background-color $orange

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
  grid-template-rows repeat(1fr, 10)
  justify-items left 
  align-items center
  &p 
    margin-left 10px

</style>

