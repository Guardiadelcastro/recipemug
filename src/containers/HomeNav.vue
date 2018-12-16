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
    <div class="move-to-dash">
      <div id="box">
        <RouterLink to="/dashboard">
          <BaseButton
            type="button1"
            theme="orange"
            name="Go to Dashboard"
          />
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script>
import BaseButton from '../components/BaseButton.vue';

export default {
  name:'HomeNav',
  components: {
    BaseButton
  },
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
    display grid
    grid-template-columns 25% 25% 25% 25%

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
  
  .move-to-dash
    grid-column 4 / 5
    display flex
    align-items center
    justify-content flex-end
    margin-right 15px
    
</style>

