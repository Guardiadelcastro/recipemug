<template>
  <RouterLink
    :class="theme"
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
      type: [Object, String],
      default:'/lost'
    }
  },
  methods: {
    redirectIndex() {
      this.$router.push({name: 'Index'});
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'
  .nav
    box-sizing border-box
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

  .nav.router-link-exact-active
    background $light
    color $dark
    &:hover
      background-color $light-dark
  
  .no-decoration
    text-decoration none
    &:hover
      cursor pointer

  i
    padding-right 5px


</style>

