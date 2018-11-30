<template>
  <div class="html-recipeForm">
    <h1>Recipe Form</h1>
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
     <div class="ingredients">
        <label for="">Ingredients:</label>  <input type="text" name="newIngredient" placeholder="Introduce an Ingredient"> 
        <input value="+" id="newIngredient" name="ingredient" type="button" @click="addIngredient">
     </div>
     <br>
    <div class="steps">
       Steps: <input type="text" name="newStep" placeholder="Introduce a Step"> 
     <input value="+" id="newStep" type="button" @click="addStep">
    </div>
    <br>
    <div class="upladoImage">
      <input type="file" name="image" id="uploadImage" accept="image/*" >
    </div>
    <br>
    <button> Cook the new recipe </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HTMLRecipeForm',
  props: {},
  data() {
    return {

    }
  },
  methods: {
    addIngredient: function(){
      let ingredients = document.querySelector('.ingredients');
      let newIngredient = document.createElement('input');
      newIngredient.type = 'text';
      newIngredient.placeholder = 'Introduce an Ingredient';
      newIngredient.name = 'newIngredient';
      let button = document.querySelector('#newIngredient');
      let newButton = button;
      ingredients.removeChild(button);
      ingredients.appendChild(newIngredient);
      ingredients.appendChild(newButton);
    },
    addStep: function(){
      let steps = document.querySelector('.steps');
      let newStep = document.createElement('input');
      newStep.type = 'text';
      newStep.placeholder = 'Introduce a Step';
       newIngredient.name = 'newStep';
      let button = document.querySelector('#newStep');
      let newButton = button;
      steps.removeChild(button);
      steps.appendChild(newStep);
      steps.appendChild(newButton);
    },
  }
}
</script>

<style>
  .html-recipeForm {
    width: 600px;
    background: greenyellow;
    margin: 10px;
    padding: 0px 0px 10px 10px;
    border-radius: 6px;
  }

  .ingredients {
    display: grid;
    grid-template-columns: 35em;

  }

  .steps {
    display: grid;
    grid-template-columns: 35em;
  }
</style>
