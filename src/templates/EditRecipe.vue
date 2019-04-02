<template>
  <div>
    <div class="container">
      <h1 class="title">
        New Recipe
      </h1>
      <BaseButton class="button" theme="orange" @click="saveRecipe">
        Save Recipe
      </basebutton>
      <h3> Title</h3>
      <BaseInput
        v-model="recipe.title"
      />
      <h3>Description</h3>
      <BaseTextArea v-model="recipe.description" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import BaseInput from '../components/BaseInput.vue';
import BaseButton from '../components/BaseButton.vue';
import BaseTextArea from '../components/BaseTextArea.vue';
export default {
  name: 'EditRecipe',
  components: {
    BaseInput,
    BaseTextArea,
    BaseButton
  },
  data() {
    return {
      recipe: {},
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
    },
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

.recipe-title, .recipe-description
  display flex
  flex-flow row nowrap
  align-items center
  justify-content flex-start
  padding 10px 20px
  transition all ease 0.3s

.button
  margin 0 10px

.fa-check-circle
  color $green
</style>
