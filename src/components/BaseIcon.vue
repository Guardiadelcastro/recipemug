<template>
  <i :class="icon" />
</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    icon: {
      type: String,
      default: ''
    }
  }
};
</script>
<style lang="stylus" scoped>

</style>

