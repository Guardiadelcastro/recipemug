<template>
  <nav class="pricing">
    <div class="free-method">
      <div class="image1">
        <div class="plan1">
          Free Plan
        </div>
      </div> 
      <div class="info1">
        <div class="first-data">
          Es gratis
        </div>
        <div class="second-data">
          Es simple
        </div>
        <div class="third-data">
          Almacenamiento de recetas limitado
        </div>
      </div>
    </div>
    <div class="premium-method">
      <div class="image2">
        <div class="plan2">
          Premium Plan
        </div>
      </div>
      <div class="info2">
        <div class="data1">
          Coste: 6€
        </div>
        <div class="data2">
          Es simple
        </div>
        <div class="data3">
          Almacenamiento de recetas ilimitado
        </div>
        <div class="data4">
          Ampliación del planning semanal
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name:'Pricing',
  props: {}
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

  .pricing
    display grid
    grid-template-columns 50% 50%
    grid-template-rows 100%

  /*.title
    grid-column 2 / 4
    grid-row 1 / 2
    display flex
    justify-content center
    align-items center
    color $white
    font-family $font
    font-size 2em
    text-shadow: rgb(0, 0, 0) 1px 0px 0px, rgb(0, 0, 0) 0.540302px 0.841471px 0px, rgb(0, 0, 0) -0.416147px 0.909297px 0px, rgb(0, 0, 0) -0.989992px 0.14112px 0px, rgb(0, 0, 0) -0.653644px -0.756802px 0px, rgb(0, 0, 0) 0.283662px -0.958924px 0px, rgb(0, 0, 0) 0.96017px -0.279415px 0px*/
  
  .free-method
    grid-column 1 / 2
    grid-row 1 / 2
    margin 7px 4px 7px 7px
    border 1px solid $black
    background-color $mustard
    display grid
    grid-template-rows 50% 50%
  
  .image1
    grid-row 1 / 2
    border-bottom 1px solid $black
    background-image url('https://assets.recipemug.club/img/landing6.jpg')
    background-size cover
    display flex
    justify-content center
    align-items center
  
  .plan1
    grid-row 1 / 2
    color $white
    font-size 3.8em
    font-family $font
    text-shadow: rgb(0, 0, 0) 1px 0px 0px, rgb(0, 0, 0) 0.540302px 0.841471px 0px, rgb(0, 0, 0) -0.416147px 0.909297px 0px, rgb(0, 0, 0) -0.989992px 0.14112px 0px, rgb(0, 0, 0) -0.653644px -0.756802px 0px, rgb(0, 0, 0) 0.283662px -0.958924px 0px, rgb(0, 0, 0) 0.96017px -0.279415px 0px
  
  .info1
    display grid
    grid-template-rows 50% 50%
    grid-template-columns 50% 50%
  
  .first-data
    grid-row 1 / 2
    grid-column 1 / 2
    display flex
    justify-content center
    align-items center
    font-family $font
    border-right 1px solid black
  
  .second-data
    grid-row 1 / 2
    grid-column 2 / 3
    display flex
    justify-content center
    align-items center
    font-family $font

  .third-data
    grid-row 2 / 3
    grid-column 1 / 3
    display flex
    justify-content center
    align-items center
    font-family $font
    border-top 1px solid black
  
  .data

  .premium-method
    grid-column 2 / 3
    grid-row 1 / 2
    margin 7px 7px 7px 4px
    border 1px solid $black
    display grid
    grid-template-columns 50% 50%
    background-color $ligh-brown

  .image2
    grid-column 1 / 2
    border-right 1px solid $black
    background-image url('https://assets.recipemug.club/img/landing5.jpg')
    background-size cover
    display flex
    justify-content center
    align-items center
  
  .plan2
    grid-column 1 / 2
    color $white
    font-size 3.8em
    font-family $font
    text-shadow: rgb(0, 0, 0) 1px 0px 0px, rgb(0, 0, 0) 0.540302px 0.841471px 0px, rgb(0, 0, 0) -0.416147px 0.909297px 0px, rgb(0, 0, 0) -0.989992px 0.14112px 0px, rgb(0, 0, 0) -0.653644px -0.756802px 0px, rgb(0, 0, 0) 0.283662px -0.958924px 0px, rgb(0, 0, 0) 0.96017px -0.279415px 0px
    text-align center

  .info2
    display grid
    grid-template-rows 25% 25% 25% 25%
    grid-template-columns 100%

  .data1
    grid-row 1 / 2
    grid-column 1 / 2
    display flex
    justify-content center
    align-items center
    font-family $font
  
  .data2
    grid-row 2 / 3
    grid-column 1 / 2
    display flex
    justify-content center
    align-items center
    font-family $font
    border-top 1px solid black
  
  .data3
    grid-row 3 / 4
    grid-column 1 / 2
    display flex
    justify-content center
    align-items center
    font-family $font
    border-top 1px solid black
  
  .data4
    grid-row 4 / 5
    grid-column 1 / 2
    display flex
    justify-content center
    align-items center
    font-family $font
    border-top 1px solid black

</style>
