<template>
  <div class="list">
    <ul>
      <li
        v-for="recipe in recipes"
        :key="recipe.uuid"
      >
        <BaseButton
          theme="square blue"
          @click="goToRecipe(recipe.uuid)"
        >
          <i class="fas fa-directions" />
        </BaseButton>
        {{ recipe.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue';
import axios from 'axios';

export default {
  name: 'AllRecipes',
  components: {
    BaseButton
  },
  props: {

  },
  data() {
    return {
      recipes: []
    };
  },
  mounted() {
    const id = this.$store.state.user[0].uuid;
    axios
      .get('https://api.recipemug.club/recipes/'+ id)
      .then((recipes) => {
        this.$store.commit('ADD_RECIPES', recipes.data);
      });
    this.recipes = this.$store.state.recipes;
  },
  methods: {
    goToRecipe(id) {
      this.$store.commit('MAKE_ACTIVE', id);
      this.$router.push({name:'fullRecipe'});
    }
  }
};
</script>

<style lang="stylus" scoped>
  @import '../styles/variables'
  @import '../styles/mixins'

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
