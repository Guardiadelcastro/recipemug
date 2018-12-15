<template>
  <TemplateTextArea :placeholder="message" />
</template>

<script>
export default {
  name: 'BaseTextArea',
  props: {
    message: {
      type: String,
      default: 'Write here'
    }
  }
};

</script>

<style lang="stylus" scoped>
@import '../styles/variables'
textarea
  border 0 0 0 5px
  border-color $yellow
  outline none 
  &:active
    border 1px 1px 1px 5px

</style>
