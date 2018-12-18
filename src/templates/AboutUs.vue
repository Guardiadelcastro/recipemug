<template>
  <nav class="about-us">
    <div class="title">
      About Us
    </div>
    <div class="description">
      Occaecati accusantium dicta accusantium beatae dignissimos doloremque. Sed architecto exercitationem nemo voluptatum omnis laudantium id voluptatibus. Neque nobis eaque omnis nihil libero sequi cupiditate. Odit ratione illo ea magnam velit magnam at. Soluta suscipit dolores aut itaque dolorum. Et et non enim provident voluptas. Magni itaque iste architecto. Necessitatibus est rerum ipsa et non non nisi mollitia. Dicta ut exercitationem eos facere hic laboriosam. Voluptas voluptatem voluptas autem vel. Sint saepe explicabo dolor voluptates qui quos eaque similique. Rem est in et.
    </div>
    <div class="images">
      <div class="developer 1" />
      <div class="developer 2" />
      <div class="developer 3" />
      <div class="developer 4" />
    </div>
    <div class="members">
      <div class="name 1">
        Alejandro
      </div>
      <div class="name 2">
        Aythami
      </div>
      <div class="name 3">
        Richard
      </div>
      <div class="name 4">
        Javier
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name:'AboutUs',
  props: {}
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

  .about-us
    background-color $mustard
    display flex
    flex-direction column
    align-items center
    margin 10px 12px 12px 10px
    transition-duration 1s
    -webkit-box-shadow: 3px 3px 3px 2px rgba(0,0,0,0.4)
    -moz-box-shadow: 3px 3px 3px 2px rgba(0,0,0,0.4)
    box-shadow: 3px 3px 3px 2px rgba(0,0,0,0.4)

    &:hover
      transition-duration 1s
      box-shadow 1px

  .title
    color $white
    font-family $font-title
    margin-top 15px
    font-size 30px
    padding-right 1px
    border-bottom 1.5px dashed $dark-grey
    text-shadow: rgb(0, 0, 0) 1px 0px 0px, rgb(0, 0, 0) 0.540302px 0.841471px 0px, rgb(0, 0, 0) -0.416147px 0.909297px 0px, rgb(0, 0, 0) -0.989992px 0.14112px 0px, rgb(0, 0, 0) -0.653644px -0.756802px 0px, rgb(0, 0, 0) 0.283662px -0.958924px 0px, rgb(0, 0, 0) 0.96017px -0.279415px 0px

  .description
    text-align justify
    font-family $font
    font-size 95%
    margin 15px 25px 0px 25px
    height 90px
  
  .images
    border 1px solid $black
    height 230px
    width 100%
    display flex
    justify-content center
    align-items center
    flex-direction row

  .developer
    height 200px
    width 200px
    margin 0px 25px 0px 25px 
    border 1px solid $black
    border-radius 50%

  .members
    display flex
    flex-direction row
    width 100%
    justify-content center
    margin-top 30px

  .name
    margin 0px 25px 0px 25px

</style>

