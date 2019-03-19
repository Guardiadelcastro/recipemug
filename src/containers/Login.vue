<template>
  <div class="register-container">
    <h1>Log In</h1>
    <form method="POST">
      <BaseInput
        v-model="email"
        type="text"
        label="email"
        placeholder="Email"
        required
      />
      <BaseInput
        v-model="password"
        type="password"
        label="password"
        placeholder="******"
        required
      /> 
      <BaseButton
        theme="green"
        @click.prevent="login"
      > 
        Log In
      </BaseButton>
    </form>
    <div>{{ message }}</div>
    <div>status {{ status }}</div>
    <div> {{ user }}</div>
  </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue';
import BaseInput from '../components/BaseInput.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Login',
  components: {
    BaseButton,
    BaseInput
  },
  data() {
    return {
      email: '',
      password: '',
      message:''
    };
  },
  computed: {
    ...mapGetters('user',{
      status: 'getLogStatus',
      user: 'getUser'
    })
  },
  methods: {
    ...mapActions('user', {
      loginUser: 'login'
    }),
    async login() {
      const user = {
        email: this.email,
        password: this.password
      };
      await this.loginUser(user);
      if (this.status === true) {
        this.message = 'Auth successful';
        return;
      }
      this.message = 'Please try again';
    } 
  }
    
};
</script>

<style lang="stylus" scoped>

  .register-container
    display flex
    flex-flow column nowrap
    align-items center
    justify-content center

</style>