<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <textarea 
      :value="value"
      :class="theme"
      v-bind="$attrs"
      v-on="listeners"
      @input="updateValue"
      @keyup.prevent="updateValue"
    /> 
  </div>
</template>

<script>
import { formFieldMixin } from '../mixins/formFieldMixin';

export default {
  name: 'BaseTextArea',
  mixins: [formFieldMixin],
  props: {
    theme: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      };
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
