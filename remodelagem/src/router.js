import Vue from 'vue'
import VueRouter from 'vue-router'

import Livro from './components/Livro.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
        path: '/',
        component: Livro
    }]
})

