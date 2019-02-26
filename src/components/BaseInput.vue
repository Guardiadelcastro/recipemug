<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input 
      v-model="content" 
      :class="theme"
      v-bind="$attrs"
      :value="value"
      v-on="listeners"
      @input="updateValue"
    >
  </div>
</template>

<script>
import { formFieldMixin } from '../mixins/formFieldMixin';

export default {
  name: 'BaseInput',
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
