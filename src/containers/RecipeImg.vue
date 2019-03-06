<template>
  <div
    class="container"
    @mouseenter="showButtons"
    @mouseleave="removeButtons"
  >
    <div class="content">
      <Img:
        hrf="getpic(index)"
        :alt="pic"
      >
        {{ getPic(index) }}
      </img:>
    </div>
    <div class="buttons">
      <BaseButton
        v-show="show"
        v-if="edit"
g
        theme="circle blue"
        @click="editElement"
      >
        <i class="fas fa-edit" />
      </BaseButton>
      <BaseButton
        v-else
        theme="circle red"
        @click="saveElement"
      >
        <i class="fas fa-save" />
      </BaseButton>
    </div>
  </div>
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
      return 'https://assets.recipemug.club/img/recipes/' + this.pic[index] + '.png';
    },
    showButtons() {
      this.show = true;
    },
    removeButtons() {
      this.show = false;
    },
    editElement() {
      this.edit = false;
    },
    saveElement() {
      this.edit = true;
    }
  }
};

  

</script>

