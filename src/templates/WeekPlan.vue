<template>
  <div class="week-plan">
    <h1 class="title">
      Week Plan
    </h1>
    <div class="content">
      <WeekPlanCard
        v-for="day in days"
        :key="day.id"
        :day-name="day.day"
      />
    </div>
  </div>
</template>

<script>
import WeekPlanCard from '../containers/WeekPlanCard.vue';

export default {
  name:'WeekPlan',
  components: {
    WeekPlanCard
  },
  props:{
    dayName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      days: [
        {id: 1, day: 'Monday'},
        {id: 2, day: 'Tuesday'},
        {id: 3, day: 'Wednesday'},
        {id: 4, day: 'Thursday'},
        {id: 5, day: 'Friday'},
        {id: 6, day: 'Saturday'},
        {id: 7, day: 'Sunday'}
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
  @import '../styles/variables'
  @import '../styles/mixins'

  .week-plan
    comp-size(90%)
    display flex
    flex-flow column nowrap
    justify-content center
    align-items center

  .title
    font-family $font-title
    color $green
    border-radius $br
    border 2px dashed $green
    padding 10px

  .content
    display flex
    flex-flow row wrap
    justify-content center
    align-items center
    overflow scroll


</style>

