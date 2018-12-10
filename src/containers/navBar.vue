<template>
  <nav class="nav-bar">
    <input class="search" type="text" placeholder="What would you like to cook today?">
    <create-button class="create-new" type="button" theme="green-filled" name="new">
      <font-awesome-icon icon="plus-square"/>
    </create-button>
    <div class="user">
      <font-awesome-icon icon="user"/>
    </div>
  </nav>
</template>
<script>
import TemplateButton from '../components/TemplateButton';

export default {
    components: {
        'create-button': TemplateButton
    }
}
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
  box-shadow 1px 2px 4px 0 rgba(0,0,0,.03)

.search
  grid-column 2 / 5
  width: 400px
  height: 25px
  border-radius: 5px
  border 2px solid #3f250b
  padding-left 10px
  outline none


.create-new 
  grid-column 9 / 10
  border-radius 2px


.user
  grid-column 10 / 11
  color $green
  font-size 25px

</style>

