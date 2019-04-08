<template>
  <div class="home-container">
    <h1 class="title">
      Home
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'
@import '../styles/mixins'

.home-container
  display flex 
  flex-flow column nowrap
  justify-content flex-start
  align-items flex-start
  padding 20px
.title
  font-family $font-title
  font-size 3em
  margin 20px 0
  padding 10px
  color $dark
  border 3px dashed $dark
  border-radius $br
  justify-self center

</style>