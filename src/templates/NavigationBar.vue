<template>
  <div class="nav-grid">
    <Logo class="logo" />
    <NavButtons class="auth-buttons" />
    <NavigationList class="navigation" />
    <Footer class="footer" />
  </div>
</template>

<script>
import Logo from '../components/Logo.vue';
import NavButtons from '../containers/NavButtons.vue';
import NavigationList from '../containers/NavigationList.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Navigation',
  components: {
    Logo,
    NavButtons,
    NavigationList,
    Footer
  }
    
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

.nav-grid
  min-height 100vh
  display grid
  background-color $dark
  grid-template-rows 1fr 1.5fr 7fr 0.5fr

.logo
  color $light
  grid-row 1/2

.auth-buttons
  grid-row 2/3
  
.navigation
  grid-row 3/4

.footer
  grid-row 4/5
  display flex
  justify-content center
  align-items center

</style>
