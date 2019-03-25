<template>
  <div class="container">
    <Transition name="slide-fade">
      <RouterView />
    </Transition>
  </div>
</template>

<script>
import * as axios from 'axios';

export default {
  name: 'Dashboard',
  mounted() {
    const id = this.$store.state.user[0].uuid;
    axios
      .get('https://api.recipemug.club/recipes/'+ id)
      .then((recipes) => {
        this.$store.commit('ADD_RECIPES', recipes.data);
      });
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'
@import '../styles/mixins'

.container
  display grid 
  grid-template-rows 1fr 10fr
  grid-template-columns 200px 10fr
  width 100vw
  height 100vh
  max-height 100vh
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
  comp-size(100%, 100%)
  overflow hidden
  display flex
  justify-content center
  align-items center

.slide-fade-enter-active 
  transition all 0.5s ease

.slide-fade-leave-active 
  transition all 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both

.slide-fade-enter, .slide-fade-leave-to
  transform translateX(100px)
  opacity 0

</style>
