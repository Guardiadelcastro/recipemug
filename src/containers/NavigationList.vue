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
      <NavLink to="/dashboard/Profile">
        <i class="fab fa-phoenix-squadron" /> Profile
      </NavLink>
      <NavLink to="/dashboard/home">
        <i class="fas fa-home" />My Recipes
      </NavLink> 
    </div>
  </div>
</template>

<script>
import NavLink from '../components/NavLink.vue';
import BaseButton from '../components/BaseButton.vue';
import { mapState } from 'vuex';

export default {
  name: 'NavigationList',
  components: {
    NavLink,
    BaseButton
  },
  computed: {
    ...mapState('user', {
      status: 'isLoggedIn'
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