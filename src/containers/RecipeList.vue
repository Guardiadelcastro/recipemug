<template>
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
</template>

<script>
export default {

};
</script>

<style lang="stylus" scoped>

</style>

