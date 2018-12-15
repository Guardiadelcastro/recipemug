<template>
  <div>
    <h2>sifnup</h2> 
    <form
      action="/signup"
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
        SignUp
      </button>
    </form>
  </div>     
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      submitted: false
    };
  },
  computed: {
    ...mapState('account', ['status'])
  },
  methods: {
    ...mapActions('account', ['register']),
    handleSubmit() {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          this.register(this.user);
        }
      });
    }
  }
};
</script>