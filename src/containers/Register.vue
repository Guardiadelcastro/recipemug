<template>
  <form
    method="POST"
    class="register"
  >
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
      @click="register"
    > 
      Register
    </BaseButton>
  </form>
</template>

<script>
import BaseButton from '../components/BaseButton.vue';
import BaseInput from '../components/BaseInput.vue';
import * as UserService from '../services/UserService.js';

export default {
  name: 'Register',
  components: {
    BaseButton,
    BaseInput
  },
  props: {
    email: {
      type: String,
      default: ''
    },
    password: {
      type: String,
      default: ''
    }
  },
  methods: {
    register() {
      UserService.axiosRegister(this.email, this.password);
    }
  }
    
};
</script>

<style lang="stylus" scoped>

</style>