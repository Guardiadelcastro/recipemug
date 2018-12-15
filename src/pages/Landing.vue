<template>
  <div class="container">
    <HomeNav class="homenav" />
    <LandingImages class="landing-images" />
    <AboutUs class="about-us" />
    <WhatsTheApp class="whats-the-app" />
    <Footer class="footer" />
  </div>
</template>

<script>
import HomeNav from '../containers/HomeNav.vue';
import LandingImages from '../containers/LandingImages.vue';
import AboutUs from '../containers/AboutUs.vue';
import WhatsTheApp from '../containers/WhatsTheApp.vue';
import Footer from '../containers/Footer.vue';

export default {
  name: 'Landing',
  components: {
    HomeNav,
    LandingImages,
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
    grid-template-rows 10vh 90vh 65vh 35vh
    grid-template-columns 50% 20% 30%

</style>


