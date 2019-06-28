import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Usuario from "./views/usuario/Usuario.vue";
import CriarProjeto from "./views/Criarprojeto.vue";
import CatalogoList from "./views/Catalogo/listaProjeto.vue"
import Teste from "./views/teste.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/criarProjeto',
      name: 'criarProjeto',
      component: CriarProjeto
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      props: true
    },
    {
      path: "/usuario",
      name: "usuario",
      component: Usuario
    },{
      path:"/lista",
      name: "lista",
      component:CatalogoList
    },{
      path:"/teste",
      name: "teste",
      component:Teste
    }
  ],
  scrollBehavior(){
    return window.scrollTo({top: 0 , behavior: "smooth"}); //sempre que trocar de pagina ele volta para o topo
  }
})
