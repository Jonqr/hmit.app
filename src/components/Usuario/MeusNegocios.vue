<template >
    <section>
        <div>
        <b-nav tabs  >
            <b-nav-item :active="nav.meusProjetos" @click.prevent="selectTab(1)">Meus Projetos</b-nav-item>
            <b-nav-item :active="nav.minhasProposas" @click.prevent="selectTab(2)">Minhas Propostas</b-nav-item>
        </b-nav>
        </div>

        <b-card id="mnUp" ref="getProjetos" v-if="nav.meusProjetos===true">          
            <div v-for="(projeto, index) in projetos" :key="index">
                <div v-if="projeto.autor === $store.state.usuario.email">                   
                    <b-card class="border-dark">
                        <b-card-title>
                            Projeto: {{projeto.titulo}}
                        </b-card-title>
                        <b-card-sub-title>
                            Descrição: {{projeto.descricao}}
                        </b-card-sub-title>
                        <b-card-body>
                        <b-row class="border-dark">
                            <b-col class="border-dark">
                                <b-list-group-item>
                                    Estado: {{projeto.estrutura.estado}}
                                </b-list-group-item>
                                <b-list-group-item>
                                    Especificação: {{projeto.estrutura.especificacao}}
                                </b-list-group-item>
                                <b-list-group-item>
                                    Plataforma: {{projeto.estrutura.plataforma}}
                                </b-list-group-item>                                
                            </b-col>
                            <b-col>
                                <b-list-group-item>
                                    Orcamento : De RS: {{projeto.orcamento.inicial}},00 até R${{projeto.orcamento.final}},00
                                </b-list-group-item>
                                <b-list-group-item>
                                    Prazo: Entrega em {{projeto.prazo.dias}} dias
                                </b-list-group-item>
                                <b-list-group-item>
                                    Projeto com acompanhamento ? {{projeto.gerenciamento.ativo}}
                                </b-list-group-item> 
                            </b-col>
                        </b-row>
                        </b-card-body>
                        <b-card header="Propostas" class="border-dark">
                                <div v-for="(proposta, index) in propostas" :key="index">
                                    <div v-if="proposta.projeto === projeto._id && proposta.status.aguardando===true">
                                        <b-row>
                                            <b-col cols="8">
                                                <h4>Orçamento R${{proposta.info.orcamento}},00 </h4>
                                                <b-card-sub-title>
                                                    Descrição: {{proposta.info.descricao}}
                                                </b-card-sub-title><br>
                                                Finaliza o projeto em : {{proposta.info.prazo.dias}} Dias
                                                <h5>autor: {{proposta.autor}}</h5>
                                                
                                            </b-col>
                                            <b-col cols="4">
                                                <b-button class="m-2 w-75 p-3 border-dark" variant="ligth" @click.prevent="Aceitar(proposta)">Aceitar</b-button>
                                                <b-button class="m-2 w-75 p-3 border-dark" variant="danger" @click.prevent="Recusar(proposta)">Recusar</b-button>
                                            </b-col>
                                        </b-row>
                                    </div>           
                                </div>
                        </b-card>
                    </b-card>
 
                </div>           
            </div>
            
        </b-card>
        
        <b-card v-if="nav.minhasPropostas===true">
            <div v-for="(proposta, index) in propostas" :key="index">
            <div v-for="(projeto, index) in projetos" :key="index">

                    <!--proposta ativa -->
                <div v-if="proposta.autor === $store.state.usuario._id "><!--Colocar aqui depois -->
                    <b-card header="Propostas em espera" v-if="proposta.status.aguardando === true ">
                        <div v-if="projeto._id === proposta.projeto">
                            <b-card>
                                <b-row>
                                    <b-col cols='8'>
                                        <h4>Projeto: {{projeto.titulo}}</h4>
                                        <h5>Orçamento: R$:{{projeto.orcamento.inicial}},00 até R$:{{projeto.orcamento.final}},00</h5>
                                    </b-col>
                                    <b-col cols='4'>
                                        <b-button class="w-100 p-3" @click.prevent="removerProposta(proposta._id)">Remover</b-button>
                                    </b-col>
                                </b-row>
                            </b-card>
                        </div>
                    </b-card>
                </div>

            </div>
            </div><!--Fim proposta -->
        </b-card>
    </section>
</template>

<script>
import {api} from "@/services.js";
export default {
    name:"MeusNegocios",
    data(){
        return{
            propostas: null,
            projetos: null,
            nav:{
                meusProjetos:true,
                minhasPropostas:false,
            }       
        }
    },
    computed:{
        url(){
            const proj= "/projeto"
            return(proj)
        },
        url2(){
            const proj= "/proposta"
            return(proj)
        }, 
    },
    methods:{
        selectTab(op){
            if(op===1){ this.nav.meusProjetos = true; this.nav.minhasPropostas=false}
            if(op===2){ this.nav.meusProjetos = false; this.nav.minhasPropostas= true}

        },
        removerProposta(data){
            this.$store.dispatch("excluirProposta",data)
        },
        Aceitar(data){
            data.status.aguardando=false;
            data.status.aceito=true;
            
            this.$store.dispatch("atualizarProposta",data);


        },Recusar(data){
            data.status.aguardando=false;
            data.status.aceito = false;
            this.$store.dispatch("atualizarProposta", data)

        },
        
        async get(){
             
            api.get(this.url).then(res=>{ 
                    this.projetos= res.data;
            });
            api.get(this.url2).then(res=>{ 
                    this.propostas= res.data;
            });
        }
        
    
    },watch:{
        url(){
            this.get();
        },
        url2(){
            this.get();
        }
    },
    created(){
        this.get();
        
    }
  

}
</script>

<style>

</style>
