<template>
  <Blocos :blocos="blocos"></Blocos>
</template>

<script>
import Blocos from "./components/Blocos.vue";

export default {
  components: { Blocos },
  data() {
    return {
      blocos: [
        { nome: "bloco um", atividade: false },
        { nome: "bloco dois", atividade: true }
      ]
    };
  }
};
</script>

<style>
</style>
