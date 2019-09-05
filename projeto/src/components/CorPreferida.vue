<template>
  <div class="container">
    <div class="row">
      <h1>Qual sua cor preferida?</h1>
    </div><br>
    <div class="row">
      <h2>Escolha uma cor?</h2><br>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
        <label class="form-check-label" for="defaultCheck1">Vermelho</label>
      </div><br>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
        <label class="form-check-label" for="defaultCheck1">Verde</label>
      </div><br>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
        <label class="form-check-label" for="defaultCheck1">Azul</label>
      </div>
    </div>
    <router-link to="/FalaCinco">
      <button>Seguinte</button>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

</style>