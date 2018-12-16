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
            type="button"
            theme="orange"
            name="Go to Dashboard"
          />
        </RouterLink>
      </div>  
    </div>
    <div class="move-to-info">
      <LandingButton
        type="info"
        theme="orange"
        name="+ info"
      />
    </div>
  </nav>
</template>

<script>
import BaseButton from '../components/BaseButton.vue';
import LandingButton from '../components/LandingButton.vue';

export default {
  name:'HomeNav',
  components: {
    BaseButton,
    LandingButton
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
    grid-template-columns 25% 15% 15% 15% 15% 15% 

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
    grid-column 6 / 7
    display flex
    align-items center
    justify-content center
    margin-left 10px

  .move-to-info
    grid-column 5 / 6
    display flex
    align-items center
    justify-content center
    
</style>

