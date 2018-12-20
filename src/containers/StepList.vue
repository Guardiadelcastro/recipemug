<template>
  <div
    class="step-list"
    :class="activeEdit ? warning-border : no-border"
    @mouseenter="showButtons"
    @mouseleave="removeButtons"
  >
    <div class="content">
      <h3 class="step-title">
        Preparation
      </h3>
      <div
        v-show="activeEdit"
        class="text-area"
      >
        <BaseTextArea
          v-model="step"
          placeholder="Add new preparation"
          @keyup.prevent="addStep(step)"
        />
        <BaseButton
          theme="green square"
          show-icon
          icon="fas fa-plus"
          @click="addStep(step)"
        />
      </div>
      <div
        class="list"
      >
        <ul>
          <li
            v-for="(data, index) in steps"
            :key="index"
          >
            <BaseButton
              v-show="activeEdit"
              show-icon
              icon="fas fa-minus-circle"
              theme="red square-small"
              @click="removeStep(index)"
            />
            <p>
              {{ index + 1 }}. 
            </p>
            <span /> 
            <p class="paragraph">
              {{ data }}
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="buttons"
    >
      <BaseButton
        v-if="activeEdit"
        show-icon
        icon="fas fa-save"
        theme="circle red"
        @click="saveSteps"
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
import BaseTextArea from '../components/BaseTextArea.vue';

export default {
  name: 'IngredientList',
  components: {
    BaseButton,
    BaseTextArea
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    activeEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      step: '',
      steps: []
    };
  },
  mounted() {
    this.id = this.$store.state.activeRecipe;
    const recipe = this.$store.state.recipes.find((recipe) => {
      return recipe.uuid == this.id;
    });
    this.steps = recipe.steps;
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
    addStep(value){
      this.steps.push(value);
      this.step = '';
    },
    removeStep(index) {
      this.steps.splice(index, 1);
    },
    saveSteps() {
      this.activeEdit = false;
      this.$store.commit('UPDATE_STEPS', this.steps);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'
@import '../styles/mixins'


.step-list
  display grid
  grid-template-columns 8fr 1fr
  justify-content center
  width 100%
  font-family $font
  padding 5px
  border-radius $br

.no-border
  border 2px dashed transparent

.warning-border
  border 2px dashed $red

.content
  grid-column 1/2
  display grid
  grid-template-rows 50px auto auto
  grid-gap 10px
  justify-content flex-start
  align-items center
  margin 25px 0  

.step-title
  grid-row 1/2
  width 100%
  margin 0
  font-family $font-title
  color $blue

.text-area
  grid-row 2/3
  width 100%
  display flex
  flex-flow row nowrap 
  justify-content flex-start
  align-items center
  & button, input
    margin-left 10px 

.list
  grid-row 3/4
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
      border-left 5px solid $blue
      margin-bottom 2px
      color #3E5252
      & p, span, button
        text-align left
        margin-right 5px
      & button
        display inline-flex

.buttons
  grid-column 2/3
  display flex
  justify-content center
  align-items center


</style>

