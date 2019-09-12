<template>
  <div class="container p-5">
    <div class="row mb-3">
      <div class="col-md-6">
        <avatar></avatar>
      </div>
      <div class="col-md-6" id="fala">
        <h1>Tenho 9 anos, nasci na cidade de Rio Tinto, na Universidade Federal da Paraíba - Campus IV.</h1>
      </div>
    </div>
    <div class="row">
      <router-link to="/FalaTres">
        <button type="button" class="btn btn-outline-primary pr-5 pl-5">Seguinte</button>
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
  text-align: end;
  justify-content: end;
  border: 1px solid black;
  border-radius: 50%;
  height: 5%;
  padding-top: 2%;
  padding-bottom: 2%;
}

#fala h1 {
  font-size: 20px;
  text-align: center;
}

.btn {
  width: 100%;
  text-align: center;
}
</style>