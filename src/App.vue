<template>
  <div>
    <dashboard></dashboard>
  </div>
</template>

<script>
import Dashboard from './pages/Dashboard.vue';

  export default {
    name: 'App',
    components: {
      'dashboard': Dashboard
    } 
    
  }

</script>
<style lang="stylus">
@import './styles/variables'

body
  margin 0
</style>
