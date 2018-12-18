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
    <BaseButton
      v-show="show"
      v-if="edit"
      name="edit"
      theme="blue"
      @click="editElement"
    />
    <BaseButton
      v-else
      name="save"
      theme="red"
      @click="saveElement"
    />
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
    }
  }
};
</script>

<style lang="stylus" scoped>
  @import '../styles/variables'

  .container
    display grid
    grid-template-columns 8fr 2fr
    justify-content center
    width 100%
    font-family $font

  .content
    grid-column 1/2

  .buttons
    grid-column 2/3

  .title
    text-align center
</style>

