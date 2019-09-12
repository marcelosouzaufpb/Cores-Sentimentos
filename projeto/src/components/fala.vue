<template>
  <div>
    <div class="row mt-5" v-show="fala">
      <h1 class="h1 mb-3">Sentimentos e Cores</h1>
    </div>

    <div class="row">
      <h2 class="h2 mb-3">Trabalho referente ao projeto de Estagio 3</h2>
    </div>
    <div class="row">
      <router-link to="/FalaUm">
        <button type="button" class="btn btn-outline-primary pr-5 pl-5">Seguinte</button>
      </router-link>
    </div>
  </div>
</template>

<script>
 export default {
    data() {
		return {
      fala: true,
		}
	}
}
</script>

<style scoped>
.row {
  justify-content: center;
  text-align: center;
}

.btn {
  width: 100%;
  text-align: center;
}
</style>