<template>
  <i :class="icon" />
</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    icon: {
      type: String,
      default: ''
    }
  }
};
</script>
<style lang="stylus" scoped>
  @import '../styles/variables'

  .red
    color $red

  .orange
    color $orange

  .blue
    color $blue

  .green
    color $green

  .yellow
    color $yellow

</style>

