<template>
  <nav class="pricing">
    <div class="title">
      <p class="text">
        Pricing
      </p>
    </div>
    <div class="free-method">
      <div class="image1">
        <div class="plan1">
          Free Plan
        </div>
      </div> 
      <div class="info1" />
    </div>
    <div class="premium-method">
      <div class="image2">
        <div class="plan2">
          Premium Plan
        </div>
      </div>
      <div class="info2" />
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
    grid-template-columns 40% 10% 10% 40%
    grid-template-rows 14% 86%

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
    grid-column 1 / 3
    grid-row 1 / 3
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

  .premium-method
    grid-column 3 / 5
    grid-row 1 / 3
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

</style>
