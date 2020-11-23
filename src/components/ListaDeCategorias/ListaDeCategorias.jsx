import React, { Component } from "react";
import "./estilo.css";
//import { ReactComponent as DeleteSVG1 } from "../../assets/delete_outline.svg";
import { ReactComponent as DeleteSVG } from "../../assets/delete.svg";

class ListaDeCategorias extends Component {
  handleEventoInput(e) {
    if (e.key === "Enter") {
      let valorCategoria = e.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }
  apagarCategoria() {
    const indice = this.props.indice;
    this.props.deletarCategoria(indice);
  }
  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.categorias.map((categoria, index) => {
            return (
              <li className="lista-categorias_item" key={index}>
                <section>
                  <header className="card-categoria">
                    {categoria}
                    <DeleteSVG onClick={this.apagarCategoria.bind(this)} />
                  </header>
                </section>
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Categoria"
          onKeyUp={this.handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
