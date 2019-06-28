<template>
    <b-container >
        <b-row class="m-3   w-100">
            <b-col>
                    <b-form-input v-model="busca" placeholder="Faça uma busca "></b-form-input>
            </b-col>
            <b-col>
                <b-button  class="border border-dark" v-model="busca" variant="ligth" @click.prevent="buscarProjetos">Buscar 🔎</b-button>
            </b-col>
        </b-row>
        
    </b-container>

    
</template>

<script>
export default {
    /*
    



    */
    data() {
        return {
            busca:"",
            };
    },methods: {
        buscarProjetos(){
            this.$router.push({query: {q:this.busca}});
        }
    }
};
</script>

<style>
    form {
        max-width: 500px;
        margin: 30px auto 60px auto;
        position: relative;
    }
    #busca {
        width: 100%;
        padding: 20px;
        border: none;
    }
    #busca:hover,
    #busca:focus {
        transform: scale(1.1);
    }
    #lupa {
        width: 62px;
        height: 62px;
        background: url("../assets/search.svg") no-repeat center center;
        text-indent: -150px;
        border: none;
        cursor: pointer;
        position: absolute;
        top: 0px;
        right: 0px;
        box-shadow: none;
    }

</style>
