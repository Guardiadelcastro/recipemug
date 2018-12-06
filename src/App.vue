<template>
  <div>
    <web-nav></web-nav>
    <html-recipeForm></html-recipeForm>
  </div>
</template>


<style>
  
</style>

<script>
//import HTMLRecipeForm from './components/HTMLRecipeForm.vue';
import navBar from './components/navBar.vue';

  export default {
    components: {
      //'html-recipeForm': HTMLRecipeForm,
      'web-nav': navBar
    } 
    
  }

</script>