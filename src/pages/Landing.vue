<template>
  <div class="container">
    <HomeNav class="homenav" />
    <LandingImages class="landing-images" />
    <!--<AboutUs class="about-us" />
    <WhatsTheApp class="whats-the-app" />
    <Footer class="footer" />-->
  </div>
</template>

<script>
import HomeNav from '../containers/HomeNav.vue';
import LandingImages from '../containers/LandingImages.vue';
//import AboutUs from //'../containers/AboutUs.vue';
//import Footer from '../containers/Footer.vue';
//import WhatsTheApp from '../containers/WhatsTheApp.vue';

export default {
  name: 'Landing',
  components: {
    HomeNav,
    LandingImages
    //AboutUs,
    //WhatsTheApp,
    //Footer
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

  .container
    height auto 
    display grid
    grid-template-columns 50% 20% 30%
    grid-template-rows 70px 599px 350x 250px

</style>


