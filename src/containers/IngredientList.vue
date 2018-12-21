<template>
  <div
    class="ingredient-list"
    :class="activeEdit ? warning : no-border"
    @mouseenter="showButtons"
    @mouseleave="removeButtons"
  >
    <div class="content">
      <h3 class="ingredient-title">
        Ingredients
      </h3>
      <div class="list-container">
        <div
          v-show="activeEdit"
          class="input"
        >
          <BaseInput
            v-model="ingredient"
            placeholder="Add New Ingredient"
            @keyup.prevent="addIngredient(ingredient)"
          />
          <BaseButton
            theme="green square"
            show-icon
            icon="fas fa-plus"
            @click="addIngredient(ingredient)"
          />
        </div>
        <div
          class="list"
        >
          <ul>
            <li
              v-for="(data, index) in ingredients"
              :key="index"
            >
              <BaseButton
                v-show="activeEdit"
                show-icon
                icon="fas fa-minus-circle"
                theme="red square-small"
                @click="removeIngredient(index)"
              />
              {{ data }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="buttons">
      <BaseButton
        v-if="activeEdit"
        show-icon
        icon="fas fa-save"
        theme="circle red"
        @click="saveIngredients"
      />
      <BaseButton
        v-show="show"
        v-else
        show-icon
        icon="fas fa-edit"
        theme="circle blue"
        @click="startEdit"
      />
    </div>
  </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue';
import BaseInput from '../components/BaseInput.vue';

export default {
  name: 'IngredientList',
  components: {
    BaseButton,
    BaseInput
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    activeEdit: {
      type: Boolean,
      default: false
    },
    warning: {
      type: String,
      default: 'warning-border'
    }
  },
  data() {
    return {
      ingredient: '',
      ingredients: []
    };
  },
  mounted() {
    this.id = this.$store.state.activeRecipe;
    const recipe = this.$store.state.recipes.find((recipe) => {
      return recipe.uuid == this.id;
    });
    this.ingredients = recipe.ingredients;
  },
  methods: {
    showButtons() {
      this.show = true;
    },
    removeButtons() {
      this.show = false;
    },
    startEdit() {
      this.activeEdit = true;
    },
    addIngredient(value){
      this.ingredients.push(value);
      this.ingredient = '';
      this.value = '';
    },
    removeIngredient(index) {
      this.ingredients.splice(index, 1);
    },
    saveIngredients() {
      this.activeEdit = false;
      this.$store.commit('UPDATE_INGREDIENTS', this.ingredients);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'
@import '../styles/mixins'


.ingredient-list
  display grid
  grid-template-columns 8fr 1fr
  justify-content center
  width 100%
  font-family $font
  padding 5px
  border-radius $br
  
.warning-border
  border 2px dashed $red
  
.content
  grid-column 1/2
  display grid
  grid-template-rows 50px auto
  grid-gap 10px
  justify-content flex-start
  align-items center
  margin 25px 0  

.ingredient-title
  grid-row 1/2
  width 100%
  margin 0
  background-color #fff
  border-bottom 5px solid $blue
  padding 0 10px
  font-size 1.75em

.list-container
  grid-row 2/3
  display flex
  flex-flow column nowrap
  align-items flex-start
  justify-content flex-start

.input
  width 100%
  display flex
  flex-flow row nowrap 
  justify-content flex-start
  align-items center
  margin-bottom 10px
  & button, input
    margin-left 10px 

.list
  width 100%
  & ul
    margin 0 0 0 10px
    padding 0
    list-style-type none
    & li
      display inline-flex
      width 100%
      justify-content flex-start
      align-items center
      padding 5px 10px
      background-color $white
      border-left 5px solid $grey
      margin-bottom 2px
      color $grey
      text-align left
      & button
        margin-right 5px
        display inline-flex
      & span 
        margin-right 5px

.buttons
  grid-column 2/3
  display flex
  justify-content center
  align-items center


</style>

