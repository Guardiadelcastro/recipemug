<template>
  <button @click="handleClick" :class="theme">{{ name }}</button>
</template>

<script>
export default {
  name: 'template-button',
  props: {
    name: {
      type: String,
      default: 'button'
    },
    theme: {
      type: String,
      default: 'template'
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

button
  padding 5px 10px
  border 3px solid
  font-size 16px
  transition ease 0.3s
  cursor pointer
  font-weight bold
  border-radius 5px

.blue
  color $blue
  border-color $blue

  &:hover
    background-color darken($white, 10%)

  &:active
    background-color $blue
    color $white

.red
  color $red
  border-color $red

  &:hover
    background-color darken($white, 10%)

  &:active
    background-color $red
    color $white

.orange
  color $orange
  border-color $orange

  &:hover
    background-color darken($white, 10%)

  &:active
    background-color darken($white, 10%)
    color $white

.yellow
  color $yellow
  border-color $yellow

  &:hover
    background-color darken($white, 10%)

  &:active
    background-color $yellow
    color $white


.green
  color $white
  background-color $green
  border-color $white

  &:hover
    background-color darken($green, 10%)

  &:active
    background-color $white
    color $green

.template
  color $grey
  border-color $grey

  &:hover
    background-color darken($white, 10%)

  &:active
    background-color $grey
    color $white
</style>
