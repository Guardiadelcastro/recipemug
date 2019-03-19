<template>
  <div class="app">
    <Navigation />
    <Transition
      name="slide-fade"
    >
      <RouterView class="app-content" />
    </Transition>
  </div>
</template>


<script>
import Navigation from './templates/Navigation.vue';
export default {
  name: 'App',
  components: {
    Navigation
  }
};

</script>
<style lang="stylus">
@import './styles/variables'

body
  margin 0
  min-height 100vh

.app
  display grid
  grid-template-columns 200px auto

.nav-grid
  grid-column 1/2

.app-content
  grid-column 2/3

.slide-fade-enter-active 
    transition all 0.5s ease

.slide-fade-leave-active 
  transition all 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both

.slide-fade-enter, .slide-fade-leave-to
  transform translateX(100px)
  opacity 0
</style>
