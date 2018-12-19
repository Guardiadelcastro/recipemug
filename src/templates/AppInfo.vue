<template>
  <nav class="app-info">
    <div class="info-body">
      <div class="title">
        The App
      </div>
      <div class="rings1" />
    </div>
    <div class="screenshots">
      <div class="images">
        The views
      </div>
      <div class="rings2" /> 
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
    grid-template-columns 50% 50%
    max-width 100%
    margin 10px 10px 10px 10px

  .info-body
    font-family $font
    grid-column 1 / 2
    font-size 2em
    background-color $dark-blue
    border-radius 20px
    border-top 1px solid $black
    border-left 1px solid $black
    border-bottom 1px solid $black
    display grid
    grid-template-columns 15fr 1fr
    grid-template-rows 15% 75% 10%
  
  .title
    color $white
    font-family $font-title
    font-size 1em
    margin-top 10px
    text-shadow: rgb(0, 0, 0) 1px 0px 0px, rgb(0, 0, 0) 0.540302px 0.841471px 0px, rgb(0, 0, 0) -0.416147px 0.909297px 0px, rgb(0, 0, 0) -0.989992px 0.14112px 0px, rgb(0, 0, 0) -0.653644px -0.756802px 0px, rgb(0, 0, 0) 0.283662px -0.958924px 0px, rgb(0, 0, 0) 0.96017px -0.279415px 0px
    grid-row 1 / 2
    display flex
    justify-content center
  
  .screenshots
    font-family $font
    grid-column 2 / 3
    font-size 2em
    background-color $ligh-blue
    border-radius 20px
    border-top 1px solid $black
    border-right 1px solid $black
    border-bottom 1px solid $black
    display grid 
    grid-template-columns 1fr 15fr
    grid-template-rows 15% 75% 10%
  
  .images
    color $white
    font-family $font-title
    font-size 1em
    margin-top 10px
    text-shadow: rgb(0, 0, 0) 1px 0px 0px, rgb(0, 0, 0) 0.540302px 0.841471px 0px, rgb(0, 0, 0) -0.416147px 0.909297px 0px, rgb(0, 0, 0) -0.989992px 0.14112px 0px, rgb(0, 0, 0) -0.653644px -0.756802px 0px, rgb(0, 0, 0) 0.283662px -0.958924px 0px, rgb(0, 0, 0) 0.96017px -0.279415px 0px
    grid-column 2 / 3
    grid-row 1 / 2
    display flex
    justify-content center

    .rings1
      height 20px
      weight 20px
      border 1px solid $black
      grid-column 2 / 3
      grid-row 2 / 3

</style>

