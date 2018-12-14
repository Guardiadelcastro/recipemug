<template>
  <div class="html-recipeForm">
    <h1 class="title">
      Recipe Form
    </h1>
    <form
      action="post"
      enctype="multipart/form-data"
    >
      <div class="title">
        <label for="text">
          Title of the Recipe:
        </label>
        <input
          type="text"
          name="title"
        >
      </div>
      <br>
      <div class="description">
        <label for>
          Description:
        </label>
        <br>
        <textarea
          id
          name="description"
          cols="40"
          rows="5"
        />
      </div>
      <br>
      <div class="list-container">
        <div id="ingredients">
          <label for>
            Ingredients:
          </label>
          <input
            type="text"
            name="newIngredient"
            placeholder="Add an Ingredient"
          >
        </div>
        <BaseButton
          id="newIngredient"
          type="button"
          theme="red square"
          name="+"
          @click="addIngredient"
        />
      </div>
      <br>
      <div class="list-container">
        <div id="steps">
          <label for>
            Steps:
          </label>
          <BaseInput
            theme="blue"
            message="Add a Step"
          />
        </div>
        <BaseButton
          id="newStep"
          type="button"
          theme="orange"
          name="+"
          @click="addStep"
        />
      </div>
      <br>
      <div class="upladoImage">
        <input
          id="uploadImage"
          type="file"
          name="image"
          accept="image/*"
        >
      </div>
      <br>
      <BaseButton
        name="Cook the new Recipe"
        theme="blue"
        icon="fas fa-search"
        show="true"
      />
    </form>
  </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue';
import BaseInput from '../components/BaseInput.vue';

export default {
  name: 'FullRecipe',
  components: {
    BaseButton,
    BaseInput
  },
  props: {},
  data() {
    return {};
  },
  methods: {
    addIngredient() {
      const ingredientList = document.querySelector('#ingredients');
      let newIngredient = document.createElement('input');
      newIngredient.type = 'text';
      newIngredient.placeholder = 'Add an Ingredient';
      newIngredient.name = 'newIngredient';
      ingredientList.appendChild(newIngredient);
    },

    addStep() {
      const steps = document.querySelector('#steps');
      let newStep = document.createElement('input');
      newStep.type = 'text';
      newStep.placeholder = 'Add a Step';
      newStep.name = 'newStep';
      steps.appendChild(newStep);
    }
  }
};
</script>

<style lang="stylus" scoped>
	@import '../styles/variables'

	.html-recipeForm
		width 600px
		background $white
		border 2px solid $green
		margin 10px
		padding 0 0 10px 10px
		border-radius 6px
		display flex
		flex-flow column wrap
		justify-content center
		align-items flex-start

	.list-container, .steps
		display grid
		grid-template-columns 35em
		grid-template-rows auto
		grid-gap 10px
		justify-items start

	.title
		align-self center
		color #b lue
		font-size 30px

	#newIngredient, #newStep
		justify-self end
</style>

