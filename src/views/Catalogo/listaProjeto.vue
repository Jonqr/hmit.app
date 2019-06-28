<template>
  <section>
    <h1>Projetos👀</h1>
    <CatalogoBusca/>
    <Catalogo/>
  </section>
</template>

<script>

  import CatalogoBusca from "@/components/CatalogoBusca.vue";
  import Catalogo from "@/components/Catalogo.vue";
  
export default {
  name: 'lista',
  components: {
    Catalogo,
    CatalogoBusca,
  }
}
</script>

<style>
h1 {
  color: rgb(54, 54, 54);
  margin-top:40px;
  font-size: 2rem;
  text-align: center;
}
</style>
