<template>
  <section>
    <b-nav tabs  align="center" variant="dark">
      <b-nav-item :active="nav.minhaConta" @click.prevent="selectTab(1)"><img src="https://img.icons8.com/nolan/64/000000/street-view.png"> Minha Conta</b-nav-item>
      <b-nav-item :active="nav.MeusNegocios"  @click.prevent="selectTab(3)"><img src="https://img.icons8.com/nolan/64/000000/business.png"> Meus Negocios</b-nav-item>
      <b-nav-item :active="nav.trabalhos"  @click.prevent="selectTab(4)"><img src="https://img.icons8.com/nolan/64/000000/work.png"> Trabalhos</b-nav-item>
    </b-nav>

    <div v-if="nav.minhaConta ===true">
      <minhaConta/>
    </div>

    <div v-if="nav.MeusNegocios ===true">
      <MeusNegocios/>
    </div>
    <div v-if="nav.trabalhos ===true">
      <trabalhos/>
    </div>
  </section>
</template>

<script>
import minhaConta from "@/components/Usuario/minhaConta.vue";
import MeusNegocios from "@/components/Usuario/MeusNegocios.vue";
import trabalhos from "@/components/Usuario/trabalhos.vue";

export default {
name: "Usuario",
data(){
  return{
    nav: {
      minhaConta: true,
      MeusNegocios: false,
      trabalhos: false
    }
  }
},methods: {
  selectTab(op){
    if(op ===1){ this.nav.minhaConta =true;  this.nav.MeusNegocios = false; this.nav.trabalhos =false;}
    if(op ===3){ this.nav.minhaConta =false;  this.nav.MeusNegocios = true; this.nav.trabalhos =false;}
    if(op ===4){ this.nav.minhaConta =false;  this.nav.MeusNegocios = false; this.nav.trabalhos =true;}
  }
},components: {
  minhaConta,
  MeusNegocios,
  trabalhos,
  
}
}
</script>

<style>

</style>
