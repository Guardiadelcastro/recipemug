<template>
  <div>
    <h1 class="cookbook">
      My Cookbook
    </h1>
    <div class="cards">
      <CategoriesCard
        v-for="category in getCategories"
        :key="category.id"
        :title="category.name"
        :img="category.img"
      />
    </div>
  </div>
</template>

<script>
// import {mapGetters} from 'vuex';
import CategoriesCard from '../containers/CategoriesCard.vue';

export default {
  name: 'Cookbook',
  components: {
    CategoriesCard
  },
  props:{
    title:{
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    }
  },
  computed: {
    getCategories(){
      return this.$store.state.categories;
    }
  }
};
</script>

<style lang="stylus" scoped>
  @import '../styles/variables'

  .cards
    display grid 
    grid-gap 20px
    grid-template-columns repeat(2, 1fr)
    grid-template-rows auto
    align-items center
    justify-content center

</style>
