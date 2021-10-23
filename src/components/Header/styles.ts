import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
    height: ${RFPercentage(15)}px;
    background-color: #9ACD32;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: ${RFValue(13)}px;

`;

export const Greeting = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: Poppins_400Regular;
    color: #FFF;
`;