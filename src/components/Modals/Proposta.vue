<template>
 <section >

   <b-card v-if="finalizado ===true">
     <h5>Proposta Enviada com sucesso !</h5>
   
    </b-card>

  <form v-if="finalizado ===false">
    <div class="proposta">
      <div id="tituloProjeto">
       <b-container >
        <b-row>
          <b-col class="">
            <b-card>
              <h5>Projeto: {{$store.state.projeto.titulo}}</h5>
            </b-card>
            <br>
          </b-col>
        </b-row>
      </b-container>
      </div>

      <div id="descricaoProposta" class="m-3">
      <p>Descreva sua Proposta: </p>
      <b-form-textarea
        id="textarea"
        v-model="proposta.info.descricao"
        placeholder="Descrição de proposta..."
        rows="3"
        max-rows="6"
      >
      </b-form-textarea>
      </div>

      <div id="OrçamentoProposta" class="m-3">
      <label for="">Orçamento</label>
      <b-input-group size="lg" prepend="R$" append=".00">
        <b-form-input v-model="proposta.info.orcamento" placeholder="1250"></b-form-input>
      </b-input-group>
      <b-alert v-if=" !isNaN(this.proposta.info.orcamento)===false && !this.proposta.info.orcamento.length ==0" show variant="danger"><a href="#" class="alert-link"> O campo de custo aceita apenas numeros !</a></b-alert>
      </div>

      <div id="prazoProposta">
      <label for="">Prazo</label>
      <b-form-select v-model="proposta.info.prazo.dias" class="mb-3">
        <optgroup label="Prazo semanal">
          <option value="7">1 semana</option>
          <option value="14">2 semanas</option>
          <option value=" 21">3 semanas</option>
        </optgroup>
        <optgroup label="Prazo mensal">
          <option value="28">1 mês</option>
          <option value="56">2 meses</option>
          <option value=" 84">3 meses</option>
          <option value=" 112">4 meses</option>
          <option value=" 140">5 meses</option>
        </optgroup>
        <optgroup label="Prazo Semestral">
          <option value="168">1 semestre</option>
          <option value="336">2 semeestres</option>
        </optgroup>
      </b-form-select>
      </div>
      <br>
      <div>
        <div>
        <b-alert show variant="danger"  v-if="avisos.status ===true">Deu erro{{avisos.erro}}</b-alert>
        </div>
          <b-button class="border border-dark w-100 p-4" variant="success" @click.prevent="enviarProposta">Enviar</b-button>
    </div>
    
    </div>
  <div v-if="$store.state.projeto.gerenciamento.ativo==='sim'" class="Gerencimaneto">
    <br>
  <b-alert show variant="info">Projeto necessita de {{$store.state.projeto.gerenciamento.etapas}} entregas de desenvolvimento</b-alert>
  <br>
  
  </div>
{{proposta.projeto}}  
  </form>
  </section>
</template>

<script>
export default {
    data(){
        return{
           
            index: "",
            texts: "",
            proposta: {
                autor: this.$store.state.usuario._id,
                projeto: this.$store.state.projeto._id,
                info:{
                  descricao: "",
                  orcamento: "",
                  prazo: { 
                    dias:""
                    }
                },
                gerenciamento:{
                  ativo: false,
                  entregas: []
                },
                ativo: false,
                status:{
                  aceito: false,
                  aguardando:true,
                }
            },
            avisos:{
              status: false,
              erro: "",
              sucesso: ""
            },
            finalizado:false,

             
        }
    },methods: {
        
        enviarProposta(){
          const dado = this.$store.state.usuario._id;
          const dado2 = this.$store.state.projeto.autor;
        
          if(dado != dado2){
              if(this.proposta.info.descricao){

                this.$store.dispatch("criarProposta",this.proposta);
                this.finalizado = true;
                
              }else{
                this.avisos.status = true
                this.avisos.erro = " Campo descrição vazio, informe o a descrição de sua proposta";
              }
              

          }else{
            this.avisos.status = true;
            this.avisos.erro = ": Não é possivel enviar proposta se o projeto foi criado por você !"
          }

          
 //         v-if="!isNaN(this.custo)===false && this.tituloProposta.length>2 && this.descricaoPorposta.length > 2 && this.custo.length>2 && this.prazoInicial.length>2" 
        }
        
    }

}

</script>

<style scoped>

</style>
