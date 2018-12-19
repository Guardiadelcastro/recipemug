<template>
  <div class="week-card">
    <p class="day">
      {{ day }}
    </p>
    <div class="recipe">
      Add your recipe
    </div>
    <BaseButton
      theme="green"
      show-icon
      icon="fas fa-chevron-circle-down"
      name="Add Recipe"
    />
  </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue';

export default {
  name: 'WeekPlanCard',
  components:{
    BaseButton
  },
  props:{
    day: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="stylus" scoped>
  @import '../styles/variables'

  .week-card
    width 200px
    height 500px

  .day
    font-family $font
    font-size 20px
    color $grey
  
  .recipe
    width 200px
    height 200px
    border 2px dashed $grey


</style>
