<template>
  <div class="register-container">
    <h1>Register</h1>
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
      <BaseInput
        id="repeat-password"
        type="password"
        label="Repeat Password"
        placeholder="*****"
        required
      /> 
      <BaseButton
        theme="green"
        @click.prevent="register"
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
import { register } from '../services/UserService';

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
    async register() {
      this.message = await register(this.email, this.password);
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