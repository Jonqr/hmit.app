<template>
<section >
    <div class=" ">

    <b-card id="cadastro" class="m-2 border-dark  align-items-center w-100">
        <b-row>
            <b-col>
            <b-container class="socadastro">
                <b-row>
                    <b-col>
                        <b-card header="Dados de Acesso">
                        <div>
                           
                            <b-form  @submit.stop.prevent>
                            <label for="feedback-user" >Nome</label>
                            <b-input v-model="usuario.cadastro.firstName" ></b-input><br>    
                            <label for="feedback-user" >Email</label>
                            <b-input v-model="usuario.email" ></b-input><br>
                            <label for="feedback-user">senha</label>
                            <b-input v-model="usuario.senha" type="password"></b-input><br>
                            <label for="feedback-user">Confirme a senha</label>
                            <b-input v-model="senhaVerifica" type="password"  @keyup="validationPassword"></b-input><br>
                            <b-alert v-if="this.validationPassword === false " show variant="danger">Senha tem que ser igual á anterior!</b-alert>
                            </b-form>
                        </div>
                        </b-card>
                    
                    </b-col>
                </b-row>
            </b-container>
            </b-col>
        </b-row>

        <br>
        <b-container>
            <b-row>
                <b-col>
                    <div>

                    <b-card header="Informações Pessoais">
                        <b-form class="">
                            <label for="feedback-user">Primeiro Nome:</label>
                            <b-input v-model="usuario.cadastro.firstName" class="w-100"></b-input><br>
                            <label for="feedback-user">Sobrenome:</label>
                            <b-input v-model="usuario.cadastro.lastName" class="w-100"></b-input><br>
                            <label for="feedback-user">Telefone</label>
                            <b-input v-model="usuario.cadastro.telefone" class="w-100"></b-input><br>
                            <label for="feedback-user">Celular</label>
                            <b-input v-model="usuario.cadastro.celular" class="w-100"></b-input><br>
                        </b-form>
                    </b-card>
                    <br>
                    <b-card header="Endereço" class="w-100 ">
                    
                        <b-form class="w-75 ">
                            <b-row>
                                <b-col>
                                    <label for="feedback-user" class="">Cep:</label>
                                    <b-input v-model="usuario.cadastro.adress.cep" class="w-100" @keyup="preencherCep"></b-input><br>
                                </b-col>
                                <b-col>
                                    <label for="feedback-user" class="">Numero:</label>
                                    <b-input v-model="usuario.cadastro.adress.numero" class="w-100"></b-input><br>
                                </b-col>
                            </b-row>
                            <b-row>
                                 <b-col>
                                    <label for="feedback-user" class="">Complemento:</label>
                                    <b-input v-model="usuario.cadastro.adress.complemento" class="w-100"></b-input><br>
                                     <label for="feedback-user" class="">Logradouro:</label>
                                    <b-input v-model="usuario.cadastro.adress.logradouro" class="w-100"></b-input><br>
                                     <label for="feedback-user" class="">Cidade:</label>
                                    <b-input v-model="usuario.cadastro.adress.cidade" class="w-100"></b-input><br>
                                     <label for="feedback-user" class="">Bairro</label>
                                    <b-input v-model="usuario.cadastro.adress.bairro" class="w-100"></b-input><br>
                                     <label for="feedback-user" class="">UF:</label>
                                    <b-input v-model="usuario.cadastro.adress.uf" class="w-100"></b-input><br>
                                    <br>
                                      <b-alert v-if="validate.erro===true" show variant="danger">{{validate.message}}</b-alert>
                                    <br>
                                         <b-button class="w-100 p-4" @click.prevent="Cadastrar">
                                            Cadastrar-se
                                        </b-button>
                                        <h4>
                                        </h4>
                                </b-col>
                                
                            </b-row>
                        </b-form>
                    </b-card>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </b-card>
    </div>
</section>
</template>

<script>
import {getCep} from "@/services.js";
import {api} from "@/services.js";
export default {
name: "criarProjeto",
    data(){
        return{
            senhaVerifica:"",

            usuario: {
                cadastro: {
                    adress: {
                        cep: "",
                        logradouro: "",
                        numero: "",
                        complemento: "",
                        bairro: "",
                        cidade: "",
                        uf: ""
                    },
                    firstName: "",
                    lastName: "",
                    birthday: "",
                    telefone: "",
                    celular: ""
                },
                profile: {
                    tecnologias: [],
                    linkedin: "",
                    descricao: ""
                },
                email: "",
                senha: "",
                foto: "",
        },
        validate:{
            erro:false,
            message:""
        }
    }
    },
    components:{
    },
    computed:{
        validationPassword(){
            if(this.usuario.senha===this.senhaVerifica){
               return true;
            }else{
                return false;
            }
        }
    },
    methods: {

         Cadastrar(){
            if(this.usuario.email.length>3){
                this.validate.erro = false;
                if(this.validation===false){
                    this.validate.erro = false;
                    if(this.usuario.cadastro.firstName.length>3
                    && this.usuario.senha.length>8){
                       // await this.$store.dispatch("criarUsuario");
                        //this.$router.push({name: "/usuario"})
                    }else{
                        this.validate.erro = true;
                        this.validate.message = "Verifique os Campos: PRIMEIRO NOME, EMAIL, SENHA - Não foram preenchidos ou não correspondem os requisitos";
                    }
                }else{
                    this.validate.erro = true;
                    this.validate.message = "Esse email já existe";
                }
            }else{
                this.validate.erro = true;
                this.validate.message = this.$store.state.validate + "Campo email está vazio";
            }
            
            

         },
         validateUser(){
           const email = this.usuario.email;
           api.get(`/usuario/${this.usuario.email}`).then(res=>{
               if(email === res.data.email || email === res.data._id){
                this.validate.erro = true;
                this.validate.message = "usuario já existente"
               }else{
                   this.validate.erro = false;
                   this.teste ="deu"
               }
           })
         },
         preencherCep () {
            const cep = this.usuario.cadastro.adress.cep.replace(/\D/g, "");
            if(cep.length === 8){
                getCep(cep).then(response => {
                    this.usuario.cadastro.adress.logradouro = response.data.logradouro;
                    this.usuario.cadastro.adress.bairro = response.data.bairro;
                    this.usuario.cadastro.adress.cidade = response.data.localidade;
                    this.usuario.cadastro.adress.uf = response.data.uf;
                })
            }
        }
        
       
    }
}
</script>

<style>


</style>
