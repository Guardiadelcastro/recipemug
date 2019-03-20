<template>
  <div class="index-container">
    <div class="index-content"> 
      <h1 class="title">
        The Recipe Mug Club
      </h1>
      <div class="wrap">
        <p class="info">
          The Recipe Mug Club is a web app made to store all your recipes. No need to go search in your notebooks, note apps, google drive, bookmarks and in your kitchen cabinets when you can have them all in one place.
        </p>
      </div>
      <h3 class="title">
        App characteristics
      </h3>
      <div class="table">
        <div class="item">
          Create recipes
        </div>
        <div class="item even">
          Organize your recipes
        </div>
        <div class="item">
          Create a shopping list
        </div>
        <div class="item even">
          Email or Print your recipes
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index'
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
  justify-content flex-start
  background $background

.title, .table-title
  justify-self center
  font-family $font-title
  font-size 3em
  margin 0
  right-gradient()
  color transparent
  background-clip text
  margin 20px 0
.table-title
  font-size 2em

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
.table
  display grid 
  grid-template-columns 1fr 1fr 1fr 1fr
  grid-template-rows auto
  grid-gap 5px
  .item
    display flex
    align-items center
    justify-content center
    padding 10px
    border-radius $br
  .even
    background $dark
    color $light
</style>