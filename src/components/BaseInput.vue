<template>
  <div class="input-container">
    <label v-if="label" :for="label">{{ label }}</label>
    <input 
      :name="label"
      :value="value"
      :class="{ active: inFocus }"
      v-bind="$attrs"
      v-on="listeners"
      @input="updateValue"
      @focus="inFocus = true"
      @blur="inFocus = false"
    >
  </div>
</template>

<script>

export default {
  name: 'BaseInput',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {
      inFocus: false
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      };
    },
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value);
    }
  }
};

</script>

<style lang="stylus" scoped>
@import '../styles/variables'
@import '../styles/mixins'

.input-container
  display flex
  flex-flow column nowrap

label 
  font-family $font
  font-weight bold
  margin 0 5px 5px 5px

input
  outline none
  font-size 1.15em
  box($grey)
  background #fff
  padding 10px 15px
  font-family $font
  color $dark
  transition all ease 0.1s
  &:disabled
    background transparent
    color $dark
    
input.active
  box($blue)

.error input
  box($red) 

</style>
