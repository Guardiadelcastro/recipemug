<template>
  <div class="recipe">
    <nav class="buttons">
      <BaseButton class="button" theme="warning" @click="edit">
        Edit Recipe
      </BaseButton>
    </nav>
    <div class="recipe-container">
      <h1 class="title">
        {{ recipe.title }}
      </h1>
      <p class="description">
        {{ recipe.description }}
      </p>
      <h3>Ingredients</h3>
      <ul class="ingredients">
        <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
          {{ ingredient }}
        </li>
      </ul>
      <h3> Steps</h3>
      <ol class="steps">
        <li v-for="(step, index) in recipe.steps" :key="index">
          <p>
            {{ step }}
          </p>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import BaseButton from '../components/BaseButton.vue';

export default {
  name: 'Recipe',
  components: {
    BaseButton
  },
  data() {
    return {
      recipe: {}
    };
  },
  computed: {
    ...mapGetters('recipe', {
      getActive: 'getActive',
    })
  },
  created() {
    this.recipe = this.getActive;
  },
  methods: {
    edit() {
      this.$router.push({ name: 'EditRecipe', params: {slug: this.recipe.slug }});
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'
@import '../styles/mixins'

.recipe-container
  display flex
  flex-flow column nowrap
  justify-content flex-start
  align-items flex-start
  padding 20px
  font-family $font

.buttons
  position sticky 
  top: 0
  opacity .95
  padding 10px
  display flex
  justify-content flex-end
  align-items center

.title
  font-family $font-title
  font-size 3em
  margin 0 0 20px 0
  padding 10px
  color $dark
  border 3px dashed $dark
  border-radius $br

.description
  font-size 1.25em

h3 
  font-size 1.5em
  font-weight bold
  border-bottom 3px dashed $dark
.ingredients
  list-style-type square

li
  width 100%
  display inline-flex
  justify-content flex-start
  align-items center
  padding 5px 10px
  color $dark
  text-align left
  font-size 1.25em
    
</style>
