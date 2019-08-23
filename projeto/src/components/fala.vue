<template>
  <div>
    <keep-alive>
			<component :is="componente[flag]"/>
		</keep-alive>	
  </div>
</template>

<script>
import FalaUm from './fala(1).vue'
import FalaDois from './fala(2).vue'
import FalaTres from './fala(3).vue'
import FalaQuatro from './fala(4).vue'
import FalaS from './fala(6).vue'
import Sexo from './sexo.vue'
import Idade from './idade.vue'
import Cor from './cor.vue'
import Vermelho from './vermelho.vue'

export default {
  components: {FalaUm, FalaDois, FalaTres, FalaQuatro, Sexo, Idade, Cor, FalaS, Vermelho },
  data() {
    return {
      componente: ['FalaUm','FalaDois', 'FalaTres','FalaQuatro','Sexo','Idade', 'Cor', 'FalaS', 'Vermelho']
    };
  },
  computed: {
    flag() {
      return this.$store.state.flag
    },
    methods: {
      aplicar() {
        
      }
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