<template>
  <div>
    <h1>Profile</h1>
    {{ user }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Profile',
  computed: {
    ...mapGetters('user', {
      user: 'getUser'
    })
  }
};
</script>

<style scoped>

</style>