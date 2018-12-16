<template>
  <div class="log-in">
    <h2>Login</h2>  
    <form
      action="/signin"
      method="POST"
    >
      <input
        type="email"
        name="email"
        placeholder="Email"
      >
      <input
        type="password"
        name="password"
        placeholder="Password"
      >
      <button type="submit">
        SignIn
      </button>
    </form>
  </div>
</template>

<style lang="stylus" scoped>

@import '../styles/variables';

.form
  background-color green
  width 300px
  margin 60px auto 30px
  padding 10px
  display flex
  align-items center
  justify-content center
  flex-flow column nowrap

  font-family $font-title
</style>
