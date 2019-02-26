<template>
  <div class="week-card">
    <p class="day">
      {{ dayName }}
    </p>
    <div class="recipe">
      Your Recipe
    </div>
    <BaseButton
      theme="green"
      show-icon
      icon="fas fa-chevron-circle-down"
      name="Add Recipe"
    >
      <i class="fas fa-chevron-circle-down" />
    </BaseButton>
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
    dayName: {
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
    height 300px
    display flex
    flex-flow column
    justify-content flex-start
    align-items center
    padding 10px

  .day
    font-family $font
    font-size 20px
    color $grey
  
  .recipe
    width 150px
    height 200px
    font-family $font
    border 2px dashed $grey
    margin-bottom 10px
    display flex
    align-items center
    justify-content center


</style>
