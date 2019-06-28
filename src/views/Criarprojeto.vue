<template>
<section>


    <b-card><b-progress :value="value" :max="max" class="mb-3" variant="dark" animated></b-progress></b-card>

    <b-card id="part1" v-if="value===0">
        <h1 class="head-1">Primeiro Passo : Plataforma</h1>
        <b-card class="bg-dark">
            <div class="titulo-1">
                <p>"Selecione uma das plataformas que você deseja criar seu projeto"</p>
                <h4 class="info-1">Selecione uma plataforma:</h4>
            </div>
        </b-card>
        <br>
        <b-container>
            <b-row>
                <b-col>
                    <button class="text-center w-100 p-5 h-100 p-3" @click.prevent="etapa1('App Mobile')">
                        <img src="https://img.icons8.com/nolan/64/000000/smartphone-tablet.png"><br>App Mobile
                    </button>
                </b-col>
                <b-col>
                    
                    <button class="text-center w-100 p-5 h-100 p-3" @click.prevent="etapa1('Desktop')">
                        <img src="https://img.icons8.com/nolan/64/000000/workstation.png"><br>Desktop
                    </button>
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col>
                    <button class="text-center w-100 p-5 h-100 p-3" @click.prevent="etapa1('Games')">
                        <img src="https://img.icons8.com/nolan/64/000000/controller.png"><br>Games
                    </button>
                </b-col>
               <b-col>
                    <button class="text-center w-100 p-5 h-100 p-3" @click.prevent="etapa1('Web Design')">
                        <img src="https://img.icons8.com/nolan/64/000000/web-design.png"><br>Web Design
                    </button> 
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col>
                    <button class="text-center w-100 p-5 h-100 p-3" @click.prevent="etapa1('App Mobile')">
                        <img src="https://img.icons8.com/nolan/64/000000/google-code.png"><br>Web Site
                    </button>
                </b-col>
                <b-col>
                    <button class="text-center w-100 p-5 h-100 p-3" @click.prevent="etapa1('App Mobile')">
                        <img src="https://img.icons8.com/nolan/64/000000/shopping-cart.png"><br>E commerce
                    </button>  
                </b-col>
            </b-row>
            <br>
            <b-row>
               <b-col>
                    <button class="text-center w-100 p-5 h-100 p-3" @click.prevent="etapa1('Logotipo')">
                        <img src="https://img.icons8.com/nolan/64/000000/edit.png"><br>Logotipo
                    </button> 
                </b-col>
                <b-col>
                    <button class="text-center w-100 p-5 h-100 p-3" @click.prevent="etapa1('Business Intelligence')">
                        <img src="https://img.icons8.com/nolan/64/000000/combo-chart.png"><br><b>B.I</b> Business intelligence
                    </button>
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col>
                    <button class="text-center w-100 p-5 h-100 p-3" @click.prevent="etapa1('Outro')">
                        <img src="https://img.icons8.com/nolan/64/000000/networking-manager.png"><br>Outro
                    </button>  
                </b-col>
            </b-row>
        </b-container>   
    </b-card>

    <b-card id="part2" v-if="value===1">
        <h1 class="head-1">Segundo Passo : Estado do Projeto</h1>
        <b-card class="bg-dark">
            <div class="titulo-1">
                <p>"Informe em que estado sua aplicação se encontra"</p>
                <h4 class="info-1">Selecione uma Opção:</h4>
            </div>
        </b-card>

        <b-card>
            <b-list-group>
                <b-list-group-item>
                    <b-button class="w-100 border border-secondary" variant="ligth" @click.prevent="etapa2('Criar Projeto do zero')">
                        <img src="https://img.icons8.com/nolan/64/000000/plus-2-math.png"> Criar Projeto do zero
                    </b-button>
                </b-list-group-item>
                <b-list-group-item>
                    <b-button class="w-100 border border-secondary" variant="ligth" @click.prevent="etapa2('Projeto está em andamento')">
                        <img src="https://img.icons8.com/nolan/64/000000/gears.png"> Aplicação está em andamento
                    </b-button>
                </b-list-group-item>
                <b-list-group-item>
                    <b-button class="w-100 border border-secondary" variant="ligth" @click.prevent="etapa2('Aplicação já está pronta')">
                        <img src="https://img.icons8.com/nolan/64/000000/checked-2.png"> Aplicação já está pronta
                    </b-button>
                </b-list-group-item>            
            </b-list-group>
            <b-list-group-item>
                    <b-button class="w-100 border border-secondary" variant="warning" @click.prevent="voltar">
                        <img src="https://img.icons8.com/nolan/64/000000/return.png"> Aplicação já está pronta
                    </b-button>
            </b-list-group-item>

        </b-card>

    </b-card>

    <b-card id="part3" v-if="value===2">
        <h1 class="head-1">Terceiro Passo : Especificações</h1>
        <b-card class="bg-dark">
            <div class="titulo-1">
                <p>"Informe o quanto de informações como funcionalidades, logo, layout você contêm"</p>
                <h4 class="info-1">Selecione uma opção:</h4>
            </div>
        </b-card>

        <b-card>
            <b-list-group>
                <b-list-group-item>
                    <b-button class="w-100 border border-secondary" variant="ligth" @click.prevent="etapa3('Apenas uma idéia')">
                        <img src="https://img.icons8.com/nolan/64/000000/light-on.png"> Apenas uma idéia
                    </b-button>
                </b-list-group-item>
                <b-list-group-item>
                    <b-button class="w-100 border border-secondary" variant="ligth" @click.prevent="etapa3('enho um rascunho ou design')">
                        <img src="https://img.icons8.com/nolan/64/000000/map-editing.png"> Tenho um rascunho, logotipo ou design
                    </b-button>
                </b-list-group-item>
                <b-list-group-item>
                    <b-button class="w-100 border border-secondary" variant="ligth" @click.prevent="etapa3('Tenho todas especificações')">
                        <img src="https://img.icons8.com/nolan/64/000000/edit-property.png"> Tenho todas especificações
                    </b-button>
                </b-list-group-item>            
            </b-list-group>
            <b-list-group-item>
                    <b-button class="w-100 border border-secondary" variant="warning" @click.prevent="voltar">
                        <img src="https://img.icons8.com/nolan/64/000000/return.png"> Voltar
                    </b-button>
            </b-list-group-item>

        </b-card>

    </b-card>

    <b-card id="part3" v-if="value===3">
        <h1 class="head-1">Terceiro Passo : Dados do Projeto</h1>
        <b-card class="bg-dark">
            <div class="titulo-1">
                <p>"Essa etapa é necessario informar o titulo para que seu projeto seja encontrado</p>
                <p>E descreva as funcionalidades ou especificações de como deveria funcionar sua aplicação"</p>

                <h4 class="info-1">Selecione uma opção:</h4>
            </div>
        </b-card>

        <b-card>
            <b-list-group>
                <b-list-group-item>
                    Dê um titulo para seu projeto : 
                </b-list-group-item>
                <b-list-group-item>
                    <b-input-group class="mt-3">
                        <b-input-group-text slot="append" ><strong class="text-danger">!</strong></b-input-group-text>
                        <b-form-input v-model="projeto.titulo" placeholder="Exemplo : Aplitivo de telefone para ler mensagens"></b-form-input>
                    </b-input-group>
                </b-list-group-item>

                <b-list-group-item>
                    Descreva seu projeto : 
                </b-list-group-item>
                <b-list-group-item>
                    <div>
                        <b-form-textarea
                        id="textarea-rows"
                        placeholder="Exemplo: Preciso de um aplicativo para ler mensagens
                        *Precisa lêr mensagens
                        *Precisa entender as mensagens"
                        rows="8"
                        v-model="projeto.descricao"
                        ></b-form-textarea>
                    </div>
                </b-list-group-item>
                <b-list-group-item>
                      <b-alert v-if="validate===false" show variant="danger">Erro - Campo não preenchido, favor informe o titulo e descrição do projeto</b-alert>
                </b-list-group-item>

            </b-list-group>
            <b-list-group-item>
                    <b-button  class="w-100 border border-secondary" variant="warning" @click.prevent="etapa4">
                        <img src="https://img.icons8.com/nolan/64/000000/checked-2.png"> Avançar
                    </b-button>
            </b-list-group-item>
            <b-list-group-item>
                    <b-button class="w-100 border border-secondary" variant="warning" @click.prevent="voltar">
                        <img src="https://img.icons8.com/nolan/64/000000/return.png"> Voltar
                    </b-button>
            </b-list-group-item>
        </b-card>
    </b-card>

    <b-card id="part3" v-if="value===4">
        <h1 class="head-1">Quarto Passo : Orçamento e Prazo</h1>
        <b-card class="bg-dark">
            <div class="titulo-1">
                <p>"Essa etapa você passará um orçamento média de quanto está disponivel para investir no seu projeto</p>
                <p>E dê um prazo médio de entrega"</p>

                <h4 class="info-1">Selecione uma opção:</h4>
            </div>
        </b-card>

        <b-card>
            <b-list-group>
                <b-list-group-item>
                    Orçamento Inicial: 
                </b-list-group-item>
                <b-list-group-item>
                    <b-input-group prepend="$" append=".00">
                        <b-form-input placeholder="3000" v-model="projeto.orcamento.inicial"></b-form-input>
                    </b-input-group>
                </b-list-group-item>
                <b-list-group-item>
                    Orçamento Final: 
                </b-list-group-item>
                <b-list-group-item>
                    <b-input-group prepend="$" append=".00">
                        <b-form-input placeholder="3000" v-model="projeto.orcamento.final"></b-form-input>
                    </b-input-group>
                </b-list-group-item>
                <br>
                <b-list-group-item class="text-center">
                   <b-form-checkbox
                    id="checkbox-1"
                    v-model="projeto.orcamento.negociavel"
                    name="checkbox-1"
                    value=true
                    unchecked-value=false>
                        <h5>Orçamento é negociavel ?</h5>
                    </b-form-checkbox>
                </b-list-group-item>
                <br><br>
                <b-list-group-item>
                    Selecione o prazo geral para seu projeto
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-select v-model="projeto.prazo.dias" class="mb-3">
                        <optgroup label="Prazo entregal">
                            <option value="7">1 semana</option>
                            <option value="14">2 semanas</option>
                            <option value="21">3 semanas</option>
                        </optgroup>
                        <optgroup label="Prazo mensal">
                            <option value="28">1 mês</option>
                            <option value="56">2 meses</option>
                            <option value="84">3 meses</option>
                            <option value="112">4 meses</option>
                            <option value="140">5 meses</option>
                        </optgroup>
                        <optgroup label="Prazo Semestral">
                            <option value="168">1 semestre</option>
                            <option value="336">2 semestres</option>
                        </optgroup>
                    </b-form-select>                        
                </b-list-group-item>
                <b-list-group-item>
                   <b-form-checkbox
                    id="checkbox-2"
                    v-model="projeto.prazo.negociar"
                    name="checkbox-2"
                    value=true
                    unchecked-value=false>
                        <h5>Prazo é negociavel ?</h5>
                    </b-form-checkbox>
                </b-list-group-item>
                <b-list-group-item>
                      <b-alert v-if="aviso.state===true" show variant="danger">{{aviso.message}}</b-alert>
                </b-list-group-item>

            </b-list-group>
            <b-list-group-item>
                    <b-button  class="w-100 border border-secondary" variant="warning" @click.prevent="etapa5">
                        <img src="https://img.icons8.com/nolan/64/000000/checked-2.png"> Avançar
                    </b-button>
            </b-list-group-item>
            <b-list-group-item>
                    <b-button class="w-100 border border-secondary" variant="warning" @click.prevent="voltar">
                        <img src="https://img.icons8.com/nolan/64/000000/return.png"> Voltar
                    </b-button>
            </b-list-group-item>
        </b-card>
    </b-card>

    <b-card v-if="value===5" id="" class="items-center">
        <b-card>
            <b-card-title class="text-center">
                Vamos finalizar ?
                <img src="https://img.icons8.com/nolan/64/000000/finish-flag.png">
            </b-card-title>

            <b-card bg-variant="ligth">
                <b-card-sub-title>
                    Você gostaria de ter acesso ao progresso sobre seu projeto ?
                </b-card-sub-title>
                <div>
                    <br>
                    <b-form-group>
                        <b-row>
                            <b-col>
                                <b-form-radio v-model="projeto.gerenciamento.ativo" name="some-radios" value=sim>Sim, gostaria !</b-form-radio>
                            </b-col>
                            <b-col>
                                <b-form-radio v-model="projeto.gerenciamento.ativo" name="some-radios" value=nao>Não tenho interesse !</b-form-radio>
                            </b-col>
                        </b-row>
                    </b-form-group>
                </div>
            </b-card>
            <br>
            <b-card bg-variant="ligth" v-if="projeto.gerenciamento.ativo ==='sim'">
                <b-card-sub-title>
                    Você dejeja que as entregas dos componentes do seu projeto sejam mostrados por periodos ? 
                </b-card-sub-title>
                <div>
                    <br>
                <b-list-group-item>
                    <b-form-select v-model="projeto.gerenciamento.etapas" class="mb-3">
                        <optgroup label="Prazo semanal">
                            <option value="1">1 entrega</option>
                            <option value="2">2 entregas</option>
                            <option value="3">3 entregas</option>
                            <option value="3">4 entregas</option>
                            <option value="3">5 entregas</option>
                            <option value="3">6 entregas</option>
                        </optgroup>
                    </b-form-select>                        
                </b-list-group-item>
                </div>
            </b-card>
            <br>

                <b-card :header="projeto.titulo">
                <b-row>
                    <b-col id="descricao e estrutura">
                        <b-card header="Descrição do projeto:">
                            {{projeto.descricao}}
                        </b-card><br>
                        <b-row>
                            <b-col>
                                <b-list-group-item>Plataforma: {{projeto.estrutura.plataforma}}</b-list-group-item>
                                <b-list-group-item>Estado: {{projeto.estrutura.estado}}</b-list-group-item>
                                <b-list-group-item>Especificações: {{projeto.estrutura.especificacao}}</b-list-group-item>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col id="orçamento">
                        <b-card header="Orçamento e Prazo">
                            <b-card-sub-title>
                                Orçamento previsto: R$: {{projeto.orcamento.inicial}},00 até R${{projeto.orcamento.final}},00 
                            </b-card-sub-title><br>
                          
                            <b-alert v-if="projeto.orcamento.negociavel==='true'" show variant="info">O <b>orçamento</b> é negociavel</b-alert>
                            <b-alert v-if="projeto.orcamento.negociavel==='false'" show variant="info">O <b>orçamento</b> não negociavel</b-alert>
                            <br>
                            <b-card-sub-title>
                             Prazo para entrega de <b>{{projeto.prazo.dias}}</b> dias
                            </b-card-sub-title><br>
                            <b-alert v-if="projeto.prazo.negociar==='true'" show variant="info">O <b>prazo</b> é negociavel</b-alert>
                            <b-alert v-if="projeto.prazo.negociar==='false'" show variant="info">O <b>prazo</b> não é negociavel</b-alert>
                        </b-card>

                    </b-col>
                </b-row>
                <br>

                <b-card>
                    <b-list-group-item>

                        <b-button v-if="$store.state.login===false" class="w-100 border border-secondary" variant="success" v-b-modal.modal-1>
                            <img src="https://img.icons8.com/nolan/64/000000/checked-user-male.png"> Entre e crie seu projeto!
                        </b-button>
                        <b-modal id="modal-1" hide-footer hide-header>
                            <login/>
                        <b-button class="mt-3" variant="ligth border-dark" block @click="$bvModal.hide('modal-1')">Fechar</b-button>
                        </b-modal>

                        <b-button v-if="$store.state.login===true" class="w-100 border border-secondary"  variant="success" @click.prevent="etapa6">
                            <img src="https://img.icons8.com/nolan/64/000000/checked-2.png"> Criar Projeto
                        </b-button>

                        </b-list-group-item>
                        <b-list-group-item>
                        <b-button class="w-100 border border-secondary" variant="warning" @click.prevent="voltar">
                            <img src="https://img.icons8.com/nolan/64/000000/return.png"> Voltar
                        </b-button>
                    </b-list-group-item> 
                </b-card>
                   
                 
                </b-card>
        </b-card>
    </b-card>

</section>
</template>

<script>
import login from "@/components/Modals/LoginMD.vue";

export default {
name: "criarProjeto",
    data(){
        return{
            aviso:{
                state:false,
                message: ""
            },
            validate: true,
            max:5,
            value: 0,
            projeto:{
                autor:"",
                titulo:"",
                descricao:"",
                estrutura:{
                    plataforma:"",
                    estado:"",
                    especificacao:""
                },
                orcamento:{
                    negociavel: "",
                    inicial:null,
                    final:null
                },
                prazo: {
                    dias:"",
                    negociar:""
                },
                gerenciamento:{
                    ativo: "",
                    etapas: ""
                },contratado: false,
                propostas: 0

            }
        }
    },

    components:{
        login
    },
    methods: {
        voltar(){
            this.value --;
            this.validate=true;
        },
        etapa1(val){
            this.value = 1;
            this.projeto.estrutura.plataforma = val;
        },
        etapa2(val){
            this.value = 2;
            this.projeto.estrutura.estado = val;
        },
        etapa3(val){
            this.value=3;
            this.projeto.estrutura.especificacao = val;

        },
        etapa4(){
            if(this.projeto.titulo.length>3 && this.projeto.descricao.length>3){
                this.validate=true;
                this.value =4;
            }else{
                this.validate=false;
            }
        },
        etapa5(){
            if(this.projeto.orcamento.inicial.length >2 && this.projeto.orcamento.final.length>2){
                    if(this.projeto.orcamento.inicial<= this.projeto.orcamento.final){
                                        this.value =5
                                        this.projeto.autor = this.$store.state.usuario.email;
                    }else{
                        this.aviso.state = false;
                        this.aviso.message = " Erro Orçamento inicial é maior que o final"
                    }
            this.value =5  
            }else{
                this.aviso=true;
                this.aviso.message = "Erro - Campos vazios, verifique se algum campo não foi correspondido! "
            }
        },
        async etapa6(){ 
        await this.$store.dispatch("criarProjeto", this.projeto);
        
        this.$router.push({name: "lista"});
        },
        
    }
}
</script>

<style>

.head-1 {
    text-align: center;

}
.titulo-1, .info-1{
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
    color: #ffffff;
}

</style>
