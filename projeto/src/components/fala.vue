<template>
  <div>
    <router-link to="/FalaUm"><button>Seguinte</button></router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cor: 'red'
    };
  },
  computed: {
    flag() {
      return this.$store.state.flag
    }
  },
};
</script>

<style scoped>

div {
  width: 100%;
  height: 200px;
}
h1 {
  font-size: 15px;
  text-align: justify;
}

.aplicar-vermelho {
  background: red;
}

.aplicar-verde {
  background: green;
}
.aplicar-azul {
  background: blue;
}


</style>