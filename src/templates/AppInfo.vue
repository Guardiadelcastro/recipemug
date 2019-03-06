<template>
  <nav class="app-info">
    <div class="image">
      <div class="box">
        <div class="top">
          <div class="title">
            <div class="text1">
              Recipe Mug
            </div>
          </div>
        </div>
        <div class="description">
          <p class="text2">
            Recipe Mug is a web app made for all those passionate about cooking. For those who want to create their own recipes in a simple and comfortable way, as well as always having access to your recipes for reference whenever you want. Also, you can plan your week in advance with the meals you already have created, making a process that is tedius more managable. Or you can store meal plans for special days, like Christmas or a simple family get-together.
          </p>
          <div class="photo" />
        </div>
        <div class="links">
          <a
            href="https://github.com/Guardiadelcastro/recipemug"
            target="_blank"
          >
            <p>Front-end<i class="fab fa-github" /></p>  
          </a>
          <a
            href="https://github.com/Guardiadelcastro/recipemug-backend"
            target="_blank"
          >
            <p>Back-end<i class="fab fa-github" /></p>
          </a>
        </div>
      </div>
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
    grid-template-columns 100%
    grid-template-rows 100%
  
  .image
    margin 10px 12px 12px 10px
    background-image url('https://assets.recipemug.club/img/landing7.jpg')
    background-size cover
    display grid
    grid-template-columns 100%
    grid-template-rows 100%
    transition-duration 0.7s
    -webkit-box-shadow: 3px 3px 3px 2px rgba(0,0,0,0.4)
    -moz-box-shadow: 3px 3px 3px 2px rgba(0,0,0,0.4)
    box-shadow: 3px 3px 3px 2px rgba(0,0,0,0.4)
    
  .box
    display grid
    grid-template-columns 15% 70% 15%
    grid-template-rows 20% 65% 15%

  .top
    grid-column 2 / 3
    grid-row 1 / 2
    display flex
    justify-content center
    align-items center
  
  .title
    margin-bottom 5px
    color $mustard
    font-family $font-title
    font-size 2.4em
    text-shadow: rgb(0, 0, 0) 1px 0px 0px, rgb(0, 0, 0) 0.540302px 0.841471px 0px, rgb(0, 0, 0) -0.416147px 0.909297px 0px, rgb(0, 0, 0) -0.989992px 0.14112px 0px, rgb(0, 0, 0) -0.653644px -0.756802px 0px, rgb(0, 0, 0) 0.283662px -0.958924px 0px, rgb(0, 0, 0) 0.96017px -0.279415px 0px
    display flex
    //justify-content center
    //align-items center
  
  .text1
    border-bottom 1.5px dashed $black

  .links
    font-family $font
    grid-row 3 / 4
    grid-column 2 / 3
    display flex
    justify-content center
    flex-direction row
    align-items center
    :hover
      color $purple

  a
    color $light-green
    text-decoration none
    margin-right 25px
    margin-left 25px
    font-size 1.8em
    text-shadow: rgb(0, 0, 0) 1px 0px 0px, rgb(0, 0, 0) 0.540302px 0.841471px 0px, rgb(0, 0, 0) -0.416147px 0.909297px 0px, rgb(0, 0, 0) -0.989992px 0.14112px 0px, rgb(0, 0, 0) -0.653644px -0.756802px 0px, rgb(0, 0, 0) 0.283662px -0.958924px 0px, rgb(0, 0, 0) 0.96017px -0.279415px 0px

  i
    margin-left 15px
  
  .description
    font-family $font
    grid-column 2 / 3
    grid-row 2 / 3
    background-color $transparent-mustard
    display grid
    grid-template-columns 50% 50%
    grid-template-rows 100%
    line-height 35px

  .text2
    margin 15px 10px 15px 5px
    text-align justify
    font-size 100%
    text-shadow 0px 0.1px 0px
    grid-column 2 / 3
    grid-row 1 / 2
    display flex
    align-items center

  .photo
    grid-column 1 / 2
    grid-row 1 / 2
    background-image url('https://assets.recipemug.club/img/landing9.jpg')
    background-size cover
    margin 5px

</style>

