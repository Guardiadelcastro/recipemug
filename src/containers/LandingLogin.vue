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
    margin 10px 10px 10px 5px
  
  .login
    background-color $dark-red
    height 100%
    display flex
    align-items center
    justify-content center

  .title
    display flex
    justify-content center
  
</style>


