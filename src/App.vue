<template>
  <div class="app">
    <NavigationBar />
    <Transition
      name="slide-fade"
    >
      <RouterView class="app-content" />
    </Transition>
  </div>
</template>


<script>
import NavigationBar from './templates/NavigationBar.vue';
export default {
  name: 'App',
  components: {
    NavigationBar
  }
};

</script>
<style lang="stylus">
@import './styles/variables'
@import './styles/mixins'

body
  margin 0
  min-height 100vh
  font-family $font

.app
  display grid
  grid-template-columns 200px auto

.nav-grid
  width 200px
  position fixed

.app-content
  grid-column 2/3
  min-height 100vh

.full-height
  height 100vh

.slide-fade-enter-active 
    transition all 0.5s ease

.slide-fade-leave-active 
  transition all 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both

.slide-fade-enter, .slide-fade-leave-to
  transform translateX(100px)
  opacity 0

.wrap
  right-gradient()
  padding 3px
.wrap-left
  down-gradient()
  padding-left 5px

</style>
