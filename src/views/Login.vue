<template>
  <section class="login">
    <br>
    <b-card class="">
    <form>
      <div class="Apresentacao">
        <b-img   
         src="https://scontent.fpoa4-1.fna.fbcdn.net/v/t1.0-9/64537484_2344774092465340_5296521251014049792_n.jpg?_nc_cat=107&_nc_oc=AQndZ6p_yYrVz6h4nhlPBVw7DhhEJqANRu9RCsRAH6nbrt3BRVEtFw3MDeNYMV8vm-FpuNgB9giPecJfV_riqPmy&_nc_ht=scontent.fpoa4-1.fna&oh=83d50df84b8a584864cce5120b453841&oe=5D78DD16" 
         fluid alt="Fluid image"></b-img>
    </div>
      <h1>Login</h1>
      <label for="email">Email</label>
      <b-input variant="light" placeholder="exemplo@exemplo" v-model="login.email" class="border border-dark" @keyup="validate"></b-input><br>
      <label for="senha">Senha</label>
      <b-input type="password" variant="light" placeholder="**********" v-model="login.senha" class="border border-dark"></b-input>
      <br>
      <b-button variant="light" class="border border-dark" @click.prevent="logar">
        Entrar
      </b-button>
<br>
        <b-alert v-if="err === false" show variant="danger">Campo não preenchido ou usuario não encontrato!! </b-alert>
       <p class="perdeu">
      <a href="/" target="_blank">Perdeu a senha? Clique aqui.</a>
      </p>
    </form>   
    </b-card>

    <b-card class="text-center">
      <b-row>
        <b-col>
          <b-button v-b-modal.modal-4 class="w-100 p-3 border-dark" variant="warning"  >Cadastrar-se</b-button>
          <br><br>
        </b-col>
      </b-row>
    </b-card>
    <b-modal id="modal-4" hide-footer no-close-on-esc no-close-on-backdrop>
      <Cadastrar/>
        <b-button class="w-100 border border-dark" block @click.prevent="$bvModal.hide('modal-4')"  variant="danger">Cancelar</b-button>
    </b-modal>
     
<br><br><br>
    
  </section>
</template>

<script>
import Cadastrar from "@/components/Modals/CadastrarUsuario.vue";
import {api} from "@/services.js"
export default {
  name: "Login",
  components: {
    Cadastrar
  },
  data() {
    return {
      val:{
        email:"",
        senha:""
      },
      login: {
        email: "",
        senha: ""
      },err: true,
    };
  },
  methods: {
     async validate(){
       api.get(`/usuario/${this.login.email}`).then(res =>{
          this.val.senha = res.data.senha;
          this.val.email = res.data.email;
       });
     },
     logar() {
       if(this.login.email === this.val.email && this.login.senha === this.val.senha){
          this.$store.dispatch("getUsuario", this.login.email);
          this.$router.push({ name: "usuario" });

      }else{
         this.err = true;
       }

       
      }
    }
  }

</script>

<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: rgb(43, 43, 43);
}

form {
  display: grid;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}

.perdeu {
  text-align: center;
  margin: 20px auto 0 auto;
}

.perdeu a:hover {
  color: rgb(80, 80, 80);
  text-decoration: underline;
}
</style>
