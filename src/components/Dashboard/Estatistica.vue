<template>
    <section>
        <div v-if="projetos.length >0 ">
        <b-card class="align-items-center ">
            <h2>Informações Gerais 🔎</h2><br>
            <b-list-group horizontal class=" text-center ml-2 mr-2">
                <b-list-group-item class=" position-relative btnMode ml-2 mr-2 rounded-pill  border border-dark " id="btnMode" variant="ligth" style="width: 350px;">
                    <img src="https://img.icons8.com/color/48/000000/task.png">
                    Meus Projetos
                    <b-badge variant="warning" pill>{{projetos.length}}</b-badge>
                </b-list-group-item>
                <b-list-group-item class=" position-relative btnMode ml-2 mr-2 rounded-pill border border-dark " id="btnMode" variant="ligth" style="width: 350px;">
                    <img src="https://img.icons8.com/color/48/000000/handshake-heart.png">
                    Minhas Propostas
                    <b-badge variant="warning" pill>14</b-badge>
                </b-list-group-item>

                 <b-list-group-item class="position-relative btnMode ml-2 mr-2 rounded-pill border border-dark " id="btnMode" variant="ligth" style="width: 350px;">
                    <img src="https://img.icons8.com/color/48/000000/meeting.png">
                    Propostas Enviadas 
                    <b-badge variant="warning" pill>14</b-badge>
                </b-list-group-item> 
            </b-list-group><br>


            <b-list-group horizontal class=" text-center ml-2 mr-2">
                <b-list-group-item class=" position-relative btnMode ml-2 mr-2 rounded-pill  border border-dark " id="btnMode" variant="ligth" style="width: 350px;">
                    <img src="https://img.icons8.com/color/48/000000/sale.png">
                    Projetos Concluidos
                    <b-badge variant="warning" pill>14</b-badge>
                </b-list-group-item>
                <b-list-group-item class=" position-relative btnMode ml-2 mr-2 rounded-pill border border-dark " id="btnMode" variant="ligth" style="width: 350px;">
                    <img src="https://img.icons8.com/color/48/000000/code.png">
                    Projetos em Execução
                    <b-badge variant="warning" pill>14</b-badge>
                </b-list-group-item>

                 <b-list-group-item class=" btnMode ml-2 mr-2 rounded-pill border border-dark " id="btnMode" variant="ligth" style="width: 350px;">
                    <img src="https://img.icons8.com/color/48/000000/verified-account.png">
                    Avialiações 
                    <b-badge variant="warning" pill>14</b-badge>
                </b-list-group-item> 
            </b-list-group>
        </b-card>

        </div>
                <PaginaCarregando key="carregando" v-else/>
        
        <div>
            <p>{{projetos.length}}</p>
            <p>{{$store.state.usuario._id}}</p>
        </div>

    </section>
</template>

<script>
import {api} from "@/services.js";

export default {
    name: "estatistica",
   components: {
        
    },
    data(){
        return{
            projetos: null,
            projetoPorPagina:1000,
            projetosTotal: 0,
            projeto: null

        };
    },
    computed: {
        url() {
            return `/projeto/?q=${this.$store.state.usuario._id}`;
        }
    },methods: {
        getProjetos(){
            this.projetos = null;
            window.setTimeout(()=>{
                api.get(this.url).
                then(response =>{
                   
                    this.projetosTotal = Number(response.headers["x-total-count"]);
                    if(response.data.autor === this.$store.state._id){
                        this.projetos = response.data;
                    }
            });
            },1500);
        },
        myProjects(){
            for (let index = 0; index < this.projetos.length; index++) {
                const nome = this.$store.state._id;
                const autor = this.projetos[index].autor
                if (nome.equals(autor)) {
                    this.projeto[index] = this.projetos[index];
                }
            }
            
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

<style>
h2 {
    text-align: center;

}
.btnMode:hover {
    transform: scale(1.0);

}
</style>
