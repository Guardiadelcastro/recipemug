<template>
  <i :class="icon" />
</template>

<script>
export default {
  name: 'Icon',
  props: {
    icon: {
      type: String,
      default: 'fas fa-user'
    }
  }
};
</script>
<style lang="stylus" scoped>

</style>

