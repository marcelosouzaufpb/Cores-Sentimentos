<template>
  <div>
    <h1>Agora eu quero conhecer mais sobre você.</h1>
    <router-link to="/Idade">
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