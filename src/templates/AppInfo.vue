<template>
  <nav class="App Info">
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

  .app-info
    width 100vw
    background-color $white
    display flex
    justify-content center
    margin 5px 10px 10px 5px

  .title
    font-family 'Fira Sans', 'Nobile', 'Pacifico', 'Montserrat', sans-serif
    margin-top 20px
    font-size 2em

</style>

