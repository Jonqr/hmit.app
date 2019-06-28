<template>
    <header>
        <nav variant="dark">

            <b-button lg="4" variant="light" bg-variant="ligth" to="/">
               <img src="https://img.icons8.com/nolan/28/000000/sort-left.png"> <b class="hm">HMIT</b>
            </b-button>

            

            <b-dropdown  to= "/usuario" v-if="$store.state.login ==true" dropleft variant="light " class=" border border-dark" :text="this.$store.state.usuario.cadastro.primeiroNome">
                <b-dropdown-item to="/usuario">Minha Conta</b-dropdown-item>
                <b-dropdown-item to="/lista">Buscar Projetos</b-dropdown-item>
                <b-dropdown-item to="/criarProjeto">Criar Projeto</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item @click.prevent="logOut" to= "/login">Sair</b-dropdown-item>
            </b-dropdown>

            <b-button v-else to="/login" variant="light " class="border border-dark">
            <img src="https://img.icons8.com/nolan/28/000000/happy.png"> Entrar</b-button>
        </nav>
    </header>
</template>

<script>

export default {
    name: "TheHeader",
    computed: {
        nome() {
            
            return this.$store.state.usuario.cadastro.primeiroNome.replace(/ .*/, ""); // só pega o primeiro nome OBS: Nao tem mutação 
        }
    },methods: {
        logOut(){
            this.$store.dispatch("deslogarUsuario");
            this.$router.push({ name: "login" });
}
    }
};
</script>

<style scoped>
header {
    background-color: rgba(32, 32, 32, 0.644);
}
nav {
    background-color: rgb(140,81,255);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    box-shadow: 0 2px 4px rgba(48, 48, 48, 0.1);
}
.hm {
    color: rgb(140,81,255);
    font-family: monospace;
    font-size: 1.4rem;
}
.logo {
    padding: 10px 0;
}
.logo h2 {
    color: rgb(255, 254, 254);
    width: 100px;
    font-family: fantasy;
}



</style>
