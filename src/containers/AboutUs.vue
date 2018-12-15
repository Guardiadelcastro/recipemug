<template>
  <nav class="about-us">
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
    background-color $green
    grid-column 1 / 2
    grid-row 3 / 4
    display flex
    justify-content center

  .title
    font-family 'Pacifico', 'Montserrat', sans-serif
    margin-top 10px
    font-size 30px

</style>

