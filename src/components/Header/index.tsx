import React from 'react';
import { Text } from 'react-native';

import {
Container,
Greeting

} from './styles';

export function Header(){
  return(
    <Container>
        <Greeting>Bem vindo ao PDFAPP</Greeting>
    </Container>
  )
}