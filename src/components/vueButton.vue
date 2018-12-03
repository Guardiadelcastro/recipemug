<template>
  <button name="Send" @click="alertClick">{{ name }}</button>
</template>

<script>
export default {
  name: 'button',
  props:{
    name: String,
    color: String,
    onClick: {
      type: Function,
      required: true
    }
  },
  methods: {
    alertClick() {
      alert('You have clicked the button')
    }
  },
  data() {
    return {
      submit: true
    }
  },
}
</script>

<style lang="postcss" scoped>
  button {
    padding: 5px 10px;
    border: 2px solid;
    font-size: 14px
  }
  .slateblue {
    color: slateblue;
    border-color: slateblue;
  }
</style>
