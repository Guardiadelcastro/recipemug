<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input 
      :value="value"
      :class="theme"
      v-bind="$attrs"
      v-on="listeners"
      @input="updateValue"
    >
  </div>
</template>

<script>

export default {
  name: 'BaseInput',
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: 'default'
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
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

input
  outline none
  font-size 16px
  padding 10px
  border-radius $br
  border 1px solid transparent
  background-color $white
  transition all ease 0.3s
  font-font-family $font
  
.default
  border 1px solid $blue

.correct
  border 1px solid $green

.error
  border 1px solid $red
</style>
