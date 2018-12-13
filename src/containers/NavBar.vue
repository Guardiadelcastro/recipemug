<template>
  <nav class="nav-bar">
    <input
      class="search"
      type="text"
      placeholder="What would you like to cook today?"
    >
    <CreateButton
      class="create-new"
      type="button"
      theme="orange"
      name="new"
      icon="fas fa-search"
      show
    />
    <Icon
      name="far fa-calendar"
      has-icon
    />
  </nav>
</template>
<script>
import TemplateButton from '../components/TemplateButton.vue';
import Icon from '../components/Icon.vue';

export default {
  name: 'NavBar',
  components: {
    'CreateButton': TemplateButton,
    Icon
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
  border-radius 2px

.user
  cursor pointer
  grid-column 10 / 11
  color $orange
  font-size 25px
  &:hover
   color $dark-orange
</style>

