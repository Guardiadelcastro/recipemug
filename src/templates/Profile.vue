<template>
  <div class="profile">
    <h1 class="title">
      Profile
    </h1>
    <main class="info">
      <p>Username:</p>
      <p>{{ user.username }}</p>
      <p>Email:</p>
      <p>{{ user.email }}</p>
      <p>Recipes:</p>
      <p>{{ count }}</p>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Profile',
  computed: {
    ...mapGetters('user', {
      user: 'getUser'
    }),
    ...mapGetters('recipe', {
      count: 'getRecipeCount'
    })
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'
@import '../styles/mixins'

.profile
  box-sizing border-box
  height 100%
  width 100%
  padding 20px
  display flex
  flex-flow column
  align-items flex-start
  justify-content flex-start

.title
  justify-self center
  font-family $font-title
  font-size 4em
  right-gradient()
  color transparent
  background-clip text
  margin 20px 0
  padding 5px

.info
  display grid 
  grid-template-columns 1fr 1fr
  grid-template-rows auto
  grid-gap 10px
  color $dark
  font-size 1.5em
  text-align justify
  background $background
  
</style>