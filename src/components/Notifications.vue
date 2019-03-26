<template>
  <div class="notification-container">
    <div
      v-for="notification in notifications" :key="notification.id"
      :class="notification.color" class="notification"
    >
      <span>{{ notification.message }}</span>
      <button @click.prevent="removeItem(notification.index)">
        <i class="fas fa-times" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('notifications',{ 
      notifications: 'getNotifications' 
    })
  },
  methods: {
    removeItem(index) {
      this.notifications.splice(index, 1);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'
@import '../styles/mixins'

.notification-container
  position fixed
  top 0
  right 0
  margin 10px
  display flex
  flex-flow column nowrap

.notification
  display flex
  flex-flow row nowrap
  justify-content space-between
  align-items center
  padding 5px 10px
  width 175px
  height 35px
  border-radius $br
  color $white

button
  background transparent
  border none
  border-radius 50px
  margin 0
  padding 0
  height 20px
  width 20px
  transition all ease 0.05s
  color $white
  cursor pointer
  font-size 1em
  &:hover
    background $grey-transparent
.red
  background $red

.yellow
  background $yellow

.blue
  background $blue

.green
  background $green
</style>