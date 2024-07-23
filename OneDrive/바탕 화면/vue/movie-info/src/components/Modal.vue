<template>
   <div class="modal" v-if="isModal">
    <div class="inner">
      <h3>{{ data[selectedMovieNumber].title }}</h3>
      <button @click="isModal = false">닫기</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ModalComponent"
}
</script>
<style>
  
</style>