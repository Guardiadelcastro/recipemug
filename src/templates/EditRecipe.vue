<template>
  <div>
    <div class="container">
      <h1 class="title">
        New Recipe
      </h1>
      <BaseButton class="button" theme="orange">
        Save Recipe
      </basebutton>
      <h3> Title</h3>
      <BaseInput
        v-model="recipe.title"
      />
      <h3>Description</h3>
      <BaseTextArea v-model="recipe.description" />
      <h3> Ingredients</h3>
      <div class="add-ingredient">
        <BaseInput v-model="ingredientToAdd" @keyup.enter="addIngredient" />
        <BaseButton theme="blue" @click.prevent="addIngredient">
          Add
        </BaseButton>
      </div>
      <ul>
        <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
          <BaseButton
            theme="red square"
            @click="removeIngredient(index)"
          >
            <i class="far fa-trash-alt" />
          </BaseButton>
          {{ ingredient }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import BaseInput from '../components/BaseInput.vue';
import BaseButton from '../components/BaseButton.vue';
import BaseTextArea from '../components/BaseTextArea.vue';
export default {
  name: 'EditRecipe',
  components: {
    BaseInput,
    BaseTextArea,
    BaseButton
  },
  data() {
    return {
      recipe: {},
      ingredientToAdd: ''
    };
  },
  computed: {
    ...mapGetters('recipe', {
      getActive: 'getActive',
    }),
  },
  created() {
    this.recipe = this.getActive;
  },
  methods: {
    ...mapActions('recipe', {
      
    }),
    createSlug() {
      let date = new Date;
      date = date.getTime();
      let title = this.title;
      title = title.replace(/\W+/g, '-').toLowerCase();
      const slug = `${date}-${title}`;
      this.slug = slug;
    },
    addIngredient(){
      this.recipe.ingredients.push(this.ingredientToAdd);
      this.ingredientToAdd = '';
    },
    removeIngredient(index) {
      this.recipe.ingredients.splice(index, 1);
    },
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'
@import '../styles/mixins'

.container
  display flex
  flex-flow column nowrap
  justify-content flex-start
  align-items flex-start
  padding 20px

.title
  justify-self center
  border-bottom 2px dashed $green

.add-ingredient
  display grid
  grid-template-columns 2.5fr 1fr
  grid-gap 10px
  align-items center
  justify-content flex-start
  transition all ease 0.3s
ul
  list-style-type none
  & li
    width 100%
    display inline-flex
    justify-content flex-start
    align-items center
    padding 5px 10px
    color $dark
    text-align left
    font-size 1.25em
    & button
      margin-right 5px
      display inline-flex

.button
  margin 0 10px

</style>
