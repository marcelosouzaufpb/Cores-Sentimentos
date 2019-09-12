<template>
  <div id="verde">
    <div class="container p-5">
      <div class="row mb-3">
        <div class="col-md-6">
          <avatar></avatar>
        </div>
        <div class="col-md-6">
          <div class="row mb-3" id="fala">
            <h1>O que você consegue sentir olhando esse cenário?</h1>
          </div>
          <div class="row pl-5 pr-5" id="formes">
            <div class="row m-4" id="marcar">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="Tranquilidade" value="option1" checked />
                <label class="form-check-label" for="defaultCheck1">Tranquilidade</label>
              </div>
            </div>
            <div class="row m-4" id="marcar">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="Esperança" value="option1" checked />
                <label class="form-check-label" for="defaultCheck1">Esperança</label>
              </div>
            </div>
            <div class="row m-4" id="marcar">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="Tristeza" value="option1" checked />
                <label class="form-check-label" for="defaultCheck1">Tristeza</label>
              </div>
            </div>
            <div class="row m-4" id="marcar">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="Diversão" value="option1" checked />
                <label class="form-check-label" for="defaultCheck1">Diversão</label>
              </div>
            </div>
            <div class="row m-4" id="marcar">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="Liberdade" value="option1" checked />
                <label class="form-check-label" for="defaultCheck1">Liberdade</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <router-link to="/Azul">
          <button type="button" class="btn btn-secondary pr-5 pl-5">Seguinte</button>
        </router-link>
      </div>
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
#verde {
  background-color: green;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin-left: -1%;
}

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
  border: 1px solid rgba(0, 0, 0, 0.16);
  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.16);
  border-radius: 50%;
  height: 20%;
  padding-top: 7%;
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
  border: 1px solid rgba(0, 0, 0, 0.16);
  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.16);
  border-radius: 30px;
  padding: 0;
}

#marcar {
  border: 1px solid rgba(0, 0, 0, 0.16);
  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.16);
  padding: 5px;
  border-radius: 30px;
  width: 100%;
}
</style>