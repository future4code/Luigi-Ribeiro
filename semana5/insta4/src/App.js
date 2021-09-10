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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50?ramdom=2'}
          fotoPost={'https://picsum.photos/200/150?ramdom=3'}
        />
        <Post
          nomeUsuario={'Pedro'}
          fotoUsuario={'https://picsum.photos/50/50?ramdom=1'}
          fotoPost={'https://picsum.photos/200/150?random=2'}
        />
        <Post
          nomeUsuario={'Joana'}
          fotoUsuario={'https://picsum.photos/50/50?ramdom=3'}
          fotoPost={'https://picsum.photos/200/150?ramdom=1'}
        />
      </MainContainer>
    );
  }
}

export default App;
