import Vue from 'vue'
import VueRouter from 'vue-router'

import Fala from './components/Fala.vue'
import Fala1 from './components/FalaUm.vue'
import FalaDois from './components/FalaDois.vue'
import FalaTres from './components/FalaTres.vue'
import FalaQuatro from './components/FalaQuatro.vue'
import FalaCinco from './components/FalaCinco.vue'
import FalaFinal from './components/FalaFinal.vue'
import Idade from './components/Idade.vue'
import Sexo from './components/Sexo.vue'
import Vermelho from './components/Vermelho.vue'
import Verde from './components/Verde.vue'
import Azul from './components/Azul.vue'
import CorPreferida from './components/CorPreferida.vue'


Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
        path: '/',
        component: Fala
    }, {
        path: '/falaUm',
        component: Fala1
    },{
        path: '/falaDois',
        component: FalaDois
    },{
        path: '/falaTres',
        component: FalaTres
    },{
        path: '/falaQuatro',
        component: FalaQuatro
    },{

        path: '/falaCinco',
        component: FalaCinco
    },{
        path: '/falaFinal',
        component: FalaFinal
    },{
        path: '/idade',
        component: Idade
    },{
        path: '/sexo',
        component: Sexo
    },{
        path: '/Vermelho',
        component: Vermelho
    },{
        path: '/Verde',
        component: Verde
    },{
        path: '/Azul',
        component: Azul
    },{
        path: '/CorPreferida',
        component: CorPreferida
    }]
})

