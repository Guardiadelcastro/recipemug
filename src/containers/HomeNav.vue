<template>
  <div class="home-nav">
    <DarkLogo class="logo" />
    <div class="links">
      <NavLink
        to="/info"
        name="App Info"
        theme="home"
      />
      <NavLink
        to="/about"
        name="About us"
        theme="home"
      />
      <NavLink
        to="/pricing"
        name="Pricing"
        theme="home"
      />
      <NavLink
        to="/login"
        name="Log In"
        theme="home"
      />
    </div>
  </div>
</template>

<script>
import NavLink from '../components/NavLink.vue';
import DarkLogo from '../components/DarkLogo.vue';

export default {
  name:'HomeNav',
  components: {
    NavLink,
    DarkLogo
  },
  props: {}
};

</script>


<style lang="stylus" scoped>
@import '../styles/variables'

  .home-nav 
    background-color $red
    display grid
    grid-template-columns 20% 80%
    width 100vw
  
  .logo
    grid-column 1/2


  .links
    grid-column 2/3
    display flex
    flex-flow row nowrap
    align-items center
    justify-content flex-end
    padding-right 20px

  a
    text-decoration none
</style>

