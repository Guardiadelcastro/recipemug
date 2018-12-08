<template>
  <div>
    <web-nav></web-nav>
    <html-recipeForm></html-recipeForm>

  </div>
</template>

<script>
import HTMLRecipeForm from './containers/CreationRecipeForm.vue';
import navBar from './components/navBar'

  export default {
    components: {
      'html-recipe-form': HTMLRecipeForm,
      'web-nav': navBar
    } 
    
  }

</script>