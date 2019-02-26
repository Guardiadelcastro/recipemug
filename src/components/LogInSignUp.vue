<template>
  <div class="login">
    <div class="buttons">
      <BaseButton
        theme="login-button left"
        @click="changeLogIn"
      >
        Log In
      </BaseButton>
      <BaseButton
        theme="login-button right"
        @click="changeSignUp"
      >
        Sign Up
      </BaseButton>
    </div>
    <form class="form">
      <h3 class="title">
        {{ title }}
      </h3>
      <div
        v-if="active"
        class="log-in"
      >
        <BaseInput
          id="email"
          type="text"
          label="email"
          placeholder="Email"
          required
        />
        <BaseInput
          id="password"
          type="password"
          label="password"
          placeholder="Password"
          required
        />
        <BaseButton
          theme="green"
          @click="logIn"
        > 
          Log In
        </BaseButton>
      </div>
      <div
        v-else
        class="sign-up"
      >
        <BaseInput
          id="email"
          type="text"
          label="email"
          placeholder="Email"
          required
        />
        <BaseInput
          id="password"
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
        > 
          Register
        </BaseButton>
      </div>
    </form>
  </div>
</template>
<script>
import BaseButton from './BaseButton.vue';
import BaseInput from './BaseInput.vue';
import * as axios from 'axios';

export default {
  name: 'LogInSignUp',
  components:{
    BaseButton,
    BaseInput
  },
  props: {
    email: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      title: 'Log In'
    };
  },
  methods: {
    changeLogIn() {
      this.title = 'Log In';
      this.active = true;
    },
    changeSignUp() {
      this.title='Sign Up';
      this.active = false;
    },
    logIn() {
      const email = document.getElementById('email').value;
            
      axios
        .get('https://api.recipemug.club/users/email/' + email)
        .then((user) => {
          this.$store.commit('ADD_USER', user.data);
          this.$router.push({path:'/dashboard/home'});
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
    }
  }
}; 
</script>


<style lang="stylus" scoped>
@import '../styles/variables'
@import '../styles/mixins'

.login
  comp-size(400px, 300px)
  background-color $transparent
  border-radius $br
  font-family $font-title
  display grid
  grid-template-columns 1fr
  grid-template-rows 1fr 5fr

.buttons
  grid-row 1/2
  display flex
  flex-flow row nowrap 
  height 50px

.buttons button
  width 150px
  height 50px

.form
  display flex
  flex-flow column nowrap
  align-items center
  justify-content flex-start

.title
  margin 0
  color $blue
  font-size 26px

.log-in, .sign-up
  display flex
  flex-flow column nowrap 
  align-items flex-start
  justify-content flex-start
  font-family $font
  font-size 16px
  height 200px

label 
  margin-top 20px
  
.action 
  align-self center

</style>
