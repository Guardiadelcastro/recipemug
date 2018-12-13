<template>
  <div class="container">
    <HomeNav class="homenav" />
    <AboutUs class="about-us" />
    <WhatsTheApp class="whats-the-app" />
    <Footer class="footer" />
  </div>
</template>

<script>
import HomeNav from '../containers/HomeNav.vue';
import AboutUs from '../containers/AboutUs.vue';
import Footer from '../containers/Footer.vue';
import WhatsTheApp from '../containers/WhatsTheApp.vue';

export default {
  name: 'Landing',
  components: {
    HomeNav,
    AboutUs,
    WhatsTheApp,
    Footer
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

  .container
    display grid
    grid-template-rows 70px 550px 350px 200px
    grid-template-columns 50% 20% 30%

</style>


