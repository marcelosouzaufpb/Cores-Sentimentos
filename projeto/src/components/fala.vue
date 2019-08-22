<template>
  <h1>{{ falas[flag] }}</h1>
</template>

<script>
export default {
  data() {
    return {
      falas: ["Olá, O meu nome é Enzo!",
              "Tenho 9 anos, nasci na cidade de Rio Tinto, na Universidade Federal da Paraíba - Campus IV.",
              "Eu gosto muito das cores, porque elas conseguem transmitir sentimentos.",
              "Agora eu quero conhecer mais sobre você.",
             "Agora, iremos tentar expressar o que sentimos com as cores que iremos ver."
             ]
    };
  },
  computed: {
    flag() {
      return this.$store.state.flag
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 15px;
  text-align: justify;
}
</style>