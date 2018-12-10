<template>
  <div>
    <dashboard></dashboard>
  </div>
</template>

<script>
import Dashboard from './pages/Dashboard.vue';

  export default {
    components: {
      'dashboard': Dashboard
    } 
    
  }

</script>
<style lang="stylus" scoped>
@import './styles/variables'

div
  background $white
</style>
