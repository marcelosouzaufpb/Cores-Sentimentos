<template>
  <div id="balao">
    <div class="container-fluid">
      <div class="row">
        <fala></fala>
      </div>
      <div class="row">
        <button class="btn btn-primary" type="submit" @click="transitar()">Button</button>
      </div>
    </div>
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
    };
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
}
</style>
