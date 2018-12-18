<template>
  <nav class="about-us">
    <div class="title">
      About Us
    </div>
    <div class="description">
      Occaecati accusantium dicta accusantium beatae dignissimos doloremque. Sed architecto exercitationem nemo voluptatum omnis laudantium id voluptatibus. Neque nobis eaque omnis nihil libero sequi cupiditate. Odit ratione illo ea magnam velit magnam at. Soluta suscipit dolores aut itaque dolorum. Et et non enim provident voluptas. Magni itaque iste architecto. Necessitatibus est rerum ipsa et non non nisi mollitia. Dicta ut exercitationem eos facere hic laboriosam. Voluptas voluptatem voluptas autem vel. Sint saepe explicabo dolor voluptates qui quos eaque similique. Rem est in et.
    </div>
    <div class="members">
      <div class="developer A">
        <div class="box" />
        <a
          href="https://github.com/Guardiadelcastro/recipemug"
          target="_blank"
        >
          Alejandro Castro de la Guardia
        </a>
      </div>
      <div class="developer B">
        <div class="box" />
        <a
          href="https://github.com/Aythamiza"
          target="_blank"
        >
          Aythami Z. Martín González
        </a>
      </div>
      <div class="developer C">
        <div class="box" />
        <a
          href="https://github.com/RichardMoralesLuis"
          target="_blank"
        >
          Richard Morales Luis
        </a> 
      </div>
      <div class="developer D"> 
        <div class="box" />
        <a
          href="https://github.com/JavierPerezGarcia"
          target="_blank"
        >
          Javier Pérez García
        </a>
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
    font-size 97%
    margin 15px 25px 0px 25px
    height 90px

  .members
    //border 1px solid $black
    margin 10px 10px
    display flex
    flex-direction row
    justify-content center
    align-items center
    width 100%
    height 70%

  .developer
    //border 1px solid $black
    display flex
    flex-direction column
    justify-content flex-start
    align-items center
    height 280px
    width 280px
   
  .box
    background $white
    display flex
    align-items center
    justify-content center
    width 200px
    height 200px
    border 1px solid black
    margin 0px 0px 10px 0px
    border-radius 50%
    flex-direction column
    margin-top 10px
  
  a
    margin-top 15px
    color $black
    font-family $font
    text-decoration none
    font-size 97%
    &:hover
      border-bottom 1px dashed $black
    
</style>

