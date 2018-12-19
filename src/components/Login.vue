
<template>
  <div class="login">
    <form class="form">
      <h1>Login or Register</h1>
      <p>
        <label
          for="login"
        >
          Email
        </label>
        <input
          id="email"
          type="text"
          name="login"
          placeholder="Email"
          required
        >
      </p>
      <p>
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
      </p>

      <BaseButton
        name="Login"
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
  name: 'Login',
  components:{
    BaseButton
  },
  methods: {
    logIn() {
      const email = document.getElementById('email').value;
      
      //const user = axios.get('http://localhost:3000/users/email/'+email).then((user) => {return user;})
      
      axios
        .get('http://localhost:3000/users/email/' +email)
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
@import '../styles/variables';

.form
  background-color green
  width 300px
  margin 60px auto 30px
  padding 10px
  display flex
  align-items center
  justify-content center
  flex-flow column nowrap
  font-family $font-title

.form input 
  align-items center
  justify-content center
  flex-flow column nowrap
  font-family $font-title

.from button 
   align-items center
  justify-content center
  flex-flow column nowrap
  font-family $font-title
</style>


