<template>
  <nav class="landing-login">
    <div class="login">
      <form class="form">
        <div class="title">
          Login or Register
        </div>
        <p>
          <label
            for="login"
          >
            Email
          </label>
          <input
            type="text"
            name="login"
            placeholder="Email"
            required
          >
        </p>
        <p>
          <label
            for="password"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          > 
        </p>
        <RouterLink to="/dashboard">
          <button type="submit">
            Login
          </button>
        </RouterLink>   
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'LandingLogin',
  props: {},
  methods: {
    login1: function () {
    
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

  .landing-login
    background-color $white
    grid-column 3 / 4
    grid-row 2 / 3
    margin 20px 10px 20px 5px
  
  .login
    background-color #fad6a5
    height 100%
    display flex
    align-items flex-start
    justify-content center

  .title
    color $white
    font-family 'Fira Sans' sans-serif
    display flex
    justify-content center
    font-size 2em
    margin-top 10px

  p
    display flex
    align-items center
    justify-content center

  input
    display flex
    justify-content center
  
</style>


