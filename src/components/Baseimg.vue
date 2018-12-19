<template>
  <Img:
    src="getpic(index)"
    :alt="pic"
  >
    {{ getPic(index) }}
  </img:>
</template>

<script>
export default {
  name:'Baseimg',
  props: {
    index: {
      type: String,
      default: ''
    }
  },
  methods: {
    getPic(index) {
      return '../assets/' + this.pic[index] + '.png';
    }
  }

};

  

</script>

