<template>
  <div
    class="container"
    @mouseenter="showButtons"
    @mouseleave="removeButtons"
  >
    <div class="content">
      <div class="list-container">
        <div id="ingredients">
          <label for>
            Ingredients:
          </label>
          <BaseInput
            v-for="(ingredient, index) in ingredients"
            :key="index"
            v-model="content"
          />
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
    </div>
    <div class="buttons">
      <BaseButton
        v-show="show"
        v-if="edit"
        show-icon
        icon="fas fa-edit"
        theme="circle blue"
        @click="editElement"
      />
      <BaseButton
        v-else
        show-icon
        icon="fas fa-save"
        theme="circle red"
        @click="saveElement"
      />
    </div>
  </div>
</template>

<script>
import BaseButton from '../components/BaseInput.vue';
import BaseInput from '../components/BaseInput.vue';

export default {
  name: 'RecipeList',
  components: {
    BaseButton,
    BaseInput
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    edit: {
      type: Boolean,
      default: true
    },
  },
  computed: {
    getIngredients() {
      return this.$store.state.newRecipe.ingredients;
    },
    getSteps() {
      return this.$store.state.newRecipe.steps;
    },
  },
  methods: {
    showButtons() {
      this.show = true;
    },
    removeButtons() {
      this.show = false;
    },
    editElement() {
      this.edit = false;
    },
    saveElement() {
      this.edit = true;
      this.$store.commit('ADD_TITLE', this.title);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'
@import '../styles/mixins'


.list-container
  display grid
  grid-template-columns 35em
  grid-template-rows auto
  grid-gap 10px
  justify-items start

</style>

