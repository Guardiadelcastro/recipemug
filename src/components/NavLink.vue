<template>
  <RouterLink
    :class="theme"
    :to="to"
  >
    <BaseIcon
      v-if="showIcon"
      :icon="icon"
    />
    {{ name }}
  </RouterLink>
</template>

<script>
import BaseIcon from './BaseIcon.vue';

export default {
  name: 'NavLink',
  components: {
    BaseIcon
  },
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
    font-family $font
    color $white
    padding 15px 20px
    text-decoration none
    font-size 1em
    font-weight bold
    height 25px
    transition all ease 0.5s
    &:hover
      background-color $dark-red

  .nav.router-link-exact-active, .nav.router-link-active
    background $white
    color $red
    &:hover
      background-color $white
  
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

