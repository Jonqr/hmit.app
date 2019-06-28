<template>
  <section>
    <form >

      <div>
        <b-form  @submit.stop.prevent>
        <h3>Cadastro</h3>
        <label for="feedback-user">Nome</label>
        <b-input v-model="nome"  id="feedback-user"></b-input><br>
        <label for="feedback-user">Email</label>
        <b-input v-model="email"  id="feedback-user"></b-input><br>
        <label for="feedback-user">senha</label>
        <b-input v-model="senha" type="password" id="feedback-user"></b-input><br>
      

        <label for="feedback-user">Confirme a senha</label>
        <b-input v-model="senhaConfirm" type="password" id="feedback-user"  @keyup="validationPassword"></b-input><br>
        <b-alert v-if="!this.validationPassword ===true && this.senhaConfirm.length > 0" show variant="danger">Senha não é igual a informada acima !</b-alert>
        
        </b-form>
      
      </div>
        <div>
            <slot></slot>
        </div>
      </form>  
    </section>
</template>

<script>
import {mapFields} from "@/helpers.js";
import {getCep} from "@/services.js";


export default {
  data() {
    return {
      nome: "",
      email: "",
      senha: "",
      senhaConfirm: "",

      cep: "",
      logradouro: "",
      cidade: "",
      uf: "",
      complemento: "",
      numero: ""

    }
  },
  components: {
    
  },computed: {
    ...mapFields({
            fields: ["nome","email","senha","rua","cep","numero","bairro", "cidade","estado"],
            base: "usuario",
            mutation: "UPDATE_USUARIO"
        }),
        validationPassword() {
          if(this.senha === this.senhaConfirm){
            return true;
          }else{
            return false;
          }
        }
  },
  methods: {
    preencherCep () {
            const cep = this.cep.replace(/\D/g, "");
            if(cep.length === 8){
                getCep(cep).then(response => {
                    this.logradouro = response.data.logradouro;
                    this.bairro = response.data.bairro;
                    this.cidade = response.data.localidade;
                    this.uf = response.data.uf;
                })
            }
        }
  }
}
</script>

<style>

</style>
