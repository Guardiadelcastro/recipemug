<template>
  <button
    :class="theme"
    @click="handClick"
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
  name: 'LandingButton',
  components: {
    Icon
  },
  props: {
    name: {
      type: String,
      default: 'info'
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
  text-align center
  justify-content center
  align-items center
  font-size 16px
  transition ease 0.3s
  cursor pointer
  font-weight bold
  padding 10px
  text-decoration none
  border: none

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

</style>