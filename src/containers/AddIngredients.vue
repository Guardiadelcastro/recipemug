<template>
  <div>
    <h4>{{ title }}</h4>
    <div id="list">
      <text-input theme="green" message="Add an ingredient"/>
    </div>
    <add-button>
    <templatebutton type="button" theme="green" name="+" @click="addIngredient"></templatebutton>
  </div>
</template>

<script>
import TextInput from '../components/TextInput';
import TemplateButton from '../components/TemplateButton';

export default {
  components: {
    'text-input': TextInput,
    'add-button': TemplateButton
  },
  props: {
    title: string,
  },
  methods: {
    addIngredient() {
      const ingredients = document.querySelector('#list')
      let newIngredient = document.createElement('input');
      newIngredient.type = 'text';
      newIngredient.placeholder = 'Add an Ingredient';
      newIngredient.name = 'newIngredient';
      ingredients.appendChild(newIngredient);
    },
    addStep() {
      const steps = document.querySelector('#steps');
      let newStep = document.createElement('input');
      newStep.type = 'text';
      newStep.placeholder = 'Add a Step';
      newIngredient.name = 'newStep';
      steps.appendChild(newStep);
    },
  },
  data() {
    return {
      title: 'Add an ingredient'
    }
  }
}
</script>
