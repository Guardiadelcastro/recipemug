<template>
  <div class="container">
    <h1 class="title">
      Register
    </h1>
    <form class="register-form" method="POST">
      <div v-if="$v.email.$error" class="warning">
        <i class="fas fa-exclamation-circle" />
        <span v-if="!$v.email.required" class="warning-message">
          Email is required
        </span>
        <span v-if="!$v.email.email" class="warning-message">
          Please enter a valid email
        </span>
      </div>
      <BaseInput
        v-model.trim="email"
        type="text" label="Email"
        :class="{error: $v.email.$error}"
        @blur="$v.email.$touch()"
      />
      <div v-if="$v.password.$error" class="warning">
        <i class="fas fa-exclamation-circle" />
        <span v-if="!$v.password.required" class="warning-message">
          Password is required
        </span>
        <span v-if="!$v.password.minLength" class="warning-message">
          6 characters minimum
        </span>
      </div>
      <BaseInput
        v-model.trim="password" 
        type="password" label="Password"
        :class="{error: $v.password.$error}"
        @blur="$v.password.$touch()"
      />
      <div v-if="$v.repeatPassword.$error" class="warning">
        <i class="fas fa-exclamation-circle" />
        <span v-if="!$v.repeatPassword.required || !$v.repeatPassword.sameAsPassword" class="warning-message">
          Passwords do not match
        </span>
      </div>
      <BaseInput
        v-model.trim="repeatPassword"
        type="password" label="Repeat Password"
        :class="{error: $v.repeatPassword.$error}"
        @blur="$v.repeatPassword.$touch()"
      /> 
      <BaseButton
        :disabled="$v.$invalid" class="submit"
        theme="blue" @click.prevent="registerUser"
      > 
        Register
      </BaseButton>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import BaseButton from '../components/BaseButton.vue';
import BaseInput from '../components/BaseInput.vue';
import Notification from '../models/NotificationModel';

import { register } from '../services/UserServices';
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators';

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
      email: null,
      password: null,
      repeatPassword: null,
    };
  },
  validations: {
    email: {
      email,
      required
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      required,
      sameAsPassword: sameAs('password')
    }
  },
  methods: {
    ...mapActions('notifications', {
      addNotification: 'addNotification'
    }),
    async registerUser() {
      const response = await register(this.email, this.password);
      if (response === false) {
        const failureMessage = new Notification('Registration Failed', 'red');
        this.addNotification(failureMessage);
        return;
      }
      const successMessage = new Notification('Login Accepted','green');
      this.addNotification(successMessage);
      this.$router.push({name: 'Login'});
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

.fa-exclamation-circle, .warning-message
  color $red  

.submit
  align-self center

</style>