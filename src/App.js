import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias/ListaDeCategorias.jsx"
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  constructor(){
    super();
   
    //Se não existir nada no local storage, novo array é iniciado
    if(!JSON.parse(localStorage.getItem("array"))){
      this.state = {
        notas: [],
        categorias: JSON.parse(localStorage.getItem("categoria"))
      }
    }else if(!JSON.parse(localStorage.getItem("categoria"))){
      this.state = {
        notas: JSON.parse(localStorage.getItem("array")),
        categorias: [],
      }
    }
    else if(!JSON.parse(localStorage.getItem("array")) && !JSON.parse(localStorage.getItem("categoria"))){
      this.state = {
        notas: [],
        categorias: [],
      }
    }
    //Caso contrario, pega todas as notas do local storage.
    else{
      this.state = {
        notas: JSON.parse(localStorage.getItem("array")),
        categorias: JSON.parse(localStorage.getItem("categoria"))
      }
    }
   
  }
  criarNota(titulo,texto,categoria){
    const novaNota = {
      titulo,
      texto,
      categoria
    };
    const novoArrayNotas = [...this.state.notas,novaNota]
    
    //Json aux para salvar um objeto no local storage
    var jsonAux = JSON.stringify(novoArrayNotas);
    
    //Salvar no local storage
    localStorage.setItem("array",jsonAux)
    
    const novoEstado = {
      notas:novoArrayNotas
    }

    this.setState(novoEstado)
  }
  adicionarCategoria(nomeCategoria){
    const novoArrayCategoria = [...this.state.categorias, nomeCategoria];

    //Json aux para salvar um objeto no local storage
      var jsonAux = JSON.stringify(novoArrayCategoria);

      //Salvar no local storage
      localStorage.setItem("categoria", jsonAux);
      const novoEstado = {...this.state,categorias:novoArrayCategoria}

      this.setState(novoEstado);
  }
  deletarNota(index){
    let arrayNotas = this.state.notas;

    arrayNotas.splice(index,1)

    //Json aux para salvar um objeto no local storage
    var jsonAux = JSON.stringify(arrayNotas);
    
    //Salvar no local storage
    localStorage.setItem("array",jsonAux)

    this.setState({notas:arrayNotas})
  }
  apagarCategoria(index){
    let arrayCateg = this.state.categorias;

    arrayCateg.splice(index,1)
    //Json aux para salvar um objeto no local storage
    var jsonAux = JSON.stringify(arrayCateg);
    
    //Salvar no local storage
    localStorage.setItem("categoria",jsonAux)

    this.setState({categorias:arrayCateg})

  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
        categorias={this.state.categorias}
        criarCard={this.criarNota.bind(this)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
          deletarCategoria={this.apagarCategoria.bind(this)}
          adicionarCategoria={this.adicionarCategoria.bind(this)}
          categorias={this.state.categorias}/>
          <ListaDeNotas 
          apagarNota={this.deletarNota.bind(this)}
          notas={this.state.notas}/>
        </main>
      </section>
    );
  }
}

export default App;
