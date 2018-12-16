<template>
  <nav class="whats-the-app">
    <div class="title">
      What's the App
    </div>
  </nav>
</template>

<script>
export default {
  name:'WhatsTheApp',
  props: {}
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

  .whats-the-app
    background-color $yellow
    grid-column 2 / 4
    grid-row 3 / 4
    display flex
    justify-content center
    margin 10px

  .title
    font-family 'Nobile', 'Pacifico', 'Montserrat', sans-serif
    margin-top 20px
    font-size 2em

</style>

