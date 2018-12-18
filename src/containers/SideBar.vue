<template>
  <div class="nav-container">
    <RouterLink
      class="logo"
      to="/"
    >
      <BaseLogo />
    </RouterLink>
    <div class="nav-list">
      <NavLink
        show-icon
        icon="fab fa-phoenix-squadron"
        to="/dashboard/home"
        name="Home"
      />
      <NavLink
        show-icon
        icon="fas fa-search"
        to="/dashboard/search"
        name="Search"
      />
      <NavLink
        show-icon
        icon="fas fa-book"
        to="/dashboard/my-cookbook"
        name="My Cookbook"
      />
      <NavLink
        show-icon
        icon="fas fa-share-square"
        to="/dashboard/shared"
        name="Shared with Me"
      />
      <NavLink
        show-icon
        icon="fas fa-calendar-check"
        to="/dashboard/week-plan"
        name="Week Plan"
      />
      <NavLink
        show-icon
        icon="fas fa-lemon"
        to="/dashboard/meal-plans"
        name="My Meals"
      />
    </div>
  </div>
</template>

<script>
import NavLink from '../components/NavLink.vue';
import BaseLogo from '../components/BaseLogo.vue';

export default {
  name:'SideBar',
  components: {
    NavLink,
    BaseLogo
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

.logo
  grid-row 1 / 2
  text-decoration none
  display flex
  flex-flow row nowrap
  justify-content center
  align-items center
  background $white

.nav-list
  grid-row 2 / 3
  display flex
  flex-flow column nowrap
  justify-items left 
  color $white
  padding-top 15px
  
</style>

