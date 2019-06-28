import Vue from "vue";
import Vuex from "vuex";
import { api } from "@/services.js";
Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    login: false,
    usuario: {
          cadastro: {
            primeiroNome: "",
            sobreNome: "",
          },
          _id:"",
          email: "",
          senha: "",
    },
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
  },err:"",
  },
  mutations: {
    ERROR(state,payload){
      state.err = payload;
    },
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload) {
      state.usuario = Object.assign(state.usuario, payload);
    },

    UPDATE_PROJETO(state, payload){
      state.projeto = Object.assign(state.projeto, payload)
    }
    
  },
  actions: {
    criarProposta(context, payload){
      api.post("/proposta",payload);
    },
    criarProjeto(context,payload) {
      context.commit("UPDATE_PROJETO", payload);
      api.post("/projeto",payload);
    },
    getProjeto(context,payload){
      api.get(`/projeto/${payload}`).then(res=>{
        context.commit("UPDATE_PROJETO", res.data);
      })
    
    },
    excluirProposta(data){
      api.delete(`/proposta/${data}`);
    },
    atualizarProposta(context,payload){
   
    api.put(`/proposta/${payload._id}`, payload);

    },
    criarUsuario(context, payload) {
      api.post("/usuario", payload).catch(error =>{
        context.commit("ERROR", error);
      });
      context.commit("UPDATE_USUARIO", payload.email);
    },
     atualizarUsuario(context,payload){
      api.put(`/usuario/${this.state.usuario._id}`, payload);
      context.commit("UPDATE_USUARIO", this.state.usuario._id);

    },
    getUsuario(context, user) {
      api.get(`/usuario/${user}`).then(response => {
          context.commit("UPDATE_USUARIO", response.data);
          context.commit("UPDATE_LOGIN", true);
    }).catch(error =>{
      context.commit("ERROR", error);
    });
    },
    removerProjeto(context){
      context.commit("UPDATE_PROJETO",{
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
      )
    },
    deslogarUsuario(context) {
      context.commit("UPDATE_USUARIO", {
        usuario: {
          cadastro: {
            primeiroNome: "",
            sobreNome: "",
        },
        _id: "",
        email: "",
        senha: "",
        }
      });
      context.commit("UPDATE_LOGIN", false);
    }
  }
});
