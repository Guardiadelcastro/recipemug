<template>
  <div>
    <div class="container">
      <h1 class="title">
        New Recipe
      </h1>
      <BaseInput v-model="recipe.title" label="Title" />
      <BaseTextArea v-model="recipe.description" label="Description" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import BaseInput from '../components/BaseInput.vue';
import BaseTextArea from '../components/BaseTextArea.vue';
export default {
  name: 'NewRecipe',
  components: {
    BaseInput,
    BaseTextArea
  },
  data() {
    return {
      recipe: {}
    };
  },
  computed: {
    ...mapGetters('recipe', {
      getActive: 'getActive',
    }),
    
  },
  created() {
    this.recipe = this.getActive;
  },
  methods: {
    ...mapActions('recipe', {
      
    }),
    createSlug() {
      let date = new Date;
      date = date.getTime();
      let title = this.title;
      title = title.replace(/\W+/g, '-').toLowerCase();
      const slug = `${date}-${title}`;
      this.slug = slug;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'
@import '../styles/mixins'

.container
  display flex
  flex-flow column nowrap
  justify-content flex-start
  align-items flex-start
  padding 20px

.title
  justify-self center
  border-bottom 2px dashed $green

</style>
