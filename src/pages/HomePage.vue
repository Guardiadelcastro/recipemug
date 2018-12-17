<template>
  <div>
    <HomeNavBar />
    <h1>Recipe Mug Home Page</h1>
    <Login />
    <Fotter />
  </div>
</template>


<script>
import HomeNavBar from '../containers/HomeNavBar.vue';
import Login from '../containers/login.vue';
import Fotter from '../containers/Fottercomp.vue';
export default {
  name: 'HomePage',
  components: {
    HomeNavBar,
    Login,
    Fotter,
  }
};
</script>

<style lang="stylus" scoped>
</style>
