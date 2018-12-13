<template>
  <RouterLink
    :class="theme"
    :to="to"
  >
    {{ name }}
  </RouterLink>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    name: {
      type: String,
      default: 'Link'
    },
    theme: {
      type: String,
      default: 'nav'
    },
    to: {
      type: String,
      default: '/#lost'
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'
  .nav
    font-family $font
    color $white
    padding 15px 20px
    text-decoration none
    font-size 1.15em
    font-weight bold
    height 25px
    &:hover
      background-color $dark-red

  .router-link-exact-active, .router-link-active
    background $white
    color $red
    &:hover
      background-color $white
</style>

