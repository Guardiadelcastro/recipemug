<template>
  <footer class="footer">
    Made with <i class="fas fa-heart" /> by the Recipemug Team
  </footer>
</template>

<script>

export default {
  name:'Footer',
  components: {
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'
  
  .footer
    color $light
    font-family $font
    font-size 0.55rem
    cursor default
    user-select none

  .fa-heart
    color $red
    padding 0 3px

</style>

