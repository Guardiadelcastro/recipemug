<template>
  <button 
    :class="theme"
    @click="handleClick"
  >
    <Icon
      v-show="show"
      :icon="icon"
    /> {{ name }} 
  </button>
</template>

<script>
import Icon from './Icon.vue';

export default {
  name: 'TemplateButton',
  components: {
    Icon
  },
  props: {
    name: {
      type: String,
      default: 'button'
    },
    theme: {
      type: String,
      default: 'grey'
    },
    icon: {
      type: String,
      default: ''
    },
    show: {
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

button
  padding 5px 10px
  border 3px solid
  font-size 16px
  transition ease 0.3s
  cursor pointer
  font-weight bold
  border-radius 5px

.blue
  color $white
  background-color $blue
  border-color $white

  &:hover
    background-color $dark-blue

  &:active
    background-color $white
    color $blue

.red
  color $white
  background-color $red
  border-color $white

  &:hover
    background-color $dark-red

  &:active
    background-color $white
    color $red

.orange
  color $white
  background-color $orange
  border-color $white

  &:hover
    background-color $orange

  &:active
    background-color $white
    color $orange

.yellow
  color $white
  background-color $yellow
  border-color $white

  &:hover
    background-color $dark-yellow

  &:active
    background-color $white
    color $yellow

.green
  color $white
  background-color $green
  border-color $white

  &:hover
    background-color darken($green, 10%)

  &:active
    background-color $white
    color $green

.grey
  color $white
    background-color $grey
    border-color $white

    &:hover
      background-color $dark-grey

    &:active
      background-color $white
      color $grey
</style>
