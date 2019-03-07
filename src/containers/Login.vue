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
        Register
      </BaseButton>
    </form>
    <div>{{ message }}</div>
  </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue';
import BaseInput from '../components/BaseInput.vue';
import { userLogin } from '../services/UserService';

export default {
  name: 'Register',
  components: {
    BaseButton,
    BaseInput
  },
  props: {
  },
  data() {
    return {
      email: '',
      password: '',
      message: ''
    };
  },
  methods: {
    async login() {
      let response = await userLogin(this.email, this.password);
      this.message = response.data;
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