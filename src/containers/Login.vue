<template>
  <div class="container">
    <div>
      <h1 class="title">
        Log In
      </h1>
    </div>
    <form
      class="login-form"
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
      <BaseButton
        class="submit"
        theme="green"
        @click.prevent="login"
      > 
        Log In
      </BaseButton>
    </form>
    <br>
    <br>
    <br>
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
@import '../styles/variables'
@import '../styles/mixins'

.container
  padding 20px
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
  margin 20px 0

.login-form
  display grid 
  grid-template-columns 1fr
  grid-template-rows auto 
  grid-gap 10px

.submit
  align-self center
</style>