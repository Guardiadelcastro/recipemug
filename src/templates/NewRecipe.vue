<template>
  <div>
    <div class="container">
      <h1 class="title">
        New Recipe
      </h1>
      <BaseInput v-model="title" label="Title" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BaseInput from '../components/BaseInput.vue';
// import BaseTextArea from '../components/BaseTextArea.vue';
export default {
  name: 'NewRecipe',
  components: {
    BaseInput,
    // BaseTextArea
  },
  data() {
    return {
      slug: '',
      title: '',
      description: '',
      ingredients: [],
      steps: [],
    };
  },
  computed: {
    ...mapGetters('recipe', {
      getActive: 'getActive'
    }),
    
  },
  beforeMount() {
    this.new = this.getActive();
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

.title
  justify-self center
  border-bottom 2px dashed $green

</style>
