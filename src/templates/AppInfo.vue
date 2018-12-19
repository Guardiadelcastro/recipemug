<template>
  <nav class="app-info">
    <div class="info-body">
      <div class="title">
        What's the App
      </div>
    </div>
    <div class="screenshots">
      Screenshots
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
    font-family 'Fira Sans', 'Nobile', 'Pacifico', 'Montserrat', sans-serif
    grid-column 1 / 2
    font-size 2em
    background-color $dark-blue
    margin-right 5px
    display flex
    justify-content center
  
  .title
    color $white
    font-family $font-title
    font-size 30px
    margin-top 15px
    text-shadow: rgb(0, 0, 0) 1px 0px 0px, rgb(0, 0, 0) 0.540302px 0.841471px 0px, rgb(0, 0, 0) -0.416147px 0.909297px 0px, rgb(0, 0, 0) -0.989992px 0.14112px 0px, rgb(0, 0, 0) -0.653644px -0.756802px 0px, rgb(0, 0, 0) 0.283662px -0.958924px 0px, rgb(0, 0, 0) 0.96017px -0.279415px 0px
  
  .screenshots
    font-family $font
    grid-column 2 / 3
    background-color $ligh-blue
    margin-left 5px

</style>

