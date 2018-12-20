<template>
  <div
    class="ingredient-list"
    @mouseenter="showButtons"
    @mouseleave="removeButtons"
  >
    <div class="content">
      <h3 class="ingredient-title">
        Ingredients:
      </h3>
      <div
        v-if="edit"
        class="list"
      >
        <ol>
          <li
            v-for="(ingredient, index) in ingredients"
            :key="index"
          >
            {{ ingredient }}
          </li>
        </ol>
      </div>
      <div
        v-else
        class="inputs"
      >
        <BaseInput
          v-for="(ingredient, index) in ingredients"
          :key="index"
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
    edit: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      ingredients: []
    };
  },
  computed: {
    getIngredients() {
      return this.$store.getters.getIngredients();
    }
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
    editElement() {
      this.edit = false;
    },
    saveElement() {
      this.edit = true;
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

// .container
//   display grid
//   grid-template-columns 8fr 1fr
//   justify-content center
//   width 100%
//   font-family $font

.content
  grid-column 1/2
  display flex
  justify-content center
  align-items center
  margin 25px 0  


.buttons
  grid-column 2/3
  display flex
  justify-content center
  align-items center


</style>

