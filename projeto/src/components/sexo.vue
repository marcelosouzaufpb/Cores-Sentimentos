<template>
  <div class="container">
    <h1>Você é do sexo masculino ou feminino?</h1>
    <div class="row">
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
    <router-link to="/CorPreferida">
      <button>Seguinte</button>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>