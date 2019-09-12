<template>
  <div class="container p-5">
    <div class="row mb-3">
      <div class="col-md-6">
        <avatar></avatar>
      </div>
      <div class="col-md-6" id="fala">
        <h1>Agora eu quero conhecer mais sobre você.</h1>
      </div>
    </div>
    <div class="row">
      <router-link to="/Idade">
        <button type="button" class="btn btn-secondary  pr-5 pl-5">Seguinte</button>
      </router-link>
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
.row {
  justify-content: center;
  text-align: center;
}

.col-md-6 {
  justify-content: center;
  text-align: center;
}

#fala {
  text-align: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.16);;
  border-radius: 50%;
  height: 100%;
  padding-top: 5%;
  padding-bottom: 5%;
  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.16);
}

#fala h1 {
  font-size: 25px;
  text-align: center;
}

.btn {
  width: 100%;
  text-align: center;
}
</style>