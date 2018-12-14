<template>
  <nav class="footer" />
</template>

<script>
export default {
  name:'Footer',
  props: {}
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

  .footer
    background-color $grey
    grid-column 1 / 4
    grid-row 4 / 5
    height 250px

</style>

