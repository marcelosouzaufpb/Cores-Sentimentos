<template>
  <div id="balao">
    <fala></fala>
    <button class="btn btn-primary" type="submit" @click="transitar()">Button</button>
  </div>
</template>

<script>
import fala from "./fala.vue";
export default {
  name: "Balao",
  components: {
    fala
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    transitar() {
      this.count += 1;
      this.$store.state.flag = this.count;
    }
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
