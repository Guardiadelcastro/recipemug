<template>
  <div>
    <h1 class="cookbook">
      My Cookbook
    </h1>
    <FullRecipe />
  </div>
</template>

<script>
import FullRecipe from './FullRecipe.vue';

export default {
  name: 'Cookbook',
  components: {
    FullRecipe
  }
};
</script>

<style>

</style>
