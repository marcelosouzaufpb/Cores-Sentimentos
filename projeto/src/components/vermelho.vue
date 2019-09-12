<template>
  <div id="vermelho">
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
            <div class="row m-4">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
                <label class="form-check-label" for="defaultCheck1">Paixão</label>
              </div>
            </div>
            <div class="row m-4">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
                <label class="form-check-label" for="defaultCheck1">Calma</label>
              </div>
            </div>
            <div class="row m-4">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
                <label class="form-check-label" for="defaultCheck1">Energia</label>
              </div>
            </div>
            <div class="row m-4">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
                <label class="form-check-label" for="defaultCheck1">Guerra</label>
              </div>
            </div>
            <div class="row m-4">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
                <label class="form-check-label" for="defaultCheck1">Agitação</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <router-link to="/Verde">
          <button type="button" class="btn btn-outline-primary pr-5 pl-5">Seguinte</button>
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
#vermelho {
  background-color: red;
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
  border: 1px solid black;
  border-radius: 50%;
  height: 20%;
  padding-top: 5%;
  padding-bottom: 2%;
}

#fala h1 {
  font-size: 15px;
  text-align: center;
}

.btn {
  width: 100%;
  text-align: center;
}

#formes {
  border: 1px solid black;
  border-radius: 30px;
  padding: 0;
}
</style>