<template>
  <div class="container">
    <BaseNavBar class="navbar" />
    <SideBar class="sidebar" />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<script>
import BaseNavBar from '../containers/BaseNavBar.vue';
import SideBar from '../containers/SideBar.vue';

export default {
  name: 'Dashboard',
  components: {
    BaseNavBar,
    SideBar,
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

.container
  display grid 
  grid-template-rows 1fr 10fr
  grid-template-columns 200px 10fr
  width 100vw
  height 100vh
  background $white

.navbar
  grid-row 1 / 2 
  grid-column 2 / 3

.sidebar
  grid-row 1 / 3
  grid-column 1 / 2

.content
  grid-row 2 / 3
  grid-column 2 / 3
  justify-self center
  width 100%

</style>
