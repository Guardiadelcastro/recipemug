<template>
  <div class="container">
    <Transition name="slide-fade">
      <RouterView />
    </Transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Dashboard',
  beforeMount() {
    this.fetch();
  },
  methods: {
    ...mapActions('recipe', {
      fetch: 'fetchRecipes'
    })
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'
@import '../styles/mixins'

.container
  box-sizing border-box
  width 100%
  height 100%
  background $background

.slide-fade-enter-active 
  transition all 0.5s ease

.slide-fade-leave-active 
  transition all 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both

.slide-fade-enter, .slide-fade-leave-to
  transform translateX(100px)
  opacity 0

</style>
