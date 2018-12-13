<template>
  <div>
    <!--<Dashboard />-->
    <Landing />
  </div>
</template>

<script>
//import Dashboard from './pages/Dashboard.vue';
import Landing from './pages/Landing.vue';

export default {
  name: 'App',
  components: {
    //'Dashboard': Dashboard,
    'Landing': Landing
  } 
};

</script>
<style lang="stylus">
@import './styles/variables'

body
  margin 0
</style>
