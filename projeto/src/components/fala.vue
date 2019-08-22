<template>
    <h1>{{ falas.fala1 }}</h1>
</template>

<script>
export default {
  data() {
    return {
      falas: {
        boasVindas: "Olá, O meu nome é Enzo!",
        fala1:
          "Tenho 9 anos, nasci na cidade de Rio Tinto, na Universidade Federal da Paraíba - Campus IV.",
        fala2:
          "Eu gosto muito das cores, porque elas conseguem transmitir sentimentos.",
        fala3: "Agora eu quero conhecer mais sobre você.",
        aviso:
          "Agora, iremos tentar expressar o que sentimos com as cores que iremos ver."
      }
    };
  }
};
</script>

<style scoped>
    h1 {
        font-size: 15px;
        text-align: justify;
    }
</style>