<template>
  <div>
    <div
      v-if="!status"
      class="home links"
    >
      <NavLink to="/">
        Home
      </NavLink>
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
        @click="createNew"
      >
        <i class="fas fa-plus-square" /> New Recipe
      </BaseButton>
      <NavLink :to="{ name: 'Home' }">
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
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  name: 'NavigationList',
  components: {
    NavLink,
    BaseButton
  },
  computed: {
    ...mapState('user', {
      status: state => state.isLoggedIn,
    }),
    ...mapState('recipe', {
      slug: state => state.activeRecipe.slug
    })
  },
  methods: {
    ...mapActions('recipe', {
      new: 'createNewRecipe'
    }),
    createNew() {
      this.new();
      this.$router.push({name: 'EditRecipe', params: { slug: this.slug }});
    }
  }

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

i 
  margin-right 5px
</style>