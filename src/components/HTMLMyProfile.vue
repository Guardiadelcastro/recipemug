<template>

  <div class="html-myProfile">
    <div class="title">
      <h1>My Profile</h1>
    </div>
    <div class = "recipes">
      <html-recipeCard v-for="value in 3" :key="value"></html-recipeCard>
    </div>
    
  </div>
</template>

<script>
import HTMLRecipeCard from './HTMLRecipeCard';
export default {
name: 'HTMLMyProfile',
props: {},
  data: function() {
    return {
      numberOfRecipes: 3
    }
  },
  methods: {

  },
  components: {
    'html-recipeCard': HTMLRecipeCard
  }
}
</script>

<style lang="stylus">
  .recipes
    display: flex;
  
</style>
