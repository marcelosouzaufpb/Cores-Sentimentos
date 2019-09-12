<template>
  <div id="vermelho">
    <div class="container">
      <div class="row">
        <h1>O que você consegue sentir olhando esse cenário?</h1>
      </div>
      <div class="row">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
          <label class="form-check-label" for="defaultCheck1">Paixão</label>
        </div>
      </div>
      <div class="row">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
          <label class="form-check-label" for="defaultCheck1">Calma</label>
        </div>
      </div>
      <div class="row">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
          <label class="form-check-label" for="defaultCheck1">Energia</label>
        </div>
      </div>
      <div class="row">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
          <label class="form-check-label" for="defaultCheck1">Guerra</label>
        </div>
      </div>
      <div class="row">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
          <label class="form-check-label" for="defaultCheck1">Agitação</label>
        </div>
      </div>
      <div class="row">
        <router-link to="/Verde">
          <button>Seguinte</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#vermelho {
  background-color: red;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin-left: -1%;
}
</style>