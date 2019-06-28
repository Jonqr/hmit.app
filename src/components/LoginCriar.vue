<template>
  <section>
    <h2>Cadastre-se</h2>
    <transition mode="out-in">
    <button v-if="!criar" class="btn" @click="criar = true"> Criar Conta</button>
    <usuarioForm v-else>
      <div class="btt">
              <button class="btn btn-form" @click.prevent="criarUsusario">Criar Usuario</button>
      </div>
    </UsuarioForm>
    </transition>
  </section>
</template>

<script>
import UsuarioForm from "@/components/UsuarioForm.vue"

export default {
  name: "LoginCriar",
  components: {
    UsuarioForm
  },
  data() {
    return {
      criar: false
    }
  },methods:{
    async criarUsuario(){
      await this.$store.dispatch("criarUsuario", this.$store.state.usuario);
      await this.$store.dispatch("getUsuario", this.$store.state.usuario.email);
      this.$router.push({name: "usuario"})
    
      
    }
  }
};
</script>

<style scoped>
.btt{
  align-items: center;
}
h2{
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
}
.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}
.btn-form {
  width: 1250px;
  max-width: 100px;
  margin-top: 20px;
  
}
</style>
