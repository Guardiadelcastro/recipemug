<template>
  <div class="html-myProfile">
    <div class="title">
      <h1>My Profile</h1>
    </div>
    <div class="recipes">
      <!-- <RecipeCard v-for="value in 3" :key="index" /> -->
    </div>  
  </div>
</template>

<script>
// import RecipeCard from '../containters/RecipeCard';

export default {
  name: 'UserProfile',
  components: {
    // 'RecipeCard': RecipeCard
  },
  props: {},
  data: function() {
    return {
      numberOfRecipes: 3
    };
  },
  methods: {
  }
};

</script>

<style lang="stylus">
  .recipes
    display: flex;
  
</style>
