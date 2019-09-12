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
          <div class="col-md-6" id="barra">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="masculino" value="option1" checked />
              <label class="form-check-label" for="masculino">Masculino</label>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="feminino" value="option1" checked />
              <label class="form-check-label" for="feminino">Feminino</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <router-link to="/CorPreferida">
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
  height: 50%;
  padding-top: 9%;
  padding-bottom: 5%;
  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.16);
}

#fala h1 {
  font-size: 30px;
  text-align: center;
}

.btn {
  width: 100%;
  text-align: center;
}

#formes {
  border: 1px solid rgba(0, 0, 0, 0.16);
  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.16);
  border-radius: 30px;
}

#barra {
  border-right: 1px solid black;
}

</style>