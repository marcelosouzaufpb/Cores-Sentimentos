<template>
  <body>
    <div id="app">
      <balao></balao>
    </div>
  </body>
</template>

<script>
import balao from "./components/Balao.vue";


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
  body {
    width: 100%;
    height: 100%;
  }

</style>
