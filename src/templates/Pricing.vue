<template>
  <div class="index-container">
    <div class="index-content"> 
      <h1 class="title">
        It's Free!
      </h1>
      <div class="wrap">
        <p class="info">
          This app began as a learning project so the value we get from it is the work of making it. This is not to say that we are not aiming to create a version that can be sustainable but for now all the improvements won't have a pay wall. 
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pricing'
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'
@import '../styles/mixins'

.index-container
  max-width 100%
  right-gradient()
  padding 5px
  box-sizing border-box

.index-content
  box-sizing border-box
  min-height 100%
  padding 20px
  display flex
  flex-flow column
  align-items center
  justify-content center
  background $background

.title
  justify-self center
  font-family $font-title
  font-size 4em
  margin 0
  right-gradient()
  color transparent
  background-clip text
  margin 20px 0

.wrap
  right-gradient()
  padding: 3px;
  margin 30px

.info
  color $dark
  font-size 1.5em
  text-align justify
  background $background
  margin 0
  padding 20px
</style>