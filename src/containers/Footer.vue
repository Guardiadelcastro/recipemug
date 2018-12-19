<template>
  <nav class="footer">
    <div class="team">
      <p>RecipeMug has been designed by Alejandro Castro de la Guardia, Aythami Z. Martín González, Richard Morales Luis and Javier Pérez García. </p>
    </div>
  </nav>
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
    background-color $ligh-green
    grid-column 1 / 4
    grid-row 4 / 5
    display flex
    align-items flex-end
    justify-content center

  .team
    font-family $font
    margin-bottom 15px
    font-size 13px

</style>

