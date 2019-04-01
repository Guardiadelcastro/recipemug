<template>
  <div class="area-container">
    <label v-if="label" :for="label">{{ label }}</label>
    <div class="text-area">
      <span
        :class="inFocus ? 'focus' : ''"
      />
      <textarea
        :name="label"
        :value="value"
        v-bind="$attrs"
        v-on="listeners"
        @input="updateValue"
        @focus="inFocus = true"
        @blur="inFocus = false"
      />
    </div>
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
  span 
    height 0
    width 5px
    right-gradient() 
    transition height ease 0.5s
  span.focus
    height 100%
.text-area
  display flex
  flex-flow row nowrap

textarea
  outline none
  resize none
  padding 10px
  width 600px
  height 150px
  border 0
  font-family $font
  font-size 1.15em

label 
  font-family $font
  font-weight bold
  margin 0 5px 5px 5px
  

.error
  border 1px solid $red
</style>
