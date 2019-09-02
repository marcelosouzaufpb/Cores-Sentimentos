<template>
  <div>
    <h1>Eu gosto muito das cores, porque elas conseguem transmitir sentimentos.</h1>
    <router-link to="/FalaQuatro">
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