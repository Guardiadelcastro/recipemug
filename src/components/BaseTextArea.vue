<template>
  <textarea
    v-model="content" 
    :class="theme"
    :placeholder="message"
    @input="handleInput"
    @keyup.prevent
  />
</template>

<script>
export default {
  name: 'BaseTextArea',
  props: {
    message: {
      type: String,
      default: 'Write here'
    },
    theme: {
      type: String,
      default: 'default'
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      content: this.value 
    };
  },
  methods: {
    handleInput() {
      this.$emit('input', this.content);
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
    height 200px
    border-radius $br
    font-family $font
    font-size 16px

  .default
    border 1px solid $blue

  .correct
    border 1px solid $green
  
  .error
    border 1px solid $red
</style>
