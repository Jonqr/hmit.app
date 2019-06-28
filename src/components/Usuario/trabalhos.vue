<template>
    <section>
        <b-card>
            
            <div>
                <h5>Primeira Entrega</h5>
                <p>Descreva o que vai ser entregue nessa etapa;</p>
                <b-form-textarea
                id="textarea"
                v-model="text"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
                ></b-form-textarea>
            </div>
            <div>
                <h5>Segunda Entrega</h5>
                <p>Descreva o que vai ser entregue nessa etapa;</p>

                <b-form-textarea
                id="textarea"
                v-model="text"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
                ></b-form-textarea>
            </div>
            <div>
                <h5>Terceira Entrega</h5>
                <p>Descreva o que vai ser entregue nessa etapa;</p>
                <b-form-textarea
                id="textarea"
                v-model="text"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
                ></b-form-textarea>
            </div>
            <div>
                <h5>Quarta Entrega</h5>
                <p>Descreva o que vai ser entregue nessa etapa;</p>

                <b-form-textarea
                id="textarea"
                v-model="text"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
                ></b-form-textarea>
            </div>
            <div>
                <h5>Quinta Entrega</h5>
                <p>Descreva o que vai ser entregue nessa etapa;</p>
                <b-form-textarea
                id="textarea"
                v-model="text"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
                ></b-form-textarea>
            </div>
            <div>
                <h5>Sexta Entrega</h5>
                <p>Descreva o que vai ser entregue nessa etapa;</p>

                <b-form-textarea
                id="textarea"
                v-model="text"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
                ></b-form-textarea>
            </div>
        </b-card>





    </section>
</template>

<script>
export default {
    data(){
        return{
            text: ""
        }
    }

}
</script>

<style>

</style>
