<template>
  <nav class="about-us">
    <div class="lines" />
    <div class="title">
      About Us
    </div>
  </nav>
</template>

<script>
export default {
  name:'AboutUs',
  props: {}
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

  .about-us
    background-color $ligh-blue
    grid-column 1 / 2
    grid-row 3 / 4
    display flex
    justify-content center
    margin 10px

  .title
    font-family 'Nobile', 'Pacifico', 'Montserrat', sans-serif
    margin-top 20px
    font-size 30px

</style>

