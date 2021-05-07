<template>
  <div class="contMod d-flex justify-content-center flex-wrap flex-column">
      <h2 class="row m-auto text-info">Contador modificable</h2>
      <div class="card row m-auto mt-5 mb-5" style="width:18rem;">
        <div class="card-body d-flex justify-content-center flex-wrap flex-column">
          <h5 class="text-center card-title">Contador</h5>
          <h2 class="text-center">{{cont}}</h2>
          <button @click="modCont('add', num)" class="btn btn-info">
              Sumar
          </button>
          <button @click="modCont('sub', num)" class="btn btn-danger">
              Restar
          </button>
          <label class="text-center" for="numero">Seleccione el valor del contador</label>
          <input name="numero" type="number" placeholder="inserte el numero a restar y sumar" v-model.number="num">
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            cont: 0,
            num: 3,
        };
    },
    methods:{
        modCont(op = "add", cant = 1){
            if(op === "add"){
                this.cont += cant;
            }
            else if(op === "sub"){
                this.cont -= cant;
            } else {
                alert ("invalido");
            }
        },
        modNum(){

        },
    },
};
</script>

<style>

</style>