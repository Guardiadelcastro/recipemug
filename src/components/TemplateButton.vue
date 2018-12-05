<template>
  <button @click="handleClick" :class="theme">{{ name }}</button>
</template>

<script>
export default {
  name: 'button',
  props:{
    name: {
      type: String,
      default: 'button'
    },
    theme: {
      type: String,
      default: 'template'
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    }
  },
  data() {
    return {
      
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
    color: whitesmoke;
    background: slateblue;
  }

  .cadetblue:hover {
    color: whitesmoke;
    background: cadetblue;
  }
</style>
