<template>
  <div class="landing-images" />
</template>

<script>
export default {
  name: 'LandingImages',
  props: {}
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'
  
  .landing-images
    background-color $orange
    grid-column 1 / 3
    grid-row 2 / 3

</style>


