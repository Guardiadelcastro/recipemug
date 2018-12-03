<template>
  <div>
   <html-recipeForm></html-recipeForm>
   <alert-button class="slateblue" name="alert"></alert-button>
   <console-button></console-button>
  </div>
</template>

<script>
import HTMLRecipeForm from './components/HTMLRecipeForm.vue';
import vueButton from './components/vueButton'

  export default {
    components: {
      'html-recipeForm': HTMLRecipeForm,
      'alert-button': vueButton,
      'console-button': vueButton
    } 
    
  }
</script>