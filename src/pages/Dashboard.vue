<template>
  <div class="container">
    <NavBar class="navbar" />
    <SideBar class="sidebar" />
    <div class="content">
      <CreateRecipeForm class="content" />
    </div>
  </div>
</template>

<script>
import NavBar from '../containers/NavBar.vue';
import SideBar from '../containers/SideBar.vue';
import CreateRecipeForm from '../templates/CreateRecipeForm.vue';

export default {
  name: 'Dashboard',
  components: {
    NavBar,
    SideBar,
    CreateRecipeForm
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

</style>
