<template>
  <div 
    class="recipe-description"
    :class="activeEdit ? warning : no-border"
    @mouseenter="showButtons"
    @mouseleave="removeButtons"
  >
    <div class="content">
      <BaseTextArea
        v-if="activeEdit"
        v-model="description"
      />
      <p
        v-else
        class="description"
      >
        {{ description }}
      </p>
    </div>
    <div class="buttons">
      <BaseButton
        v-if="activeEdit"
        theme="circle red"
        @click="saveDescription"
      >
        <i class="fas fa-save" />
      </BaseButton>
      <BaseButton
        v-show="show"
        v-else
        show-icon
        icon="fas fa-edit"
        theme="circle blue"
        @click="startEdit"
      >
        <i class="fas fa-edit" />
      </BaseButton>
    </div>
  </div>
</template>

<script>
import BaseTextArea from '../components/BaseTextArea.vue';
import BaseButton from '../components/BaseButton.vue';

export default {
  name: 'RecipeDescription',
  components: {
    BaseTextArea,
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
      description: ''
    };
  },
  mounted() {
    this.id = this.$store.state.activeRecipe;
    const recipe = this.$store.state.recipes.find((recipe) => {
      return recipe.uuid == this.id;
    });
    this.description = recipe.description;
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
    saveDescription() {
      this.activeEdit = false;
      this.$store.commit('UPDATE_DESCRIPTION', this.description);
    }
  }
};
</script>

<style lang="stylus" scoped>
  @import '../styles/variables'
  .recipe-description
    display grid
    grid-template-columns 8fr 1fr
    justify-content center
    align-items center
    width 100%
    font-family $font
    border-radius $br

  .warning-border
    border 2px dashed $red

  .title
    grid-column 1/3
    grid-row 1/2
    padding 10px 0 0 25px

  .content
    grid-column 1/2
    grid-row 2/3
    align-self flex-start
    display flex
    justify-content left
    align-items left 
    padding 10px 0 10px 25px
    
  .description
    align-self flex-start
    background-color #fff
    border-left 5px solid $blue
    padding 0 10px
    font-size 1.25em

  .buttons
    grid-column 2/3
    grid-row 2/3
    display flex
    justify-content center
    align-items center

</style>

