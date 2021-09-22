import logo from './logo.svg';
import React from 'react';
import './App.css';
import axios from "axios";

const headers = {
  headers: {
    Authorization: "luigi-ferreira-maryam"
  }
};




class App extends React.Component {
  state = {
    valorNome: "",
    valorEmail: "",
    usuarios: [],
  }
  componentDidMount() {
    this.getAllUsers();
  }
  getAllUsers = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    axios
      .get(url, headers)
      .then((res) => {
        
        this.setState({ usuarios: res.data.result.list});
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  
  creatUsers = () =>
  {const url =
    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
  
  const body = {
    name: this.state.valorNome,
    email: this.state.valorEmail

    
  };
  
  axios
    .post(url, body, headers)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      alert(err.response.data.message);
    });

    this.setState({valorEmail:"" , valorNome:""})
  };
  
  onChangeNome = (event) => {
    this.setState({valorNome:event.target.value})
  }
  onChangeEmail = (event) => {
    this.setState({valorEmail:event.target.value})
  }
  render(){
    
    const usuariosListados = this.state.usuarios.map((user) =>{
      return <li key={user.id}>{user.name}</li>
    });
    return (
      <div className="App">
        <button onClick= {this.getAllUsers}>Cadastrar/Cadastrados</button>
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

          <button onClick= {this.creatUsers}>Enviar</button>
        </div>
        <div>{}</div>
        
      </div>
    );
  }
}
export default App;
