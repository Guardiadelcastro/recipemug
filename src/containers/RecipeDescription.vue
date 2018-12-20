<template>
  <div 
    class="grid"
    @mouseenter="showButtons"
    @mouseleave="removeButtons"
  >
    <h3 class="title">
      Description
    </h3>
    <div class="content">
      <p
        v-if="edit"
        class="description"
      >
        {{ description }}
      </p>
      <BaseTextArea
        v-else
        v-model="description"
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
import BaseTextArea from '../components/BaseTextArea.vue';
import BaseButton from '../components/BaseButton.vue';

export default {
  name: 'RecipeDescription',
  components: {
    BaseTextArea,
    BaseButton
  },
  props: {
    description: {
      type: String,
      default: 'Recipe Description'
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
      this.$store.commit('ADD_DESCRIPTION', this.description);
    }
  }
};
</script>

<style lang="stylus" scoped>
  @import '../styles/variables'
  .grid
    display grid
    grid-template-columns 8fr 1fr
    grid-template-rows 1fr 4fr
    justify-content center
    align-items center
    width 100%
    font-family $font

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

  .buttons
    grid-column 2/3
    grid-row 2/3
    display flex
    justify-content center
    align-items center

</style>

