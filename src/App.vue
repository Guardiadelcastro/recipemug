<template>
  <div>
    <web-nav></web-nav>
    <recipe-form></recipe-form>
  </div>
</template>

<script>
import CreateRecipeForm from './containers/CreateRecipeFrom';
import navBar from './containers/navBar'

  export default {
    components: {
      'recipe-form': CreateRecipeForm,
      'web-nav': navBar
    } 
    
  }

</script>