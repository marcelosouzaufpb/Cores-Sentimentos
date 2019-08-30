<template>
  <body>
    <div class="container-fluid mx-auto" id="app">
      <balao></balao>
      <avatar></avatar>
    </div>
  </body>
</template>

<script>
import balao from "./components/balao.vue";
import avatar from "./components/Avatar.vue";

export default {
  name: "app",
  components: {
    balao,
    avatar
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
