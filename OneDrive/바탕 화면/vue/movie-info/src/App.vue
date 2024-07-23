<template>
  <Navbar />
  <h1>영화정보</h1>
  <div v-for="(movie, index) in data" :key="index" class="item">
    <figure class="posterBox">
      <img :src="movie.imgUrl" :alt="movie.title">
    </figure>
    <div class="info">
      <h3 class="bh-yellow" :style="textRed">{{ movie.title }}</h3>
      <p>개봉: {{ movie.year }}</p>
      <p>장르: {{ movie.category }}</p>
      <button @:click="increaseLike(index)">좋아요 </button> <span>{{ movie.like }}</span>
      <p style="margin-top: 10px;">
        <button @click="isModal = true; selectedMovieNumber = index">상세보기</button>
      </p>
    </div>
  </div>

  <Modal/>
</template>

<script>
  import data from './assets/movies';
  import Navbar from './components/Navbar.vue';
  import Modal from './components/Modal.vue';

  export default {
    name: "App",
    data() {
      return { // 반드시 return 문 써주기
        isModal: false,
        data: data,
        selectedMovieNumber: 0 
      }
    },
    methods: {
      increaseLike(index) {
        this.data[index].like += 1;
      }
    },
    components: {
      Navbar: Navbar,
      Modal: Modal
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    max-width: 768px;
    margin: 0 auto;
    padding: 20px;
  }

  h1,h2,h3 {
    margin-bottom: 1rem;
  }  

  p {
    margin-bottom: 0.5rem;
  }

  button {margin-right: 10px;}  

  .item {
    width: 100%;
    border: 1px solid #ccc;
    display: flex;    
    margin-bottom: 20px;
    padding: 1rem;
  } 

  .item figure {
    width: 30%;
    margin-right: 1rem;
  }

  .item img {
    width: 100%;
  }

  .item .info {
    width: 100%;
  }

  .bh-yellow { background: #f4d140; }

  .modal {
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal .inner {
    background-color: #fff;
    width: 80%;
    padding: 20px;
    border-radius: 10px;
  }
</style>
