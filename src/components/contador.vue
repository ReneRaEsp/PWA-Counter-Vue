<template>
  <div class="contador col-12 p-5 d-flex justify-content-center">
      <div class="card bg-primary p-5 col-8 d-flex justify-content-center">
          <h5>Contador: {{contador}}</h5>
          <button class="btn col-4" :class="colorR" @click="contador--">
              Restar
          </button>
          <button class="btn col-4" :class="color" @click="contador++">
              Sumar
          </button>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            contador: 0,
            color: "btn-info",
            colorR: "btn-danger",
        };
    },
    computed:{
        cambiarColor(){
            let color = "btn-success";
            return color;
        }
    }
};
</script>

<style>

</style>