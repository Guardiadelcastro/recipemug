<template>
  <div class="edit">
    <nav class="buttons">
      <BaseButton class="button" theme="warning" @click="save">
        Save Recipe
      </BaseButton>
    </nav>
    <div class="recipe-container">
      <h1 class="title">
        {{ componentTitle }}
      </h1>
      
      <h3> Title</h3>
      <BaseInput
        v-model="recipe.title"
      />
      <h3>Description</h3>
      <BaseTextArea v-model="recipe.description" />
      <h3> Ingredients</h3>
      <div class="add">
        <BaseInput v-model="ingredientToAdd" @keyup.enter="addIngredient" />
        <BaseButton theme="info" @click.prevent="addIngredient">
          Add
        </BaseButton>
      </div>
      <div v-for="(ingredient, index) in recipe.ingredients" :key="index" class="ingredient">
        <BaseButton
          theme="danger square"
          @click="removeIngredient(index)"
        >
          <i class="far fa-trash-alt" />
        </BaseButton>
        <p>
          {{ ingredient }}
        </p>
      </div>
      <h3> Steps</h3>
      <div class="add">
        <BaseTextArea v-model="stepToAdd" @keyup.enter="addStep" />
        <BaseButton theme="info" @click.prevent="addStep">
          Add
        </BaseButton>
      </div>
      <div v-for="(step, index) in recipe.steps" :key="index" class="step">
        <BaseButton
          theme="danger square"
          @click="removeStep(index)"
        >
          <i class="far fa-trash-alt" />
        </BaseButton>
        <p>
          {{ step }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import BaseInput from '../components/BaseInput.vue';
import BaseButton from '../components/BaseButton.vue';
import BaseTextArea from '../components/BaseTextArea.vue';
import Notification from '../models/NotificationModel';

export default {
  name: 'EditRecipe',
  components: {
    BaseInput,
    BaseTextArea,
    BaseButton
  },
  data() {
    return {
      componentTitle: 'Edit the recipe',
      oldTitle: '',
      recipe: {},
      ingredientToAdd: '',
      stepToAdd: '',
    };
  },
  computed: {
    ...mapGetters('recipe', {
      getActive: 'getActive',
    })
  },
  created() {
    this.recipe = this.getActive;
    this.recipeTitle = this.getActive.title;
    if (this.recipe.slug == 'new') {
      this.componentTitle = 'New recipe';
    }
  },
  methods: {
    ...mapActions('recipe', {
      saveRecipe: 'saveRecipe',
      // delete: 'deleteRecipe'
    }),
    ...mapActions('notifications', {
      addNotification: 'addNotification'
    }),
    createSlug() {
      let date = new Date;
      date = date.getTime();
      let title = this.recipe.title;
      title = title.replace(/\W+/g, '-').toLowerCase();
      const slug = `${date}-${title}`;
      this.recipe.slug = slug;
    },
    addIngredient(){
      this.recipe.ingredients.push(this.ingredientToAdd);
      this.ingredientToAdd = '';
    },
    removeIngredient(index) {
      this.recipe.ingredients.splice(index, 1);
    },
    addStep(){
      this.recipe.steps.push(this.stepToAdd);
      this.stepToAdd = '';
    },
    removeStep(index) {
      this.recipe.steps.splice(index, 1);
    },
    async save() {
      if(this.recipe.slug === 'new' || this.oldTitle !== this.recipe.title) {
        this.createSlug();
      }
      const newRecipe = { ...this.recipe };
      await this.saveRecipe(newRecipe);
      const successMessage = new Notification('Recipe Saved','green');
      this.addNotification(successMessage);
      this.$router.push({name: 'Recipe', params: {slug: this.recipe.slug}});
    },
    // async deleteRecipe() {
    //   let decision = confirm('want to delete recipe?');
    //   if (decision) {
    //     await this.deleteRecipe(this.recipe);
    //     this.$router.push({name: 'Recipes'});
    //     const deletedMessage = new Notification('Recipe Deleted','red');
    //     this.addNotification(deletedMessage);
    //     return;
    //   }
    // }
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'
@import '../styles/mixins'

.edit
  width 100%
  height 100%
.recipe-container
  display flex
  flex-flow column nowrap
  justify-content flex-start
  align-items flex-start
  padding 20px

.title
  font-family $font-title
  font-size 3em
  margin 0 0 20px 0
  padding 10px
  color $dark
  border 3px dashed $dark
  border-radius $br
  justify-self center

.add
  display grid
  grid-template-columns 2.5fr 1fr
  grid-gap 10px
  align-items center
  justify-content flex-start
  transition all ease 0.3s

.step, .ingredient
  width 100%
  display grid 
  grid-template-columns 1fr 9fr
  grid-template-rows auto
  & button
    grid-column 1/2
    place-self center 
  & p
    grid-column 2/3
     

.buttons
  position sticky 
  top: 0
  opacity .95
  padding 10px
  display flex
  justify-content flex-start
  align-items center

.button
  margin-right 5px

</style>
