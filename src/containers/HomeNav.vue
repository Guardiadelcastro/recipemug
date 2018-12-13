<template>
  <nav class="home-nav">
    <div class="title">
      <span class="recipe-title">
        Recipe
      </span>
      <span class="mug-title">
        Mug
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  name:'HomeNav',
  props: {}
};

</script>


<style lang="stylus" scoped>
@import '../styles/variables'

  .home-nav 
    background-color $dark-red
    grid-column 1 / 4
    display flex

  .title
    display flex
    grid-column 1 / 2
    margin-left 20px
    margin-top 5px
    max-height 60px
    width 150px
    justify-content center
    align-items center

  .recipe-title, .mug-title
    font-family 'Pacifico', 'Montserrat', serif
    font-size 30px
    font-weight bold

  .recipe-title
    background-color $white
    color $dark-red
    padding-right 4px

  .mug-title
    color $white
    
</style>

