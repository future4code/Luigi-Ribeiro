import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    valorNome: "",
    valorEmail: ""
  }
  onChangeNome = (event) => {
    this.setState({valorNome:event.target.value})
  }
  onChangeEmail = (event) => {
    this.setState({valorEmail:event.target.value})
  }
  render(){
    return (
      <div className="App">
        <button>Cadastrar/Cadastrados</button>
        <div>
          <label>Nome</label>
          <input type="text"
          value={this.state.valorNome}
          onChange={this.onChangeNome}
          ></input>


          <label>Email</label>
          <input type="email"
          value={this.state.valorEmail}
          onChange={this.onChangeEmail}
          ></input>
        </div>
      </div>
    );
  }
}
export default App;
