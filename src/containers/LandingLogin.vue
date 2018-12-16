<template>
  <nav class="landing-login">
    <div class="title" />
  </nav>
</template>

<script>
export default {
  name: 'LandingLogin',
  props: {}
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

  .landing-login
    background-color $white
    grid-column 3 / 4
    grid-row 2 / 3
    margin 10px 10px 10px 5px
  
</style>


