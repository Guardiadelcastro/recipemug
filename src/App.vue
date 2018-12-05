<template>
  <div>
   <html-recipe-form></html-recipe-form>
   <v-button @click="alertClick" theme="slateblue" name="alert"></v-button>
   <v-button @click="consoleLog" theme="cadetblue" name="console log"></v-button>
  </div>
</template>

<script>
import HTMLRecipeForm from './components/HTMLRecipeForm.vue';
import TemplateButton from './components/TemplateButton'

  export default {
    components: {
      'html-recipe-form': HTMLRecipeForm,
      'v-button': TemplateButton
    },
    methods: {
    alertClick() {
      alert(`You have clicked the button ${this.name}`)
    },
    consoleLog() {
      console.log('Vue cabrón funciona')
    }
  } 
    
  }
</script>