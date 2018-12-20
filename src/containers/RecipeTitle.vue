<template>
  <div
    class="container"
    @mouseenter="showButtons"
    @mouseleave="removeButtons"
  >
    <div class="content">
      <h1
        v-if="edit"
        class="title"
      >
        {{ title }}
      </h1>
      <BaseInput
        v-else
        v-model="title"
      />
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
import BaseInput from '../components/BaseInput.vue';
import BaseButton from '../components/BaseButton.vue';

export default {
  name: 'RecipeTitle',
  components: {
    BaseInput,
    BaseButton
  },
  props: {
    title: {
      type: String,
      default: 'My Recipe'
    },
    show: {
      type: Boolean,
      default: false
    },
    edit: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      id: {
        type: Number
      },
    };
  },
  computed: {
   
  },
  mounted() {
    this.id = this.$store.state.activeRecipe;
    const recipe = this.$store.state.recipes.find((recipe) => {
      return recipe.uuid == this.id;
    });
    this.title = recipe.title;
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
      this.$store.commit('UPDATE_TITLE', this.title);
    }
  }
};
</script>

<style lang="stylus" scoped>
  @import '../styles/variables'

  .container
    display grid
    grid-template-columns 8fr 1fr
    justify-content center
    width 100%
    font-family $font

  .content
    grid-column 1/2
    display flex
    justify-content center
    align-items center
    margin 25px 0  
  h1
    margin 0

  .buttons
    grid-column 2/3
    display flex
    justify-content center
    align-items center

  
  .title
    text-align center

</style>

