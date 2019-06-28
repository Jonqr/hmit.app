<template>
  <section class="login">
    <br>
    <b-card v-if="$store.state.login===false">
    <form>
      <h1>Login</h1><br><br>
      <label for="email">Email</label>
      <b-input variant="light" placeholder="exemplo@exemplo" v-model="login.email" class="border border-dark"></b-input><br>
      <label for="senha">Senha</label>
      <b-input type="password" variant="light" placeholder="**********" v-model="login.senha" class="border border-dark"></b-input>
      <br>
      <b-button variant="light" class="border border-dark" @click.prevent="logar">
        Entrar
      </b-button>
    </form>   
    </b-card>
    <b-card v-if="$store.state.login===false" >
     
      <div >
        <p class="perdeu">
          <a href="/" target="_blank">Perdeu a senha? Clique aqui.</a>
        </p>
        <LoginCriar/>

      </div>

    </b-card>
    <b-card v-if="$store.state.login===true">
      <h3>Olá {{$store.state.usuario.nome}} 😁</h3>
    </b-card>
     

  </section>
</template>

<script>
import LoginCriar from "@/components/LoginCriar.vue";

export default {
  name: "loginMD",
  components: {
    LoginCriar
  },
  data() {
    return {
      login: {
        email: "",
        senha: ""
      }
    };
  },
  methods: {
    logar() {

          this.$store.dispatch("getUsuario",this.login.email); // informa que tem um login
          //this.$router.push({name: "usuario"}); // envia para o router e consigo buscar 
      
    }
  }
};
</script>

<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}
h3 {
  text-align: center
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
