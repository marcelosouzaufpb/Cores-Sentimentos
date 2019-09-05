<template>
  <div id="azul">
    <div class="row">
      <h1>O que você consegue sentir olhando esse cenário?</h1>
      <br />
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
        <label class="form-check-label" for="defaultCheck1">Tranquilidade</label>
      </div>
      <br />
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
        <label class="form-check-label" for="defaultCheck1">Alegria</label>
      </div>
      <br />
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
        <label class="form-check-label" for="defaultCheck1">Coragem</label>
      </div>
      <br />
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
        <label class="form-check-label" for="defaultCheck1">Ansiedade</label>
      </div>
      <br />
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
        <label class="form-check-label" for="defaultCheck1">Agitação</label>
      </div>
      <br />
    </div>
    <router-link to="/FalaFinal">
      <button>Seguinte</button>
    </router-link>
  </div>
</template>
<script>
export default {};
</script>
<style  scoped>
#azul {
  background: blue;
  width: 100vw;
  height: 100vh;
}
</style>