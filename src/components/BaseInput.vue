<template>
  <div class="input-container">
    <label
      v-if="label"
      :for="label"
    >{{ label }}</label>
    <input 
      :name="label"
      :value="value"
      v-bind="$attrs"
      v-on="listeners"
      @input="updateValue"
      @focus="inFocus = true"
      @blur="inFocus = false"
    >
    <span
      :class="inFocus ? 'focus' : ''"
    />
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
    },
    inFocus: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      };
    }
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

input
  outline none
  font-size 1.15em
  border 0
  padding 10px 15px
  border-radius-top()
  font-font-family $font

label 
  font-family $font
  font-weight bold
  margin 0 5px 5px 5px

.input-container
  display flex
  flex-flow column nowrap
  span 
    height 3px
    width 0
    right-gradient() 
    transition width ease 0.5s
  span.focus
    width 100%

.error span 
  width 100%
  background $red
</style>
