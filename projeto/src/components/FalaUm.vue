<template>
  <div>
    <h1>Olá, O meu nome é Enzo!</h1>
    <router-link to="/FalaDois">
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