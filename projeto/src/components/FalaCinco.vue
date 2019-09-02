<template>
  <div>
    <h1>Agora, iremos tentar expressar o que sentimos com as cores que iremos ver.</h1>
    <router-link to="/Vermelho">
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