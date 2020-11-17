import React from 'react';

import { 
  Container,
   Menu, 
   User, 
   Avatar, 
   Cont,
   SoundBg,
   ImageSound
} from './styles';

import { AntDesign, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <Menu>
        <User>
          <Avatar 
          resizeMode="cover"
          source={{ uri: 'https://avatars0.githubusercontent.com/u/48477073?v=4' }} />
        </User>
      </Menu>

      <Menu>
      <AntDesign 
      name="heart" 
      size={40} 
      color="#ffff" />

      <Cont>
        500K
      </Cont>
      </Menu>

      <Menu>
      <MaterialCommunityIcons 
      name="message-processing" 
      size={40} 
      color="#ffff" />

      <Cont>
        2000
      </Cont>
      </Menu>

      <Menu>
      <FontAwesome 
      name="share" 
      size={40} 
      color="#ffff" />

      <Cont>
        800
      </Cont>
      </Menu>

      <Menu>
        <SoundBg>
          <ImageSound 
            source={{ uri: 'https://aventurasnahistoria.uol.com.br/media/_versions/freddie_mercury_morte_capa_widelg.jpeg' }}
            resizeMode="cover"
          />
        </SoundBg>
      </Menu>
    </Container>
  );
};

export default Sidebar;
