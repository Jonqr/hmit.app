<template>
<div>
    
    <ul v-if="paginasTotal > 1">
        <li v-for="pagina in paginas" :key="pagina">
            <router-link :to="{query: query(pagina)}">{{pagina}}</router-link>

        </li>
    </ul>
</div>
</template>

<script>
export default {
    props: {
        projetoPorPagina: {
            type: Number,
            defaut: 1
        },
        projetosTotal: {
            type: Number,
            defaut: 1
        }

    },
    computed: {
        paginas(){
            const current = Number(this.$route.query._page);
            const range = 5;
            const offset = Math.ceil(range /2);
            const total = this.paginasTotal;
            const pagesArray = [];

            for(let i = 1; i<= total; i++){
                pagesArray.push(i);
            }
            pagesArray.splice(0, current - offset);
            pagesArray.splice(range,total);
            return pagesArray;

        },
        paginasTotal(){
            const total = this.projetosTotal / this.projetoPorPagina;
            return (total !==Infinity ) ? Math.ceil(total):0; //se o valor total der infinito ele vai dar 0, se ele for valor normal ele faz o Math
            
            }
    },
    methods:{
        query(pagina) {
            return{
                _page: pagina
            }
        }
    }

};
</script>

<style>
ul{
    grid-column: 1 / -1;
}
li {
    display: inline-block;
}
li a {
    padding: 2px 8px;
    border-radius: 2px;
    margin: 4px;
}

li a.router-link-exact-active,
li a:hover {
    background: #87f;
    color: #fff;



}
</style>
