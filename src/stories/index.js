import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import HMTLRecipeForm from '../views/components/HMTLRecipeForm';

storiesOf('HTMLRecipeForm', module)
  .add('story as a template', () => '<HTMLRecipeForm></HTMLRecipeForm>')
  .add('story as a component', () => ({
    components: { HMTLRecipeForm },
    template: '<HTMLRecipeForm></HTMLRecipeForm>'
  }));