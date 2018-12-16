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

.orange
  color $white
  background-color $orange
  border-color $white

  &:hover
    background-color $dark-orange

  &:active
    background-color $white
    color $orange

</style>