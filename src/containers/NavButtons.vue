<template>
  <div> 
    <div
      v-if="!status"
      class="buttons"
    >
      <BaseButton @click="goToLogin">
        Login
      </BaseButton>
      <BaseButton @click="goToRegister">
        Register
      </BaseButton>
    </div>
    <div
      v-else
      class="buttons"
    >
      <BaseButton @click.prevent="logout">
        Log Out
      </BaseButton>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Notification from '../models/NotificationModel';
import BaseButton from '../components/BaseButton.vue';
export default {
  name: 'NavButtons',
  components: {
    BaseButton
  },
  computed: {
    ...mapState('user', {
      status: 'isLoggedIn'
    })
  },
  methods: {
    ...mapActions('user', {
      actionLogout: 'logOut'
    }),
    ...mapActions('notifications', {
      addNotification: 'addNotification'
    }),
    goToLogin() {
      this.$router.push({name: 'Login'});
    },
    goToRegister() {
      this.$router.push({name: 'Register'});
    },
    async logout() {
      await this.actionLogout();
      const logoutMessage = new Notification('Logged out','green');
      this.addNotification(logoutMessage);
      this.$router.push({ name: 'Index' });
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

.buttons
  display flex
  flex-flow row nowrap
  align-items center
  justify-content space-evenly
  height 100%
  width 100%
</style>
