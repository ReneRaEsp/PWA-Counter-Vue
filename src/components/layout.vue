<template>
  <div class="layout">
      <Header/>
      <Contador/>
      <CMod/>
      <Footer/>
  </div>
</template>

<script>
import Header from './header';
import Contador from './contador';
import Footer from './footer';
import CMod from './contadorMod';
export default {
    name: "Layout",
    components:{
        Header,
        Contador,
        Footer,
        CMod
    },
};
</script>

<style>

</style>