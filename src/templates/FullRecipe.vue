<template>
  <div class="full-recipe">
    <div class="buttons">
      <BaseButton
        name="Cook the new Recipe"
        theme="blue"
        icon="fas fa-search"
        show="true"
        @click="saveRecipe"
      />
    </div>
    <div class="recipe">
      <RecipeTitle />
      <RecipeDescription />
      <IngredientList />
      <StepList />
    </div>
    <div>{{ this.$store.state.recipes }}</div>
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
  beforeDestroy() {
    this.$store.commit('INITIALIZE_RECIPES');
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
  comp-size(95%, 95%)
  padding 10px
  display grid
  grid-template-rows 50px auto
  grid-gap 10px
  border-radius 6px
  background $white

.buttons
  grid-row 1/2

.recipe
  grid-row 2/3
  overflow scroll
  border-radius 6px
  background #fff

</style>

