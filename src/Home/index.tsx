import React from 'react';

import { Container } from './styles';
import { StatusBar } from 'react-native';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Tabs from '../components/Tabs';

import api from '../services/api';

const Home: React.FC = () => {
  return (
    <Container>
      <StatusBar 
      translucent 
      backgroundColor="transparent" 
      barStyle="light-content" />

      <Header />
      <Hero videos={api} />
      <Tabs />
    </Container>
  );
};

export default Home;
