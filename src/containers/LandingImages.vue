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
    background-color $white
    grid-column 1 / 3
    grid-row 2 / 3
    margin 20px 5px 20px 10px

</style>


