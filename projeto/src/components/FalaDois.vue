<template>
  <div>
    <h1>Tenho 9 anos, nasci na cidade de Rio Tinto, na Universidade Federal da Paraíba - Campus IV.</h1>
    <router-link to="/FalaTres">
      <button>Seguinte</button>
    </router-link>
    <div class="row">
      <avatar></avatar>
    </div>
  </div>
</template>

<script>
import avatar from "./Avatar.vue";

export default {
  components: {
    avatar
  }
};
</script>

<style scoped>
</style>