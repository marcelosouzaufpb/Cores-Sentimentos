<template>
  <div>
    <keep-alive>
			<component :is="componente[flag]"/>
		</keep-alive>	
  </div>
</template>

<script>
import Idade from './idade.vue'
import Sexo from './sexo.vue'
import FalaUm from './fala(1).vue'
import FalaDois from './fala(2).vue'
import FalaTres from './fala(3).vue'
import FalaQuatro from './fala(4).vue'
import FalaCinco from './fala(5).vue'

export default {
  components: {Idade, Sexo, FalaUm, FalaDois, FalaTres, FalaQuatro, FalaCinco},
  data() {
    return {
      componente: ['FalaUm','FalaDois', 'FalaTres','FalaQuatro','FalaCinco','Idade', 'Sexo']
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
h1 {
  font-size: 15px;
  text-align: justify;
}
</style>