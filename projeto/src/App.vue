<template>
  <div class="container-fluid mx-auto" id="app">
    <balao></balao>
  </div>
</template>

<script>
import balao from "./components/balao.vue";

export default {
  name: "app",
  components: {
    balao
  }
};
</script>

<style>
#app {
  width: 100%;
  margin-top: 8%;
}
</style>
