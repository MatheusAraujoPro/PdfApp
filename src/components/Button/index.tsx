import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import * as Print from 'expo-print'
import { html } from '../../utils/conteudo'

import { 
Container, 
Title,
Icon
} from './styles';

interface ButtonProps extends TouchableOpacityProps{
    title: string,
    type: 'generate' |'print'| 'view'
}
const types = {
    generate: 'pdffile1',
    view: 'eyeo',
    print:'printer'
}

export function Button ({ title, type}: ButtonProps){
  const handlePdf = async (type: 'generate' |'print'| 'view') => {
    if(type ==='generate'){
     console.log('Gerar PDF');     
    } 
    
    if(type ==='view'){
      console.log('Visualizar PDF');     
     } 

     if(type ==='print'){
      await Print.printAsync({
        html,        
      });    
     } 
  }

  return(
    <Container type={type}  onPress={()=>handlePdf(type)}>
        <Icon name={types[type]}/>
        <Title>
            {title}
        </Title>        
    </Container>
  )
}
