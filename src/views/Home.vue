<template>
  <section>
    <br><br>


    <div class="Apresentacao">
        <b-img  v-bind="mainProps" 
         src="https://scontent.fpoa4-1.fna.fbcdn.net/v/t1.0-9/64537484_2344774092465340_5296521251014049792_n.jpg?_nc_cat=107&_nc_oc=AQndZ6p_yYrVz6h4nhlPBVw7DhhEJqANRu9RCsRAH6nbrt3BRVEtFw3MDeNYMV8vm-FpuNgB9giPecJfV_riqPmy&_nc_ht=scontent.fpoa4-1.fna&oh=83d50df84b8a584864cce5120b453841&oe=5D78DD16" 
         fluid alt="Fluid image"></b-img>
    </div>

    <div>
      <b-container class="text-center">
        <b-row >
          <b-col>
            <div>
                 <h6><img src="https://img.icons8.com/nolan/64/000000/profit-analysis.png">"Encontre os melhores profissionais para executar seus projetos"</h6>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h6>"Monitore toda criação e execução de seus projetos"<img src="https://img.icons8.com/nolan/64/000000/networking-manager.png"></h6>
          </b-col>
        </b-row>
      </b-container>
    </div>
    

<br>
    <b-container class="bv-example-row">
        <b-row class="text-center">
          <b-col>
            <b-button pill to="criarProjeto" id="btnMain" class="btnMain w-75 p-4 border border-dark" variant="ligth">
                Click <b>AQUI</b> e comece a construir seu sonhado projeto!
            </b-button>
          </b-col>
      </b-row>
        <br>
        <b-row class="text-center">
            <b-col>
              <b-button pill to="lista" id="btnMain" class="btnMain w-75 p-4 border border-dark" variant="ligth">
                Click <b>AQUI</b> conheça os projetos esperando por um profissional !
            </b-button>
            </b-col>
        </b-row>
      </b-container>

  </section>
</template>

<script>

  
export default {
  name: 'home',
  data() {
    return{
              mainProps: { blank: false, blankColor: '#777', width: 500, height:500, class: 'm1' }

    }

  }
}
</script>

<style >
.btnMain {
  font-family: 'Courier New', Courier, monospace;
  font-size: large;
  font-style: oblique;
  font-synthesis: weight;
}
.btnMain:hover {
  font-family: 'Courier New', Courier, monospace;
  transform: scale(1.1);
  font-size: 1.8rem;
  font-style: italic;

}
.Apresentacao {
  background: #fff;
  background-color: #fff;
  text-align: center;
  color: rgba(red, rgb(64, 65, 64), blue, alpha);
}

</style>
