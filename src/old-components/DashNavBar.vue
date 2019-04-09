<template>
  <nav class="nav-bar">
    <BaseButton
      class="create-new"
      type="button"
      theme="square blue"
      @click="createNew"
    >
      <i class="fas fa-plus-square" />
    </BaseButton>
  </nav>
</template>
<script>
import BaseButton from '../components/BaseButton.vue';

export default {
  name: 'DashNavBar',
  components: {
    BaseButton,
  },
  methods: {
    createNew() {
      this.$store.commit('NEW_RECIPE');
      this.$store.commit('MAKE_ACTIVE', 0);
      this.$router.push({name:'fullRecipe'});
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

.nav-bar
  display grid
  grid-template-columns repeat(10, 1fr)
  grid-column-gap 5px
  min-height 50px
  min-width auto
  align-items center
  justify-items center
  background $white
  box-shadow 1px 2px 4px 0 rgba(0, 0, 0, 0.03)

.search
  grid-column 2 / 5
  width 400px
  height 25px
  border 2px solid $white
  border-left 2px solid $orange
  padding 5px 10px
  outline none
  transition border ease 0.5s
  &:focus
    border 2px solid $orange

.create-new
  grid-column 9 / 10

.user
  cursor pointer
  grid-column 10 / 11
  color $blue
  font-size 25px
  &:hover
   color $dark-blue
</style>

