<template>
  <div class="area-container">
    <label v-if="label" :for="label">{{ label }}</label>
    <textarea
      :name="label"
      :class="{ active: inFocus }"
      :value="value"
      v-bind="$attrs"
      v-on="listeners"
      @input="updateValue"
      @focus="inFocus = true"
      @blur="inFocus = false"
    />
  </div>
</template>

<script>

export default {
  name: 'BaseTextArea',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
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

.area-container
  display flex
  flex-flow column nowrap
  

textarea
  box($grey)
  outline none
  resize none
  padding 10px
  width 600px
  height 150px
  font-family $font
  font-size 1.15em
  background #fff
  color $dark
  transition all ease 0.1s
  &:disabled
    background transparent
    color $dark

label 
  font-family $font
  font-weight bold
  margin 0 5px 5px 5px
  
textarea.active
  box($blue)

.error textarea
  box($red) 

</style>
