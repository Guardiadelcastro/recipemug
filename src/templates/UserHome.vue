<template>
  <div class="home-container">
    <h1 class="home-title">
      Home
    </h1>
    <AllRecipes />
  </div>
</template>

<script>
import AllRecipes from '../containers/AllRecipes.vue';


export default {
  name: 'DashboardHome',
  components: {
    AllRecipes
  },
};
</script>

<style lang="stylus">
@import '../styles/variables'
@import '../styles/mixins'

  .home-container
    comp-size(95%, 95%)
  
  .home-title
    font-family $font-title
    font-size 2em
    color $blue

</style>

