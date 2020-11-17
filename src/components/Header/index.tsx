import React from 'react';

import { Container, Menu, Separator } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Menu>Seguindo</Menu>
      <Separator />
      <Menu bold={true}>Para você</Menu>
    </Container>
  );
};

export default Header;
