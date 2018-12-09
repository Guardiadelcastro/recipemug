<template>
  <div>
    <web-nav></web-nav>
    <recipe-form></recipe-form>
  </div>
</template>

<script>
import CreateRecipeForm from "./containers/CreateRecipeForm";
import navBar from './containers/navBar';
import AddIngredients from './containers/AddIngredients';

  export default {
    components: {
      'recipe-form': CreateRecipeForm,
      'web-nav': navBar,
      'add-ingredients': AddIngredients
    } 
    
  }

</script>