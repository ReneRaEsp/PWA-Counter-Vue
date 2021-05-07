<template>
  <div class="contMod d-flex justify-content-center flex-wrap flex-column">
      <h2 class="row m-auto text-info">Contador Simple</h2>
      <div class="card row m-auto mt-5 mb-5" style="width:18rem;">
        <div class="card-body d-flex justify-content-center flex-wrap flex-column">
          <h5 class="text-center card-title">Contador</h5>
          <h2 class="text-center">{{cont}}</h2>
          <button @click="cont++" class="btn btn-info">
              Sumar
          </button>
          <button @click="cont--" class="btn btn-danger">
              Restar
          </button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            cont: 0,
        };
    }
};
</script>

<style>

</style>