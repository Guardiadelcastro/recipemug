<template>
  <div class="container">
    <Login />
  </div>
</template>

<script>
import Login from '../components/Login.vue';

export default {
  name: 'SignUpIn',
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
@import '../styles/mixins'
  
  .container
    display flex 
    justify-content center
    align-items center
    background-image url('https://assets.recipemug.club/img/landing2.jpg')

  .login
    background $grey
    opacity 0.8
  
</style>


