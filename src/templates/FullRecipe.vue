<template>
  <div class="full-recipe">
    <div class="recipe">
      <form
        action="post"
        enctype="multipart/form-data"
      >
        <RecipeTitle />
        <RecipeDescription />
        <IngredientList />
        <StepList />
        <div class="upladoImage">
          <input
            id="uploadImage"
            type="file"
            name="image"
            accept="image/*"
          >
        </div>
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
import IngredientList from '../containers/IngredientList.vue';
import StepList from '../containers/StepList.vue';

export default {
  name: 'FullRecipe',
  components: {
    BaseButton,
    RecipeTitle,
    RecipeDescription,
    IngredientList,
    StepList
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
@import '../styles/mixins'

.full-recipe
  comp-size(90%, 90%)
  padding 15px
  display grid
  background #fff
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

