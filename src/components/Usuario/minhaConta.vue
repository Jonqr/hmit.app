<template>
<section>
<b-container>
  <b-card class="">
      <b-card class="w-100">
            <b-row class="align-items-center" >
                <b-col >

                    <label class=" ">Nome:</label>
                    <b-form-input v-model="usuario.cadastro.primeiroNome" class=" p-4 w-100" :placeholder="$store.state.usuario.cadastro.primeiroNome"></b-form-input><br>
                    <label class=" ">Sobrenome:</label>
                    <b-form-input v-model="usuario.cadastro.sobreNome" class=" p-4 w-100" :placeholder="$store.state.usuario.cadastro.sobreNome"></b-form-input><br>
                    <label class=" ">E-mail:</label>
                    <b-form-input v-model="usuario.email" class=" p-4 w-100" :placeholder="$store.state.usuario.email"></b-form-input><br>
                    <label class=" ">Senha:</label>
                    <b-form-input v-model="usuario.senha" type="password" class=" p-4 w-100" placeholder="*******"></b-form-input><br>
                </b-col>

              </b-row>
              <b-button class="w-100 border-dark p-3" variant="ligth" @click.prevent="atualizar">Atualizar</b-button>
      </b-card>
  </b-card>
</b-container>


</section>
</template>

<script>

export default {
  name: "minhaConta",
  data(){
    return {
      usuario: {
          cadastro: {
            primeiroNome: "",
            sobreNome: "",
          },
          email: "",
          senha: "",
    },
      mainProps: { blank: true, blankColor: '#777', width: 260, height: 260, class: 'm1' }
    }
  },
  methods: {
    atualizar(){
      
    }
  
    
  }

};
</script>

<style scoped>
h3,h5 {
  text-align: center;
}

</style>

