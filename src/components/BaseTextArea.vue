<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <textarea 
      :value="value"
      :class="theme"
      v-bind="$attrs"
      v-on="listeners"
      @input="updateValue"
    /> 
  </div>
</template>

<script>

export default {
  name: 'BaseTextArea',
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

  textarea
    outline none
    resize none
    padding 10px
    width 600px
    height 150px
    border-radius $br
    font-family $font
    font-size 16px
    background $white

  .default
    border 1px solid $blue

  .correct
    border 1px solid $green
  
  .error
    border 1px solid $red
</style>
