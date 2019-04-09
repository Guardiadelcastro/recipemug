<template>
  <div class="nav-container">
    <RouterLink
      class="logo"
      to="/"
    >
      <Logo />
    </RouterLink>
    <div class="nav-list">
      <NavLink
        show-icon
        icon="fab fa-phoenix-squadron"
        to="/dashboard/Profile"
        name="Profile"
      />
      <NavLink
        show-icon
        icon="fab fa-phoenix-squadron"
        to="/dashboard/home"
        name="Home"
      />
    </div>
  </div>
</template>

<script>
import NavLink from '../components/NavLink.vue';
import Logo from '../components/Logo.vue';

export default {
  name:'SideBar',
  components: {
    NavLink,
    Logo
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

