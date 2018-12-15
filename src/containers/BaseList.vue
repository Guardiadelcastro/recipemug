<template>
  <div>
    <h4 :class="title">
      {{ title }}
    </h4>
    <div id="list">
      <BaseInput  
        theme="green" 
        message="Add an ingredient"
      />
    </div>
    <BaseButton />
    <BaseInput
      type="button" 
      theme="green" 
      name="+" 
      @click="addIngredient" 
    />
  </div>
</template>

<script>
import BaseInput from '../components/BaseInput.vue';
import BaseButton from '../components/BaseButton.vue';

export default {
  name: 'BaseList',
  components: {
    BaseInput,
    BaseButton
  },
  props: {
    title: {
      type: String,
      default: 'Add here'
    }
  },
  data() {
    return {
    };
  },
  methods: {
    addIngredient() {
      const ingredients = document.querySelector('#list');
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
      newStep.name = 'newStep';
      steps.appendChild(newStep);
    },
  }
};
</script>
