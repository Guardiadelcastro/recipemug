<template>
  <div
    class="recipe-title"
    :class="activeEdit ? warning : step-list-border"
    @mouseenter="showButtons"
    @mouseleave="removeButtons"
  >
    <div class="content">
      <BaseInput
        v-if="activeEdit"
        v-model="title"
        @keyup.prevent
      />
      <h1
        v-else
        class="title"
      >
        {{ title }}
      </h1>
    </div>
    <div class="buttons">
      <BaseButton
        v-if="activeEdit"
        show-icon
        icon="fas fa-save"
        theme="circle red"
        @click="saveTitle"
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
import BaseInput from '../components/BaseInput.vue';
import BaseButton from '../components/BaseButton.vue';

export default {
  name: 'RecipeTitle',
  components: {
    BaseInput,
    BaseButton
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
      title: ''
    };
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
    startEdit() {
      this.activeEdit = true;
    },
    saveTitle() {
      this.activeEdit = false;
      this.$store.commit('UPDATE_TITLE', this.title);
    }
  }
};
</script>

<style lang="stylus" scoped>
  @import '../styles/variables'

  .recipe-title
    display grid
    grid-template-columns 8fr 1fr
    justify-content center
    width 100%
    font-family $font
    border-radius $br

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
    font-size 2.5em
    background-color #fff
    border-bottom 5px solid $blue
    padding 0 10px

  .no-border
    border 2px dashed transparent

  .warning-border
    border 2px dashed $red  
</style>

