<template>
  <div class="homepage">
    <Transition
      name="slide-fade"
    >
      <RouterView class="content" />
    </Transition>
  </div>
</template>

<script>

export default {
  name: 'Landing',
  components: {
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

  .homepage
    display grid
    grid-template-rows 1fr 7fr 1fr
    background $white
    height 100vh
    width 100%

  .nav
    grid-row 1/2

  .content
    grid-row 2/3
    //display flex
    //justify-content center
    //align-items center

  .footer
    grid-row 3/4
  
  .slide-fade-enter-active 
    transition all 0.5s ease

  .slide-fade-leave-active 
    transition all 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both

  .slide-fade-enter, .slide-fade-leave-to
    transform translateX(100px)
    opacity 0
    
</style>


