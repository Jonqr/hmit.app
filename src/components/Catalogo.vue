<template>
    <section>
        <transition mode="out-in">
        <div v-if="projetos && projetos.length">
            <div class="d-flex align-items-center"  v-for="(projeto,index) in projetos" :key="index" >
                <b-container class="" >
                    <b-container class="border border-dark m-3 sz-3 bg-white" >
                        <b-row class="border border-dark m-2 justify-content-between">
                            <h5>
                                <img src="https://img.icons8.com/nolan/64/000000/brief.png">{{projeto.titulo}} 
                            </h5>

                            <b-button v-if="$store.state.login===true" 
                            class="m-4 border border-dark" 
                            variant="warning" @click="$bvModal.show('bv-modal-example'), selecProject(projeto._id)">Fazer uma Proposta</b-button>
                            <b-button v-if="$store.state.login===false" class="m-4 border border-dark" variant="warning" disabled @click="$bvModal.show('bv-modal-example'), selecProject(projeto._id)">Fazer uma Proposta</b-button>

                        </b-row>
                        <b-row class="border border-dark m-2">
                            <b-col md="8" class="border border-secundary">
                            <h5> Descrição:</h5>
                            <p>{{projeto.descricao}}</p>
                            </b-col>
                            <b-col md="4" class="border border-secundary">
                                    <b-alert class="m-1" v-if=" projeto.gerenciamento.ativo === 'sim'" show variant="warning">
                                        Projeto será Monitorado 
                                    </b-alert>
                                    <p v-if=" projeto.gerenciamento.ativo === 'sim'">E será entregue em {{projeto.gerenciamento.etapas}} etapas</p>

                                    <b-alert v-if=" projeto.prazo.negociar === 'true'" class="m-1" show variant="warning"> Prazo de entrega é negociavel</b-alert>
                                    <b-alert v-if=" projeto.prazo.negociar === 'false'" class="m-1" show variant="warning"> Prazo de entrega não é negociavel</b-alert>
                                    <p class="m-2" style="color: ">Prazo estimado: <b>{{projeto.prazo.dias}} Dias</b></p>
                                    <div class="border">
                                        <h5 class="m-3">Orçamento:</h5>
                                        <h5 class="m-3"><b>Dê ${{projeto.orcamento.inicial}} até {{projeto.orcamento.final}}</b></h5>
                                        <b-alert v-if=" projeto.orcamento.negociavel === 'true'" class="m-1" show variant="warning"> Orçamento pode ser negociado</b-alert>
                                        <b-alert v-if=" projeto.orcamento.negociavel === 'false'" class="m-1" show variant="warning"> Orçamento fixo, não será aceito nada alem desse valor</b-alert>
                                    </div>
                            </b-col>
                        </b-row>
                        <b-row class="text-center border border-dark m-2">
                            <b-col class="border border-secundary m-1"><img src="https://img.icons8.com/nolan/64/000000/tasks.png"><br></b-col>
                            <b-col class="border border-secundary m-1"><p><b>Plataforma</b></p><p>{{projeto.estrutura.plataforma}}</p></b-col>
                            <b-col class="border border-secundary m-1"><p><b>Estágio do projéto</b></p><p>{{projeto.estrutura.estado}}</p></b-col>
                            <b-col class="border border-secundary m-1"><p><b>Nivel de Especificações: </b></p><p>{{projeto.estrutura.especificacao}}</p></b-col>
                        </b-row>
                    </b-container>
                </b-container>
            </div>
        <ProjetosPaginar :projetosTotal= "projetosTotal" :projetoPorPagina="projetoPorPagina" />
        </div>
        <div v-else-if="projetos && projetos.length ===0" key="sem-resultados">
            <b-alert show variant="info" class="sem-resultado">Busca sem Resultados. Tente buscar outro termo.</b-alert>
        </div>
            <PaginaCarregando key="carregando" v-else/>
        </transition>
            <b-modal align-h="center" size="xl" id="bv-modal-example" hide-footer no-close-on-esc no-close-on-backdrop 	>
                <template slot="modal-title">
                    <h2>Proposta</h2>
                </template>
                <div class="d-block text-center">
                <Proposta/>
                </div>
                <b-button class="w-100 p-center " block @click.prevent="$bvModal.hide('bv-modal-example'), exitProjeto" >Cancelar</b-button>
            </b-modal>
    </section>
</template>

<script>

import Proposta from "@/components/Modals/Proposta.vue"

import {api} from "@/services.js";
import {serialize} from "@/helpers.js";
import ProjetosPaginar from "@/components/ProjetosPaginar.vue";

export default {
    name: "Catalogo",
    components: {
        ProjetosPaginar,
        Proposta
    },
    data(){
        return{
            projetos: null,
            projetoPorPagina:9,
            projetosTotal: 0,
            
        };
    },
    computed: {
        url() {
            const query = serialize(this.$route.query);
            return `/projeto?_limit=${this.projetoPorPagina}${query}`;
        }
    },methods: {
        getProjetos(){
            this.projetos = null;
            window.setTimeout(()=>{
                api.get(this.url).
                then(response =>{
                   
                    this.projetosTotal = Number(response.headers["x-total-count"]);
                    this.projetos = response.data;
            });
            },1500);
        },
        selecProject(obj){
        this.$store.dispatch("getProjeto", obj);
        },
        exitProjeto(){
            this.$store.dispatch("removerProjeto");
        }
    },
    watch: {
        url(){
            this.getProjetos();
        }
    },
    created(){
        this.getProjetos();
    }
}
</script>


<style scoped>
section{
    background-color: rgba(70, 71, 71, 0.062);
}
* {
    font-family: 'Courier New', Courier, monospace;
}
</style>
