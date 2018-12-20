<template>
  <div class="login">
    <div class="buttons">
      <BaseButton
        theme="login-button left"
        name="Log In"
        @click="changeLogIn"
      />
      <BaseButton
        theme="login-button right"
        name="Sign Up"
        @click="changeSignUp"
      />
    </div>
    <form class="form">
      <h3 class="title">
        {{ title }}
      </h3>
      <div
        v-if="active"
        class="log-in"
      >
        <label
          for="email"
        >
          Email
        </label>
        <input
          id="email"
          type="text"
    
          name="login"
          placeholder="Email"
          required
          :content="email"
        >
        <label
          for="password"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          required
        > 
      </div>
      <div
        v-else
        class="sign-up"
      >
        <label
          for="email"
        >
          Email
        </label>
        <input
          id="email"
          type="text"
    
          name="login"
          placeholder="Email"
          required
          :content="email"
        >
        <label
          for="password"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          required
        > 
        <label
          for="repeat-password"
        >
          Repeat Password
        </label>
        <input
          id="repeat-password"
          type="password"
          name="password"
          placeholder="Repeat password"
          required
        >
      </div>
      <BaseButton
        :name="title"
        theme="green"
        @click="logIn"
      />
    </form>
  </div>
</template>
<script>
import BaseButton from './BaseButton.vue';
import * as axios from 'axios';

export default {
  name: 'LogInSignUp',
  components:{
    BaseButton,
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
      
      //const user = axios.get('http://localhost:3000/users/email/'+email).then((user) => {return user;})
      
      axios
        .get('http://localhost:3000/users/email/' + email)
        .then((user) => {
          this.$store.commit('ADD_USER', user.data);
          this.$router.push({name:'dashboard'});
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
