<template>
  <div id="azul">
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
                <label class="form-check-label" for="Tranquilidade">Tranquilidade</label>
              </div>
            </div>
            <div class="row m-4" id="marcar">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="Alegria" value="option1" checked />
                <label class="form-check-label" for="Alegria">Alegria</label>
              </div>
            </div>
            <div class="row m-4" id="marcar">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="Coragem" value="option1" checked />
                <label class="form-check-label" for="Coragem">Coragem</label>
              </div>
            </div>
            <div class="row m-4" id="marcar">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="Ansiedade" value="option1" checked />
                <label class="form-check-label" for="Ansiedade">Ansiedade</label>
              </div>
            </div>
            <div class="row m-4" id="marcar">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="Agitação" value="option1" checked />
                <label class="form-check-label" for="Agitação">Agitação</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <router-link to="/FalaFinal">
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
#azul {
  background-color: blue;
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