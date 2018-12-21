<template>
  <button 
    :class="theme"
    @click.prevent="handleClick"
    @keyup.prevent
  >
    <Icon
      v-if="showIcon"
      :icon="icon"
    /> {{ name }} 
  </button>
</template>

<script>
import Icon from './BaseIcon.vue';

export default {
  name: 'BaseButton',
  components: {
    Icon
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'grey'
    },
    icon: {
      type: String,
      default: ''
    },
    showIcon: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'
@import '../styles/mixins'

button
  display flex
  flex-flow row nowrap
  justify-content center
  align-items center
  border 3px solid
  font-size 16px
  transition ease 0.3s
  cursor pointer
  font-weight bold
  border-radius 5px
  padding 10px

.square 
  square(35px)
  padding 0

.square-small 
  square(10px)
  padding 0

.circle
  square(45px)
  border-radius 50px
  padding 0

.blue
  color $white
  background-color $blue
  border-color transparent

  &:hover
    background-color $dark-blue

  &:active
    background-color $white
    color $blue

.red
  color $white
  background-color $red
  border-color transparent

  &:hover
    background-color $dark-red

  &:active
    background-color $white
    color $red

.orange
  color $white
  background-color $orange
  border-color transparent

  &:hover
    background-color $dark-orange

  &:active
    background-color $white
    color $orange

.yellow
  color $white
  background-color $yellow
  border-color transparent

  &:hover
    background-color $dark-yellow

  &:active
    background-color $white
    color $yellow

.green
  color $white
  background-color $green
  border-color transparent

  &:hover
    background-color $dark-green

  &:active
    background-color $white
    color $green

.grey
  color $white
  background-color $grey
  border-color transparent
    &:hover
      background-color $dark-grey
      border-color $dark-grey
    &:active
      background-color $white
      color $grey

.modern
color $white
background-color $dark-red

&:before
    background: #fff none repeat scroll 0 0
    content: ""
    height: 2px
    left: 0
    position: absolute 
    width: 0%
    transition: 0.5s

  &:hover:before
    background-color none
    width: 100%

.login-button
  background $transparent
  border none
  color $blue
  &:hover
    background-color darken($transparent, 30%)

.login-button.left
  border-radius $br 0 0 0

.login-button.right
  border-radius 0 $br 0 0

</style>
