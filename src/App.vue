<template>
  <div>  
    <log-in></log-in>
   <html-recipeForm></html-recipeForm>

  </div>
</template>


<style>
  
</style>

<script>
import HTMLRecipeForm from './components/HTMLRecipeForm.vue';
import login from './components/login.vue'
  export default {
    components: {
      'html-recipeForm': HTMLRecipeForm,
      'log-in':login
    } 
    
  }
</script>