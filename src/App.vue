<template>
  <div>
   <html-recipe-form></html-recipe-form>
   <alert-button onClick="alertClick" class="slateblue" name="alert"></alert-button>
   <console-button class="cadetblue"></console-button>
  </div>
</template>

<script>
import HTMLRecipeForm from './components/HTMLRecipeForm.vue';
import vueButton from './components/vueButton'

  export default {
    components: {
      'html-recipe-form': HTMLRecipeForm,
      'alert-button': vueButton,
      'console-button': vueButton
    } 
    
  }
</script>