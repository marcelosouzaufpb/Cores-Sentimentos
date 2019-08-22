<template>
  <div id="balao">
    <fala></fala>
    <button class="btn btn-primary" type="submit">Button</button>
  </div>
</template>

<script>
import fala from "./fala.vue";
export default {
  name: "Balao",
  components: {
    fala
  }
};
</script>


<style>
#balao {
  width: 400px;
  height: 300px;
  border: 1px solid black;
  border-radius: 100%;
  padding: 5%;
}
</style>
