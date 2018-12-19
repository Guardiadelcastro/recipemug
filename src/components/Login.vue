
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
        <BaseInput
          type="email"
          name="login"
          placeholder="Email"
          required
          :content="email"
        />
      </p>
      <p>
        <label
          for="password"
        >
          Password
        </label>
        <input
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
import BaseInput from './BaseInput.vue';

export default {
  name: 'Login',
  components:{
    BaseButton,
    BaseInput
  },
  props: {
    email: {
      type: String,
      default: ''
    }
  },
  methods: {
    logIn() {
      this.$router.push({name:'dashboard'});
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


