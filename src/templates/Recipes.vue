<template>
  <div class="recipes-container">
    <h1 class="title">
      My recipes
    </h1>
    <main class="list">
      <div
        v-for="recipe in recipes"
        :key="recipe.id"
        class="recipe"
      >
        <span class="recipe-title">{{ recipe.title }}</span>
        <section class="buttons">
          <BaseButton
            theme="square info"
            @click.prevent="goToRecipe(recipe)"
          >
            <i class="fas fa-directions" />
          </BaseButton>
          <BaseButton
            theme="square warning"
            @click.prevent="editRecipe(recipe)"
          >
            <i class="fas fa-edit" />
          </BaseButton>
          <BaseButton
            theme="square danger"
            @click.prevent="deleteRecipe(recipe)"
          >
            <i class="fas fa-trash-alt" />
          </BaseButton>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import BaseButton from '../components/BaseButton.vue';
import Notification from '../models/NotificationModel';

export default {
  name: 'Recipes',
  components: {
    BaseButton,
  },
  computed: {
    ...mapState('recipe', {
      recipes: state => state.recipes,
    })
  },
  methods: {
    ...mapActions('recipe', {
      setActive: 'addActiveRecipe',
      delete: 'deleteRecipe'
    }),
    ...mapActions('notifications', {
      addNotification: 'addNotification'
    }),
    goToRecipe(recipe) {
      this.setActive(recipe);
      this.$router.push({ name: 'Recipe', params: {slug: recipe.slug }});
    },
    editRecipe(recipe) {
      this.setActive(recipe);
      this.$router.push({ name: 'EditRecipe', params: {slug: recipe.slug }});
    },
    async deleteRecipe(recipe) {
      let decision = confirm('want to delete recipe?');
      if (decision) {
        await this.delete(recipe);
        const deletedMessage = new Notification('Recipe Deleted','red');
        this.addNotification(deletedMessage);
        return;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'
@import '../styles/mixins'

.recipes-container
  display grid 
  grid-template-columns 20px 1fr 20px
  grid-template-rows 200px 1fr
  justify-content flex-start
  align-items flex-start
  font-family $font

.title
  grid-column 2/3
  grid-row 1/2
  font-family $font-title
  font-size 3em
  margin 20px 0
  padding 10px
  color $dark
  border 3px dashed $dark
  border-radius $br
  justify-self left

.list
  grid-column 2/3
  grid-column 2/3
  display flex
  flex-flow column nowrap

.buttons
  display grid 
  grid-template-columns 1fr 1fr 1fr
  grid-gap 5px


.recipe
  display flex
  flex-flow row nowrap
  justify-content space-between
  align-items center
  padding 10px
  & span.recipe-title
    font-size 1.25em
  
</style>
