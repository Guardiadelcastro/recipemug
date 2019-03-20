<template>
  <div class="index-container">
    <div class="content"> 
      <h1 class="title">
        The Recipe Mug Club
      </h1>
      <p class="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, nobis suscipit reprehenderit laudantium, recusandae blanditiis earum quasi eveniet voluptate quod sequi, accusantium voluptas? Eum at similique hic modi esse amet.
      </p>
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
.content
  padding 20px
  background $background
  display grid 
  grid-template-rows 1fr 3fr
  justify-items stretch
  align-items center
.title
  grid-row 1/2
  justify-self center
  font-family $font-title
  font-size 3em
  margin 0

.info
  grid-row 2/3
</style>