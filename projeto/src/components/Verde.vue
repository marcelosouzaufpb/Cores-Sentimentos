<template>
  <div id="verde">
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
        <label class="form-check-label" for="defaultCheck1">Esperança</label>
      </div>
      <br />
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
        <label class="form-check-label" for="defaultCheck1">Tristeza</label>
      </div>
      <br />
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
        <label class="form-check-label" for="defaultCheck1">Diversão</label>
      </div>
      <br />
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
        <label class="form-check-label" for="defaultCheck1">Liberdade</label>
      </div>
      <br />
    </div>
    <router-link to="/Azul">
      <button>Seguinte</button>
    </router-link>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#verde {
  background: green;
  width: 100vw;
  height: 100vh;
}
</style>