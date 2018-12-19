<template>
  <div class="container">
    <div class="image">
      <img
        src="https://assets.recipemug.club/img/landing.jpg"
        alt="person cooking"
      >
    </div>
    <Login />
  </div>
</template>

<script>
import Login from '../components/Login.vue';

export default {
  name: 'LandingLogin',
  components: {
    Login
  },
  props: {},
  methods: {
    
  }
};

</script>

<style lang="stylus" scoped>
@import '../styles/variables'
  .container
    display grid 
    grid-template-columns 50vw 50vw

  .image
    grid-column 1/2
    background $blue

  .login
    grid-column 2/3
  
</style>


