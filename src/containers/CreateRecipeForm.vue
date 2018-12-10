<template>
  <div class="html-recipeForm">
    <h1 class="title">Recipe Form</h1>
    <form action="post" enctype="multipart/form-data">
    <div class="title">
      <label for="text"> Title of the Recipe: </label>  
      <input type="text" name="title">
    </div>
    <br>
    <div class="description"> 
       <label for=""> Description: </label> 
       <br>
       <textarea name="description" id="" cols="40" rows="5"></textarea>
    </div>
    <br>
     <div class="list-container">
        <div id="ingredients">
          <label for="">Ingredients:</label>
          <input type="text" name="newIngredient" placeholder="Add an Ingredient"> 
        </div>
        <templatebutton type="button" id="newIngredient" stheme="orange" name="+" @click="addIngredient"></templatebutton>
     </div>
     <br>
    <div class="list-container">
       <div id="steps">
       	<label for="">Steps:</label> 
       	<text-input theme="blue" message="Add a Step"> 
       </div>
     <templatebutton type="button" id="newStep" theme="orange" name="+" @click="addStep"></templatebutton>
    </div>
    <br>
    <div class="upladoImage">
      <input type="file" name="image" id="uploadImage" accept="image/*" >
    </div>
    <br>
    <templatebutton name="Cook the new Recipe" theme="blue"></templatebutton>
    </form>
  </div>
</template>

<script>
import TemplateButton from '../components/TemplateButton';
//import TextInput from "../components/TextInput";

export default {
  name: 'CreateRecipeForm',
  components: {
    'templatebutton': TemplateButton,
   // 'text-input': TextInput
  },
  props: {},
  methods: {
    addIngredient() {
      const ingredientList = document.querySelector('#ingredients');
      let newIngredient = document.createElement('input');
      newIngredient.type = 'text';
      newIngredient.placeholder = 'Add an Ingredient';
      newIngredient.name = 'newIngredient';
      ingredientList.appendChild(newIngredient);
    },

    addStep() {
      const steps = document.querySelector('#steps');
      let newStep = document.createElement('input');
      newStep.type = 'text';
      newStep.placeholder = 'Add a Step';
      newIngredient.name = 'newStep';
      steps.appendChild(newStep);
    },
  },
  data() {
    return {

    }
  },
}
</script>

<style lang="stylus" scoped>
@import '../styles/variables'
.html-recipeForm
  width 600px
  background $green
  margin 10px
  padding 0 0 10px 10px
  border-radius 6px
  display flex
  flex-flow column wrap
  justify-content center
  align-items flex-start

.list-container, .steps 
  display grid
  grid-template-columns 35em
  grid-template-rows auto
  grid-gap 10px
  justify-items start

.title 
  align-self center
  color #blue
  font-size 30px

#newIngredient, #newStep 
  justify-self end

</style>

