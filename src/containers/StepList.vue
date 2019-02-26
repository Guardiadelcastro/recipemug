<template>
  <div
    class="step-list"
    :class="activeEdit ? warning : no-border"
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
          @click="addStep(step)"
        >
          <i class="fas fa-plus" />
        </BaseButton>
      </div>
      <div
        class="list-steps"
      >
        <ul>
          <li
            v-for="(data, index) in steps"
            :key="index"
          >
            <BaseButton
              v-show="activeEdit"
              theme="red square-small"
              @click="removeStep(index)"
            >
              <i class="fas fa-minus-circle" />
            </BaseButton>
            <p>
              {{ index + 1 }}. 
            </p>
            <span /> 
            {{ data }}
          </li>
        </ul>
      </div>
    </div>
    <div
      class="buttons"
    >
      <BaseButton
        v-if="activeEdit"
        theme="circle red"
        @click="saveSteps"
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
import BaseButton from '../components/BaseButton.vue';
import BaseTextArea from '../components/BaseTextArea.vue';

export default {
  name: 'StepList',
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
    },
    warning: {
      type: String,
      default: 'warning-border'
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
  background-color #fff
  border-bottom 5px solid $blue
  padding 0 10px
  font-size 1.75em

.text-area
  grid-row 2/3
  width 100%
  display flex
  flex-flow row nowrap 
  justify-content flex-start
  align-items center
  & button, input
    margin-left 10px 
  & textarea 
    height 75px
    overflow scroll

.list-steps
  grid-row 3/4
  width 100%
  height auto
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
        text-align left
        display inline-flex
        margin-right 5px
      & span 
        font-family $font-title
        color $blue
        margin-right 5px

.buttons
  grid-column 2/3
  display flex
  justify-content center
  align-items center


</style>

