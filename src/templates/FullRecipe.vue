<template>
  <div class="full-recipe">
    <div class="buttons">
      <BaseButton
        v-if="editActive"
        name="Cook the new Recipe"
        theme="orange"
        @click="saveRecipe"
      />
      <BaseButton
        v-else
        theme="circle blue"
        show-icon
        icon="fas fa-edit"
        @click="editRecipe"
      />
      <BaseButton
        theme="circle grey"
        show-icon
        icon="fas fa-share-square"
        @click="shareRecipe"
      />
    </div>
    <div class="recipe">
      <RecipeTitle />
      <RecipeDescription />
      <IngredientList />
      <StepList />
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
    editActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    editRecipe() {
      this.editActive = true;
    },
    saveRecipe() {
      this.editActive = false;
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
  display flex
  align-items center
  justify-content center

.recipe
  grid-row 2/3
  overflow scroll
  border-radius 6px
  background #fff
  padding 10px

</style>

