<template>
  <div>
    <div
      v-if="!status"
      class="home links"
    >
      <NavLink to="/pricing">
        Pricing
      </NavLink>
      <NavLink to="/about">
        About Us
      </NavLink>
    </div>
    <div
      v-else
      class="dashboard links"
    >
      <BaseButton
        type="button"
      >
        <i class="fas fa-plus-square" /> New Recipe
      </BaseButton>
      <NavLink :to="{name: 'Dashboard', params: { username: username }}">
        Home
      </NavLink>
      <NavLink :to="{ name: 'Profile' }">
        Profile
      </NavLink>
      <NavLink :to="{ name: 'Recipes' }">
        Recipes
      </NavLink> 
    </div>
  </div>
</template>

<script>
import NavLink from '../components/NavLink.vue';
import BaseButton from '../components/BaseButton.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'NavigationList',
  components: {
    NavLink,
    BaseButton
  },
  computed: {
    ...mapGetters('user', {
      status: 'getLogStatus',
      username: 'getUsername'
    })
  },

};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

button
  margin-bottom 10px
.links
  height 100%
  display flex
  flex-flow column nowrap
  align-items center
  justify-content flex-start
  
</style>