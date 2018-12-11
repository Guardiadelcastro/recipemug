<template>
  <div>
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from './pages/Dashboard.vue';

export default {
  name: 'App',
  components: {
    'Dashboard': Dashboard
  } 
};

</script>
<style lang="stylus">
@import './styles/variables'

body
  margin 0
</style>
