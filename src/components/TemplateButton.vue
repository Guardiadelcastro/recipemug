<template>
  <button @click="handleClick" :class="theme">{{ name }}</button>
</template>

<script>
export default {
  name: 'template-button',
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

<style lang="stylus" scoped>
@import '../styles/variables';
  button
    padding: 5px 10px
    border: 3px dashed
    font-size: 14px

  .blue 
    color: slateblue;
    border-color: slateblue;

    &:hover
      color: whitesmoke;
      background: slateblue;
    

  .red
    color: cadetblue;
    border-color: cadetblue;

    &:hover {
      color: whitesmoke;
      background: cadetblue;

</style>
