<template>
   <div class="modal" v-if="isModal">
    <div class="inner">
      <h3>{{ data[selectedMovieNumber].title }}</h3>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ModalComponent",
  props: {
    data: Array,
    isModal: Boolean,
    selectedMovieNumber: Number
  }
}
</script>
<style>
  
</style>