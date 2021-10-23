import React from 'react';
import { Text } from 'react-native';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

import { Container, Content } from './styles';

export function Home(){
  return(
    <Container>
      <Header/>
        <Content>
          <Button title="Gerar Pdf" type="generate"/>
          <Button title="Visualizar Pdf" type="view"/>
          <Button title="Imprimir Pdf" type="print"/>
        </Content>
    </Container>
  )
}
