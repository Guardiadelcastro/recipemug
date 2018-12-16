<template>
  <div>
    <HomeNavBar />
    <h1>Recipe Mug Home Page</h1>


    <Fotter />
  </div>
</template>


<script>
import HomeNavBar from '../containers/HomeNavBar.vue';
import Fotter from '../containers/Fottercomp.vue';
export default {
  name: 'HomePage',
  components: {
    HomeNavBar,
    Fotter
  }
};
</script>

<style lang="stylus" scoped>
</style>
