<template>
   <section>
       <b-card>
           <b-card-sub-title>
               Dados de acesso
           </b-card-sub-title>
           <br>
            <b-list-group>
                <b-list-group-item>
                    Primeiro Nome
                    <b-form-input class="m-1" v-model="usuario.cadastro.primeiroNome"></b-form-input>
                </b-list-group-item>
                <b-list-group-item>
                    Sobrenome
                    <b-form-input class="m-1" v-model="usuario.cadastro.sobreNome"></b-form-input>
                </b-list-group-item>
                <b-list-group-item>
                    E-mail
                    <b-form-input class="m-1" v-model="usuario.email"></b-form-input>
                </b-list-group-item>
                <b-list-group-item>
                    Senha
                    <b-form-input type="password" class="m-1" v-model="usuario.senha"></b-form-input>
                </b-list-group-item>
                <b-list-group-item>
                    Confime a senha
                    <b-form-input type="password" class="m-1" v-model="senhaConfirma"></b-form-input>
                </b-list-group-item>
            </b-list-group>
       </b-card>
        <b-row class="text-center">
                <b-col><b-button class="border border-dark w-75" variant=ligth @click.prevent="atualizar">Atualizar dados</b-button></b-col>
            </b-row>
   </section>
</template>

<script>
export default {
    name:"atualizarDados",
    data(){
        return{
        senhaConfirma: "",
            usuario: {
                cadastro: {
                    primeiroNome: this.$store.state.usuario.cadastro.primeiroNome,
                    sobreNome: this.$store.state.usuario.cadastro.primeiroNome
                },
                email: this.$store.state.usuario.email,
                senha: "",
            }      
        }
    },
    methods:{
      atualizar(){
                this.$store.dispatch("atualiarUsuario",this.usuario);
      }
    }

}
</script>

<style>

</style>
