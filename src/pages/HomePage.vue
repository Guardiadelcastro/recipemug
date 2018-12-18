<template>
  <div class="homepage">
    <HomeNav class="nav" />
    <Transition
      name="fade"
      mode="out-in"
    >
      <RouterView class="content" />
    </Transition>
    <Footer class="footer" />
  </div>
</template>

<script>
import HomeNav from '../containers/HomeNav.vue';
import Footer from '../containers/Footer.vue';

export default {
  name: 'Landing',
  components: {
    HomeNav,
    Footer
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

  .homepage
    display grid
    grid-template-rows 1fr 7fr 1fr
    background $white
    height 100vh
    width 100vw

  .nav
    grid-row 1/2

  .content
    grid-row 2/3

  .footer
    grid-row 3/4
  
   .slide-fade-enter-active
  transition all 3s ease

  .slide-fade-leave-active
    transition all 3s cubic-bezier(1.0, 0.5, 0.8, 1.0)
    
</style>


