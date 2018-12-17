<template>
  <div class="container">
    <HomeNav class="homenav" />
    <LandingImages class="landing-images" />
    <LandingLogin class="landing-login" />
    <div id="second-page">
      <AboutUs class="about-us" />
      <WhatsTheApp class="whats-the-app" />
      <Footer class="footer" />
    </div>
  </div>
</template>

<script>
import HomeNav from '../containers/HomeNav.vue';
import LandingImages from '../containers/LandingImages.vue';
import LandingLogin from '../containers/LandingLogin.vue';
import AboutUs from '../containers/AboutUs.vue';
import WhatsTheApp from '../containers/WhatsTheApp.vue';
import Footer from '../containers/Footer.vue';

export default {
  name: 'Landing',
  components: {
    HomeNav,
    LandingImages,
    LandingLogin,
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
    background $mustard

  #second-page
    grid-column 1 / 4
    grid-row 3 / 5
  
  .about-us
    grid-column 1 / 2
    grid-row 3 / 4
  
  .whats-the-app
    grid-column 2 / 4
    grid-row 3 / 4

</style>


