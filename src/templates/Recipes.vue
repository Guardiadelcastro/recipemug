<template>
  <div class="recipes-grid">
    <div class="recipes">
      <h1 class="title">
        My recipes
      </h1>
      <main class="list">
        <div
          v-for="recipe in recipes"
          :key="recipe.slug"
          class="recipe"
        >
          <BaseButton
            theme="square blue"
            @click.prevent=""
          >
            <i class="fas fa-directions" />
          </BaseButton>
          <span class="recipe-title">{{ recipe.title }}</span>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import BaseButton from '../components/BaseButton.vue';

export default {
  name: 'Recipes',
  components: {
    BaseButton
  },
  computed: {
    ...mapGetters('recipe', {
      recipes: 'getRecipes'
    })
  },
  mounted() {
    // this.fetchRecipes();
  },
  methods: {
    // ...mapActions('recipe', {
    //   fetchRecipes: 'fetchRecipes'
    // }),
    // goToRecipe(id) {
    //   this.$store.commit('MAKE_ACTIVE', id);
    //   this.$router.push({name:'fullRecipe'});
    // }
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'
@import '../styles/mixins'

.recipes-grid
  display grid 
  grid-template-columns 1fr 8fr 1fr
  justify-items left

.title
  font-family $font-title
  font-size 3em
  margin 20px 0
  padding 10px
  color $dark
  border 3px dashed $dark
  border-radius $br
  justify-self center

.recipes
  grid-column 2/3
  font-family $font

.list
  display flex
  flex-flow column nowrap

.recipe
  display flex
  flex-flow row nowrap
  justify-content flex-start
  align-items center
  padding 10px
  & button
    margin-right 5px
  & span.recipe-title
    font-size 1.25em
  
</style>
