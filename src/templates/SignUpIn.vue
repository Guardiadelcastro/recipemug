<template>
  <div class="container">
    <LogInSignUp />
  </div>
</template>

<script>
import LogInSignUp from '../components/LogInSignUp.vue';

export default {
  name: 'SignUpIn',
  components: {
    LogInSignUp
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
  
</style>
