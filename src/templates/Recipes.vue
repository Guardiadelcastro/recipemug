<template>
  <div>
    <h1 class="title">
      My recipes
    </h1>
    <div class="list">
      <ul>
        <li
          v-for="recipe in recipes"
          :key="recipe.slug"
        >
          <BaseButton
            theme="square blue"
            disabled
          >
            <i class="fas fa-directions" />
          </BaseButton>
          {{ recipe.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import BaseButton from '../components/BaseButton.vue';

export default {
  name: 'Recipes',
  components: {
    BaseButton
  },
  computed: {
    ...mapState('recipe', {
      recipes: 'recipes'
    })
  },
  mounted() {
    this.fetchRecipes();
  },
  methods: {
    ...mapActions('recipe', {
      fetchRecipes: 'fetchRecipes'
    }),
    // goToRecipe(id) {
    //   this.$store.commit('MAKE_ACTIVE', id);
    //   this.$router.push({name:'fullRecipe'});
    // }
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'
@import '../styles/mixins'

  .title
    color $green
    border-bottom 2px dashed $green
  .list
    comp-size(95%, 95%)
    padding 10px
    display flex
    flex-flow column nowrap
    overflow scroll
    & ul
      margin 0 0 0 10px
      padding 10px
      list-style-type none
      & li
        display inline-flex
        width 100%
        justify-content flex-start
        align-items center
        padding 5px 10px
        background-color $white
        border-left 5px solid $grey
        margin-bottom 2px
        color $grey
        & p
          text-align left
          margin-right 5px
        & button
          text-align left
          display inline-flex
          margin-right 5px
        & span 
          font-family $font-title
          color $blue
          margin-right 5px
</style>
