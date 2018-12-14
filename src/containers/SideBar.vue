<template>
  <div class="nav-container">
    <div class="title">
      <span class="recipe-title">
        Recipe
      </span>
      <span class="mug-title">
        Mug
      </span>
    </div>
    <div class="nav-list">
      <NavLink
        show-icon
        icon="fab fa-phoenix-squadron"
        to="/#home"
        name="home"
      />
      <NavLink
        show-icon
        icon="fas fa-search"
        to="/#search"
        name="Search"
      />
      <NavLink
        show-icon
        icon="fas fa-book"
        to="/#cookbook"
        name="My Cookbook"
      />
      <NavLink
        show-icon
        icon="fas fa-share-square"
        to="/#shared"
        name="Shared with Me"
      />
      <NavLink
        show-icon
        icon="fas fa-calendar-check"
        to="/#week-plan"
        name="Week Plan"
      />
      <NavLink
        show-icon
        icon="fas fa-lemon"
        to="/My meals"
        name="My Meals"
      />
    </div>
  </div>
</template>

<script>
import NavLink from '../components/NavLink.vue';

export default {
  name:'SideBar',
  components: {
    NavLink
  },
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

.nav-list
  grid-row 2 / 3
  display flex
  flex-flow column nowrap
  justify-items left 
  color $white
  padding-top 15px
  
</style>

