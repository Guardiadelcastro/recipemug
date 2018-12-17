<template>
  <div class="full-recipe">
    <div class="recipe">
      <form
        action="post"
        enctype="multipart/form-data"
      >
        <RecipeTitle />
    
        <br>
        <div class="description">
          <label for>
            Description:
          </label>
          <br>
          <textarea
            id
            name="description"
            cols="40"
            rows="5"
          />
        </div>
        <br>
        <div class="list-container">
          <div id="ingredients">
            <label for>
              Ingredients:
            </label>
            <input
              type="text"
              name="newIngredient"
              placeholder="Add an Ingredient"
            >
          </div>
          <BaseButton
            id="newIngredient"
            type="button"
            theme="red square"
            name="+"
            @click="addIngredient"
          />
        </div>
        <br>
        <div class="list-container">
          <div id="steps">
            <label for>
              Steps:
            </label>
            <BaseInput
              theme="blue"
              message="Add a Step"
            />
          </div>
          <BaseButton
            id="newStep"
            type="button"
            theme="orange"
            name="+"
            @click="addStep"
          />
        </div>
        <br>
        <div class="upladoImage">
          <input
            id="uploadImage"
            type="file"
            name="image"
            accept="image/*"
          >
        </div>
        <br>
        <BaseButton
          name="Cook the new Recipe"
          theme="blue"
          icon="fas fa-search"
          show="true"
        />
      </form>
    </div>
  </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue';
import BaseInput from '../components/BaseInput.vue';
import RecipeTitle from '../containers/RecipeTitle.vue';

export default {
  name: 'FullRecipe',
  components: {
    BaseButton,
    BaseInput,
    RecipeTitle
  },
  props: {
    edit: {
      type: Boolean,
      default: false
    },
    toggleButton: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
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
      newStep.name = 'newStep';
      steps.appendChild(newStep);
    },

    editRecipe() {
      this.edit = !this.edit;
      this.toggleButton = !this.toggleButton;
      this.disabled = !this.disabled;
    },

    saveRecipe() {
      // Handle save
      this.edit = !this.edit;
      this.toggleButton =!this.toggleButton;
      this.disabled = !this.disabled;
    }
  }
};
</script>

<style lang="stylus" scoped>

@import '../styles/variables'

.full-recipe
  display grid
  width 90%
  background white
  margin 10px
  padding 0 0 10px 10px
  border-radius 6px
  
.list-container, .steps
  display grid
  grid-template-columns 35em
  grid-template-rows auto
  grid-gap 10px
  justify-items start

.title
  align-self center
  color $blue
  font-size 30px

</style>

