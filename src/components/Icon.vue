<template>
  <i :class="icon" />
</template>

<script>
export default {
  name: 'Icon',
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

