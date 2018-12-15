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
    grid-row 1 / 2
    display flex

  .title
    display flex
    grid-column 1 / 2
    margin-left 20px
    width 150px
    justify-content center
    align-items center

  .recipe-title, .mug-title
    font-family 'Pacifico', 'Montserrat', serif
    font-size 1.6em
    font-weight bold

  .recipe-title
    background-color $white
    color $dark-red
    padding-right 4px

  .mug-title
    color $white
    
</style>

