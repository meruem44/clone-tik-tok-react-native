import React from 'react';

import { Container, User, UserName, Description, Music } from './styles';

import { AntDesign, Feather } from '@expo/vector-icons';

const Info: React.FC = () => {
  return (
    <Container>
      <User>
        <UserName>
          @Paulo_Leandro
        </UserName>
        <AntDesign
         name="checkcircle" 
         size={18} 
         style={{ marginHorizontal: 5 }}
         color="#25d366" />
      </User>

      <Description>
        Esse projeto é apenas para testar e melhorar as minhas habildiades
        como desenvolvedor frontend react-native.
        Queria desejar um ótimo dia a todos vocês que estão vendo essa
        publicação ai no linkedin :).
      </Description>

      <Music>
        <Feather 
        name="music"
        size={13}
        />
        Queen - Bohemian Rhapsody
      </Music>
    </Container>
  );
};

export default Info;
