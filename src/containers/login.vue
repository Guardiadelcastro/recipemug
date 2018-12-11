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
import { mapState, mapActions } from 'vuex';
export default {
  name:'Login',
  data () {
    return {
      email: '',
      password: '',
      submitted: false
    };
  },
  computed: {
    ...mapState('account', ['status'])
  },
  created () {
    // reset login status
    this.logout();
  },
  methods: {
    ...mapActions('account', ['login', 'logout']),
    handleSubmit () {
      this.submitted = true;
      const { email, password } = this;
      if (email && password) {
        this.login({ email, password });
      }
    }
  }
};
</script>

