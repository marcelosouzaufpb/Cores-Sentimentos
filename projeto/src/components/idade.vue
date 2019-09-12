<template>
  <div class="container p-5">
    <div class="row mb-3">
      <div class="col-md-6">
        <avatar></avatar>
      </div>
      <div class="col-md-6 mb-3" >
        <div class="row" id="fala">
          <h1>Quantos anos vc tem?</h1>
        </div>
        <div class="row p-5 mt-5" id="formes">
          <input
            type="text"
            class="form-control"
            placeholder="Idade"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <router-link to="/Sexo">
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
  text-align: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 50%;
  height: 35%;
  padding-top: 5%;
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

#formes {
    border: 1px solid black;
    border-radius: 30px;
}
</style>