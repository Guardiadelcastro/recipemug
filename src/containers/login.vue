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


<script>

</script>

