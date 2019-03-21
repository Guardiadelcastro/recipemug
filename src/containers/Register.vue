<template>
  <div class="container">
    <h1 class="title">
      Register
    </h1>
    <form
      class="register-form"
      method="POST"
    >
      <BaseInput
        v-model="email"
        type="text"
        label="Email"
        required
      />
      <BaseInput
        v-model="password"
        type="password"
        label="Password"
        required
      /> 
      <BaseInput
        id="repeat-password"
        type="password"
        label="Repeat Password"
        required
      /> 
      <BaseButton
        class="submit"
        theme="blue"
        @click.prevent="registerUser"
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
import { required } from 'vuelidate/lib/validators';

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
    async registerUser() {
      this.message = await register(this.email, this.password);
    } 
  }
    
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'
@import '../styles/mixins'

.container
  display flex
  flex-flow column nowrap
  align-items center
  justify-content flex-start
  background $background

.title
  justify-self center
  font-family $font-title
  font-size 3em
  padding-left 2px
  right-gradient()
  color transparent
  background-clip text
  margin 30px 0

.register-form
  display grid 
  grid-template-columns 1fr
  grid-template-rows auto 
  grid-gap 10px

.submit
  align-self center

</style>