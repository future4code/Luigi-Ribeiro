import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state ={
    posts:[
      {
        nomeUsuario:"Paulinha",
        fotoUsuario:"https://picsum.photos/50/50?ramdom=1",
        fotoPost:"https://picsum.photos/200/150?ramdom=1"
      },
      {
        nomeUsuario:"Paulinha",
        fotoUsuario:"https://picsum.photos/50/50?ramdom=2",
        fotoPost:"https://picsum.photos/200/150?ramdom=2"
      },
      {
        nomeUsuario:"Pedro",
        fotoUsuario:"https://picsum.photos/50/50?ramdom=3",
        fotoPost:"https://picsum.photos/200/150?ramdom=3"
      }
    ]
  }
  render() {
    const listaDePosts = this.state.posts.map((post) => {
    
    return <post> 
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        </post>
      
    
    
    });
    return (
      <MainContainer>

        {listaDePosts}
        
      </MainContainer>
    );
  }
}

export default App;
