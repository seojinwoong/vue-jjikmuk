<template>
  <div class="event" :class="{show: isOpen}">
      <p>{{ text }}</p>
      <button @click="isOpen = false">X</button>
  </div>
</template>
<script>
export default {
  name: 'EventComponent',
  props: {
    text: String,
  },
  data() {
    return {
      isOpen: true
    }
  }
}
</script>
<style>
  .event {
    background: #444;
    color: #fff;
    padding: 10px;
    text-align: center;
    font-size: 15px;
    justify-content: space-between;
    align-items: center;
    display: none;
  }
  .show {
    display: flex;
  }
  .event p {
    margin: 0;
  }
  .event button {
    
  }
</style>