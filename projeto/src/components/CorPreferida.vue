<template>
  <div class="container p-5">
    <div class="row mb-3">
      <div class="col-md-6">
        <avatar></avatar>
      </div>
      <div class="col-md-6 mb-3">
        <div class="row" id="fala">
          <h1>Escolha uma cor?</h1>
        </div>
        <div class="row p-4 mt-5" id="formes">
          <div class="col-md-4">
            <div class="form-check p-1 pr-3 pl-3" id="cor-vermelho">
              <input class="form-check-input" type="radio" name="exampleRadios" id="Vermelho" value="option1" checked />
              <label class="form-check-label" for="Vermelho">Vermelho</label>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class="form-check p-1 pr-3 pl-3" id="cor-verde">
              <input class="form-check-input" type="radio" name="exampleRadios" id="Verde" value="option1" checked />
              <label class="form-check-label" for="Verde">Verde</label>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-check p-1 pr-3 pl-3" id="cor-azul">
              <input class="form-check-input" type="radio" name="exampleRadios" id="Azul" value="option1" checked />
              <label class="form-check-label" for="Azul">Azul</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <router-link to="/FalaCinco">
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
  height: 35%;
  padding-top: 7%;
  padding-bottom: 5%;
  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.16);
}

#fala h1 {
  font-size: 30px;
  text-align: center;
}
.form-check {
  border: 1px solid black;
  border-radius: 30px;
  justify-content: center;
  text-align: center;
}

#cor-verde {
  background-color: green;
  border: 1px solid green;
  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.16);
}

#cor-vermelho {
  background-color: red;
  border: 1px solid red;
  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.16);
}

#cor-azul {
  background-color: blue;
  border: 1px solid blue;
  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.16);
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
</style>