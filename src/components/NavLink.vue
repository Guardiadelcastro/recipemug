<template>
  <RouterLink
    :class="theme"
    class="nav"
    :to="to"
  >
    <slot />
  </RouterLink>
</template>

<script>

export default {
  name: 'NavLink',
  props: {
    theme: {
      type: String,
      default: 'nav'
    },
    to: {
      type: String,
      default: '/#lost'
    },
    icon: {
      type: String,
      default: ''
    },
    showIcon: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'
  .nav
    width 100%
    padding 10px
    text-align center
    font-family $font
    color $light
    text-decoration none
    font-size 1.25em
    font-weight bold
    min-height 25px
    transition all ease 0.5s
    &:hover
      background-color $light-dark

  .nav.router-link-exact-active, .nav.router-link-active
    background $light
    color $dark
    &:hover
      background-color $light-dark
  
  .home
    font-family $font
    color $white
    padding 15px 20px
    text-decoration none
    font-size 1em
    font-weight bold
    height 25px
    transition all ease 0.5s
    border 2px solid $red
    &:hover
      border-bottom 2px solid $white

  i
    padding-right 5px
</style>

