import React from 'react';

import { Container, Menu, MenuText, Border, Button } from './styles';

import { AntDesign, Feather } from '@expo/vector-icons';

const Tabs: React.FC = () => {
  return (
    <Container> 
      <Menu>
        <AntDesign 
          color="#fff"
          name="home"
          size={28}
        />
        <MenuText>
          Início
        </MenuText>
      </Menu> 

      <Menu>
        <AntDesign 
          color="#fff"
          name="search1"
          size={28}
        />
        <MenuText>
          Descobrir
        </MenuText>
      </Menu> 

      <Menu>
        <Border  
        locations={[0,0.5,0.5,1]}
        start={{ x: 1, y: 0 }}
        colors={['#f42365', '#f42365', '#37d7cf','#37d7cf']}
        >
          <Button>
            <Feather name="plus" size={20}  />
          </Button>
        </Border>
      </Menu>

      <Menu>
        <AntDesign 
          color="#fff"
          name="message1"
          size={28}
        />
        <MenuText>
          Entrada
        </MenuText>
      </Menu> 

      <Menu>
        <AntDesign 
          color="#fff"
          name="user"
          size={28}
        />
        <MenuText>
          Eu
        </MenuText>
      </Menu> 
    </Container>
  );
};

export default Tabs;
