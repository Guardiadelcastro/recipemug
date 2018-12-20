<template>
  <nav class="pricing">
    <div class="title">
      <p class="text">
        Pricing
      </p>
    </div>
  </nav>
</template>

<script>
export default {
  name:'Pricing',
  props: {}
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

  .pricing
    display grid
    grid-template-columns 40% 10% 10% 40%
    grid-template-rows 15% 85%

  .title
    grid-column 2 / 4
    grid-row 1 / 2

</style>
