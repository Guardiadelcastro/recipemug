<template>
  <div class="full-recipe">
    <div class="recipe">
      <form
        action="post"
        enctype="multipart/form-data"
      >
        <RecipeTitle />
        <RecipeDescription />
        <RecipeList />
        <RecipeList />
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
          @click="saveRecipe"
        />
      </form>
    </div>
  </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue';
import RecipeTitle from '../containers/RecipeTitle.vue';
import RecipeDescription from '../containers/RecipeDescription.vue';
import RecipeList from '../containers/RecipeList.vue';

export default {
  name: 'FullRecipe',
  components: {
    BaseButton,
    RecipeTitle,
    RecipeDescription,
    RecipeList
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
    },
    new: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  mounted() {
    
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
      this.$store.commit('SAVE_NEW_RECIPE');
    }
  }
};
</script>

<style lang="stylus" scoped>

@import '../styles/variables'

.full-recipe
  display grid
  width 90%
  max-height 90%
  background white
  border-radius 6px
  overflow scroll

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

