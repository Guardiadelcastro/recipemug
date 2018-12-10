<template>
  <div class="container">
    <nav-bar class="navbar"></nav-bar>
    <side-bar class="sidebar"></side-bar>
    <div class="content">
      <recipe-form class="content"></recipe-form>
    </div>
  </div>
</template>

<script>
import navBar from '../containers/NavBar.vue'
import SideBar from '../containers/SideBar.vue'
import CreateRecipeForm from '../containers/CreateRecipeForm.vue'

export default {
  name: 'dashboard',
  components: {
    'nav-bar': NavBar,
    'side-bar': SideBar,
    'recipe-form': CreateRecipeForm
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

.container
  display grid 
  grid-template-rows 1fr 10fr
  grid-template-columns 2fr 8fr

.navbar
  grid-row 1 / 2 
  grid-column 2 / 3

.sidebar
  grid-row 1 / 3
  grid-column 1 / 2

.content
  grid-row 2 / 3
  grid-column 2 / 3

</style>
