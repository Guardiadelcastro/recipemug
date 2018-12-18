<template>
  <div>
    <h1 class="cookbook">
      My Cookbook
    </h1>
    <CategoriesCard
      v-for="category in getCategories"
      :key="category.id"
      :title="category.name"
    />
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
  
</style>
