import React, { Component, Fragment } from "react";
import Item from "./Item";

class List extends Component {
  state = {
    itens: [],
    newItens: []
  };

  componentDidMount() {
    const itens = localStorage.getItem("itens");
    if (itens) {
      this.setState({ itens: JSON.parse(itens) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.itens !== this.state.itens) {
      localStorage.setItem("itens", JSON.stringify(this.state.itens));
    }
  }

  handleInputChenges = e => {
    this.setState({ newItens: e.target.value });
  };

  handleAdd = () => {
    this.setState({
      itens: [...this.state.itens, this.state.newItens],
      newItens: ""
    });
  };

  handleDelete = item => {
    this.setState({ itens: this.state.itens.filter(i => i !== item) });
  };

  render() {
    return (
      <Fragment>
        <ul>
          {this.state.itens.map(item => (
            <Item
              key={item}
              item={item}
              onDelete={() => this.handleDelete(item)}
            />
          ))}
        </ul>
        <input
          type="text"
          placeholder="Adcione um novo item"
          onChange={this.handleInputChenges}
          value={this.state.newItens}
        />
        <button onClick={this.handleAdd}>Cadastrar</button>
      </Fragment>
    );
  }
}

export default List;
