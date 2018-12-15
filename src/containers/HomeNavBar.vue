<template>
  <nav class="nav-bar">
    <BaseLogo />
    <RouterLink to="/dashboard">
      <BaseButton
        type="button"
        theme="orange"
        name="Go To Dashboard"
      />
    </RouterLink>
  </nav>
</template>
<script>
import BaseButton from '../components/BaseButton.vue';
import BaseLogo from '../components/BaseLogo.vue';

export default {
  name: 'NavBar',
  components: {
    BaseButton,
    BaseLogo
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

.nav-bar
  display flex
  flex-flow row nowrap
  aling-content center
  justify-content space-between

a
  text-decoration none

</style>

