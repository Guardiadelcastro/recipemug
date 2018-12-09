<template>
  <div>
    <web-nav></web-nav>
    <recipe-form></recipe-form>

  </div>
</template>

<script>
import CreateRecipeForm from './containers/CreateRecipeForm';
import navBar from './containers/navBar'

  export default {
    components: {
      'recipe-form': HTMLRecipeForm,
      'web-nav': navBar
    } 
    
  }

</script>