<template>
  <div :class="theme">
    <img
      :src="img"
      :alt="title"
    >
    <h3>{{ title }}</h3>
  </div>
</template>

<script>

export default {
  name: 'CategoriesCard',
  props: {
    theme: {
      type: String,
      default: 'template'
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
    background $blue
    width 50px
    height 50px
  .default
    width 50px
    height 25px
    background $blue
</style>

