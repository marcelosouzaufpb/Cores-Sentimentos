<template>
  <body>
    <div class="container-fluid mx-auto" id="app">
      <balao></balao>
    </div>
  </body>
</template>

<script>
import balao from "./components/balao.vue";

export default {
  name: "app",
  components: {
    balao
  },
  data(){
    return{
    }
  }
};
</script>

<style>
#app {
  width: 100%;
  margin-top: 8%;
}
</style>
