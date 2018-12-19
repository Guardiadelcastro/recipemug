<template>
  <div
    class="template"
    :class="theme"
  >
    <img
      :src="img"
      :alt="title"
    >
    <h3 class="category">
      {{ title }}
    </h3>
  </div>
</template>

<script>

export default {
  name: 'CategoriesCard',
  props: {
    theme: {
      type: String,
      default: 'grey'
    },
    img: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="stylus" scoped>
  @import '../styles/variables'
  img 
    width 175px
    height 150px
    border-radius $br $br 0 0

  .category
    font-family $font-title
    margin 0

  .template
    width 175px
    height 200px
    border-radius $br
    background $blue
    text-align center
    margin 0 20px
    color $white
    cursor pointer
    box-shadow 5px 5px 15px 1px rgba(0,0,0,0.3)

  .green
    background $green
  .blue
    background $blue
  .red
    background $red
  .orange
    background $orange
  .yellow
    background $yellow
  .grey
    background $grey
</style>

