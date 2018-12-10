<template>
  <div class="html-recipeCard">
    <div class="title">Recipe One</div>
    <div class="image">
      <img src="https://www.gallinablanca.es/files/thumbs/1ee83d8475a79fa5a91b8cfce167adc4e20b2290_r900_340_5.jpg" alt="">
    </div>
    <div class="shortDescription">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt unde saepe dolores eum, animi explicabo sit deserunt modi perspiciatis reprehenderit quis ducimus, nam pariatur asperiores iure, doloribus facilis numquam! Fugiat?</p>
    </div>
  </div>
</template>

<script>
export default {
name: 'RecipeCard',
props: {},
  data: function() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="stylus" scoped>
  .html-recipeCard 
    margin-left: 10px;
    width: 400px;
    min-height: 200px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;

  .image
    padding: 5px;
  
  
  img 
    max-width: 100%;
  
  .shortDescription
    padding: 5px;
    
</style>
