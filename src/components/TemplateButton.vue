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
@import '../styles/variables'

button
    padding 5px 10px
    border 3px solid
    font-size 16px
    transition ease 0.3s
    cursor pointer
    font-weight bold

.blue 
  color $blue
  border-color $blue
  &:active
    background-color: $blue
    color $white
  
.red 
  color $red
  border-color $red
  &:active
    background-color: $red
    color $white
  
.orange 
  color $orange
  border-color $orange
  &:active
    background-color: $orange
    color $white
  
.yellow 
  color $yellow
  border-color $yellow
  &:active
    background-color: $yellow
    color $white

.green 
  color $green
  border-color $green
  &:active
    background-color: $green
    color $white

.template 
  color $grey
  border-color $grey
  &:active
    background-color: $grey
    color $white
</style>
