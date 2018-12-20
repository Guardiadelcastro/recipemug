<template>
  <nav class="app-info">
    <div class="description">
      <div class="title">
        What's the App
      </div>
    </div>
    <div class="pictures">
      <div class="images" />
    </div>
  </nav>
</template>

<script>
export default {
  name:'WhatsTheApp',
  props: {}
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

  .app-info
    display grid 
    grid-template-columns 40% 60%

  .description
    grid column 1 / 2

  .title
    font-family $font-title
    font-size 2em

</style>

