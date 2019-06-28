<template>
<section>

    <!-- Meus Projetos-->
    <b-card>
        <b-button class="w-100 border border-dark p-3" variant="ligth" v-b-toggle.collapse-1>
            <h4>Meus Projetos <b-badge variant="warning" pill>14</b-badge></h4>
        </b-button>
    </b-card>
    <b-collapse id="collapse-1">
        <b-card>
        <br>
        <b-list-group>
            <b-list-group-item 
            v-b-toggle.collapse-2
            href="#" 
            class="d-flex justify-content-between align-items-center">


            <b-badge variant="primary" pill>14</b-badge>
            <h5>Title Project blablabla</h5> 
            <img src="https://img.icons8.com/color/48/000000/plus.png">        
            </b-list-group-item>
        </b-list-group>
        <b-collapse id="collapse-2" class="mt-2">
                <p>aoaoasoaso</p>
        </b-collapse>
    </b-card>
    </b-collapse>
</section>
</template>

<script>
export default {

}
</script>

<style>

</style>
