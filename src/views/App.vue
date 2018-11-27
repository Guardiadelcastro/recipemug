<template>
  <div>
   <html-myProfile></html-myProfile>
   <html-recipeForm></html-recipeForm>
  </div>
</template>


<style>
  
</style>

<script>
import HTMLRecipeForm from './components/HTMLRecipeForm.vue';
import HTMLMyProfile from './components/HTMLMyProfile'
  export default {
    components: {
      'html-recipeForm': HTMLRecipeForm,
      'html-myProfile': HTMLMyProfile
    } 
    
  }
</script>