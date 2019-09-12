<template>
  <div class="container p-5">
    <div class="row mb-3">
      <div class="col-md-6">
        <avatar></avatar>
      </div>
      <div class="col-md-6 mb-3">
        <div class="row" id="fala">
          <h1>Você é do sexo masculino ou feminino?</h1>
        </div>
        <div class="row p-5 mt-5" id="formes">
          <div class="col-md-6">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked
              />
              <label class="form-check-label" for="exampleRadios1">Masculino</label>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked
              />
              <label class="form-check-label" for="exampleRadios1">Feminino</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <router-link to="/CorPreferida">
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

#formes {
  border: 1px solid black;
  border-radius: 30px;
}
</style>