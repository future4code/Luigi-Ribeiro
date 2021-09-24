
import './App.css';

import axios from 'axios';
import React from 'react';

export default class App extends React.Component{
    state = {
      missoes : []

    }
    componentDidMount() {
      this.pegarMissoes();
    }
    pegarMissoes = () =>
    {
      axios.get ("https://api.spacexdata.com/v3/missions")
      .then((res) =>{
        this.setState({missoes: res.data})
      })
      .catch((erro) => {
        alert(erro)
      })
    
    }
    render(){
      const cardsMissoes = this.state.missoes.map((missao) => {
        return(
          <div key= {missao.mission_id}>
            <p>Nome da missão: {missao.mission_name}</p>
            <p>Fabricante: {missao.manufacturers.map((manufacturer) => <p>{manufacturer}</p>)}</p>
            <a href={missao.wikipedia}>Link para saber mais</a>
            <hr/>
          </div>
        )
      })

    return (
      <div>
        <h1>Lista de missões</h1>
        {cardsMissoes}
      </div>
    );
  }
}


