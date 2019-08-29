<template>
  <div id="balao">
    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "Balao",
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
