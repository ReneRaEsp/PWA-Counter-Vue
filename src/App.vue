<template>
  <div id="app">
    <Header/>
    <Nav/>
    <div class="module p-2">
      <router-view/>
    </div>
    <Footer/>

  </div>
</template>
<script>
import Header from './components/header';
import Nav from './components/nav';
import Footer from './components/footer';
export default {
  components:{
    Header,
    Nav,
    Footer
  },
};
</script>

<style scoped>
  .module {
    background: rgb(216, 228, 230);
    height: 64.2vh;
  }
</style>
