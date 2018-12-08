<template>
  <div>
   <html-recipe-form></html-recipe-form>
   <v-button @click="alertClick" theme="slateblue" name="alert"></v-button>
   <v-button @click="consoleLog" theme="cadetblue" name="console log"></v-button>
  </div>
</template>

<script>
import HTMLRecipeForm from './containers/CreationRecipeForm.vue';

  export default {
    components: {
      'html-recipe-form': HTMLRecipeForm,
    },
  } 

</script>