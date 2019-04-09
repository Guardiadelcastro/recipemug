<template>
  <div class="container">
    <h1 class="title">
      Log In
    </h1>
    <form class="login-form" method="POST">
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
        <span v-if="!$v.password.required" class="warning-message"> Password is required </span>
      </div>
      <BaseInput
        v-model.trim="password"
        type="password" label="Password"
        :class="{error: $v.password.$error}"
        @blur="$v.password.$touch()"
      /> 
      <BaseButton
        :disabled="$v.$invalid" class="submit"
        theme="success" @click.prevent="loginUser"
      > 
        Log In
      </BaseButton>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { required, email } from 'vuelidate/lib/validators';
import { login } from '../services/UserServices';

import BaseButton from '../components/BaseButton.vue';
import BaseInput from '../components/BaseInput.vue';
import Notification from '../models/NotificationModel';

export default {
  name: 'Login',
  components: {
    BaseButton,
    BaseInput
  },
  data() {
    return {
      email: null,
      password: null,
      message: null
    };
  },
  validations: {
    email: {
      email,
      required
    },
    password: {
      required,
    }
  },
  computed: {
    ...mapGetters('user', {
      user: 'getUsername'
    })
  },
  methods: {
    ...mapActions('notifications', {
      addNotification: 'addNotification'
    }),
    async loginUser() {
      const response = await login(this.email, this.password);
      if (response === false) {
        const failureMessage = new Notification('Login Failed', 'red');
        this.addNotification(failureMessage);
        return;
      }
      const successMessage = new Notification('Login Accepted','green');
      this.addNotification(successMessage);
      this.$router.push({ name: 'Home', params: { username: this.user } });
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

.login-form
  display grid 
  grid-template-columns 1fr
  grid-template-rows auto 
  grid-gap 10px
  justify-items center

.fa-exclamation-circle, .warning-message
  color $red

.submit
  align-self center
</style>