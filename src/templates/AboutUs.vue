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
    background-color $white
    display flex
    justify-content center
    margin 5px 5px 10px 10px

    &:hover
      border:1px solid $black
      background-color $ligh-blue
      transition-duration 1s


  .title
    font-family  'Fira Sans','Nobile', 'Pacifico', 'Montserrat', sans-serif
    margin-top 20px
    font-size 30px
</style>

