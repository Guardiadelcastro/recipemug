<template>
  <div>
    <web-nav></web-nav>
    <html-recipeForm></html-recipeForm>
    <alert-button onClick="alertClick" class="slateblue" name="alert"></alert-button>
    <console-button class="cadetblue"></console-button>
  </div>
</template>

<script>
import HTMLRecipeForm from './components/HTMLRecipeForm.vue';
import vueButton from './components/vueButton'
import navBar from './components/navBar'

  export default {
    components: {
      'html-recipe-form': HTMLRecipeForm,
      'alert-button': vueButton,
      'console-button': vueButton,
      'web-nav': navBar
    } 
    
  }

</script>