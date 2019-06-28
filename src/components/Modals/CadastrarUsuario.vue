<template>
   <section>
    <div v-if="finalizado===false">
        <b-card>
           <b-card-sub-title>
               Cadastro de usuario
           </b-card-sub-title>
           <br>
            <b-list-group>
                <b-list-group-item>
                    Primeiro Nome
                    <b-form-input class="m-1" v-model="usuario.cadastro.primeiroNome"></b-form-input>
                    <b-alert v-if="erros.status===true && erros.op===1" class="m-3" show variant="danger">{{erros.msg}}</b-alert>

                </b-list-group-item>
                <b-list-group-item>
                    Sobrenome
                    <b-form-input class="m-1" v-model="usuario.cadastro.sobreNome"></b-form-input>
                </b-list-group-item>
                <b-list-group-item>
                    E-mail
                    <b-form-input class="m-1" v-model="usuario.email" @keyup='validate'></b-form-input>
                </b-list-group-item>
                <b-alert v-if="erros.status===true && erros.op===2" class="m-3" show variant="danger">{{erros.msg}}</b-alert>

                <b-list-group-item>
                    Senha
                    <b-form-input type="password" class="m-1" v-model="usuario.senha"></b-form-input>
                </b-list-group-item>
                <b-list-group-item>
                    Confime a senha
                    <b-form-input type="password" class="m-1" v-model="senhaConfirma"></b-form-input>
                    <b-alert v-if="erros.status===true && erros.op===3" class="m-3" show variant="danger">{{erros.msg}}</b-alert>
                </b-list-group-item>
            </b-list-group>
       </b-card>
              <b-alert v-if="erros.status===true && erros.op===4" class="m-3" show variant="danger">{{erros.msg}}</b-alert>
            <b-row class="text-center">
                <b-col><b-button class="border border-dark w-75" variant=ligth @click.prevent="criarUsuario">Cadastrar-se</b-button></b-col>
            </b-row>
            <b-card>
    </b-card>
       </div>
      <div v-else>
          <h3>👌Usuario Cadastrado😁</h3>
          <h4>Faça o login e vamos começar a trabalhar!</h4>
      </div>
   </section>
</template>

<script>
import {api} from "@/services.js";
export default {

    name:"CadastrarUsuario",
    data(){
        return{
        senhaConfirma: "",
            usuario: {
                cadastro: {
                    primeiroNome: "",
                    sobreNome: ""
                },
                _id: "",
                email: "",
                senha: "",
            },
            erros:{
                status:false,
                op:0,
                msg:""
            },dado: null,
            finalizado:false      
        }
    },
    methods:{
    async validate(){
          api.get(`/usuario/${this.usuario.email}`)
          .then(res=>{
              this.dado = res.data.email;
          });
      },
     
      criarUsuario(){
        if(this.usuario.cadastro.primeiroNome){
            if(this.usuario.email){
                this.usuario._id = this.usuario.email;
                if(this.usuario.senha === this.senhaConfirma){
                    if(this.dado != this.usuario.email){
                      
                    this.$store.dispatch("criarUsuario",this.usuario);
                    this.finalizado = true;
                    }else{
                        this.erros.status = true;
                        this.erros.op =3;
                        this.erros.msg="Não foi possivel fazer o cadastro --Email já existente --"; 
                    }
         

                }else{
                this.erros.status = true;
                this.erros.op =3;
                this.erros.msg="Erro !!! Confirmação de senha não é igual senha";     
                }
            }else{
            this.erros.status = true
            this.erros.op =2;
            this.erros.msg="Erro !!! -Campo [E-mail] vazio";   
            }
        }else{
            this.erros.status = true
            this.erros.op =1;
            this.erros.msg="Erro !!! -Campo [PRIMEIRO NOME] vazio"
        }
      }
    }

}
</script>

<style>

</style>
