<template>
  <button @click="onClick">{{ name }}</button>
</template>

<script>
export default {
  name: 'button',
  props:{
    name: {
      type: String,
      default: "+"
    },
   // color: String,
    actionClick: {
      type: Function,
      required: true
    }
    
  },
  methods: {
    alertClick() {
      alert('You have clicked the button')
    },
    consoleLog() {
      console.log('Vue cabrón funciona')
    }

  },
  data() {
    return {
      submit: true,
      theme: {
        isCadetBlue: true
      }
    }
  },
  mounted(){
    console.log(this.$options.name)
  }
}
</script>

<style lang="postcss" scoped>
  button {
    padding: 5px 10px;
    border: 2px solid;
    font-size: 14px;
  }

  .slateblue {
    color: slateblue;
    border-color: slateblue;
  }

  .cadetblue {
    color: cadetblue;
    border-color: cadetblue;
  }

  .slateblue:hover {
    color: red;
  }
</style>
