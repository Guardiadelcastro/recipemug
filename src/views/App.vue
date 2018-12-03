<template>
  <div>
   <html-recipeForm></html-recipeForm>
   <v-button v-on:click="alertClick" name="alert"></v-button>
  </div>
</template>


<style>
  
</style>

<script>
import HTMLRecipeForm from './components/HTMLRecipeForm.vue';
import vueButton from './components/vueButton'

  export default {
    components: {
      'html-recipeForm': HTMLRecipeForm,
      'v-button': vueButton
    } 
    
  }
</script>