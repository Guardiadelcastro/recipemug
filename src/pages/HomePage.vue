<template>
  <div>
    <HomeNavBar />
    <h1>Recipe Mug Home Page</h1>
    <Login />
  </div>
</template>

<script>
import HomeNavBar from '../containers/HomeNavBar.vue';
import Login from '../containers/login.vue';
export default {
  name: 'HomePage',
  components: {
    HomeNavBar,
    Login,
  }
};
</script>

<style lang="stylus" scoped>
</style>
