import React from 'react';
import './App.css';
import './componentes/etapa1'
import Etapa1 from './componentes/etapa1';
import Etapa2 from './componentes/etapa2';
import Etapa3 from './componentes/etapa3';
import EtapaFinal from './componentes/etapafinal';




class App extends React.Component {
  state={
  etapa:1
  };

  onClickProximo = () =>{
    const valorEtapa = this.state.etapa;
    const proximaEtapa=valorEtapa+1;

    this.setState({etapa:proximaEtapa});

  }

  renderizaEtapa =() =>
  {
    let etapa = this.state.etapa
    switch (etapa) {
      case 1:
        return <div>
        <Etapa1/>
        <button onClick={this.onClickProximo}>Próxima etapa</button>
        </div>; 
        
      case 2:
        return <div>
        <Etapa2/>
        <button onClick={this.onClickProximo}>Próxima etapa</button>
        </div>;
      case 3:
        return <div>
        <Etapa3/>
        <button onClick={this.onClickProximo}>Próxima etapa</button>
        </div>;
      case 4:
        return <EtapaFinal/>;
    }
  }
  render() {
    return(
    <div>
      <header className="App-header">

        
        {this.renderizaEtapa()}
        
        
        
        
      </header>
    </div>
    )
  }
}

export default App;
