<template>
  <div class="week-plan">
    <h1 class="week-plan">
      Week Plan
    </h1>
    <WeekPlanCard />
  </div>
</template>

<script>
import WeekPlanCard from '../containers/WeekPlanCard.vue';

export default {
  name:'WeekPlan',
  components: {
    WeekPlanCard
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

<style>

</style>
