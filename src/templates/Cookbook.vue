<template>
  <div class="cookbook">
    <h1 class="title">
      My Cookbook
    </h1>
    <div class="cards">
      <CategoriesCard
        v-for="category in getCategories"
        :key="category.id"
        :title="category.name"
        :img="category.img"
        theme="blue"
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

  .cookbook
    width 90%
    height 90vh
    max-height 90vh
    display grid
    grid-template-rows 1fr 9fr
    grid-template-columns 1fr
    overflow scroll

  .title
    grid-row 1/2
    text-align center
    font-family $font-title
    margin 0
    color $blue

  .cards
    grid-row 2/3
    display flex 
    flex-flow row wrap
    align-items center
    justify-content center

</style>
