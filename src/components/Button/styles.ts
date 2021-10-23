import styled from 'styled-components/native'
import AntDesign from '@expo/vector-icons/AntDesign'
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps{
    type: 'generate' |'print'| 'view'
}

export const Container = styled.TouchableOpacity<ContainerProps>`
    width: 100%;
    background-color: ${({ type })=> 
     type === 'print' ? '#ffae00' : 
     type === 'view'? '#6a5acd': '#ba2641'};
    flex-direction: row;
    padding: 20px 20px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: Poppins_400Regular;
    color: #FFF;
`;

export const Icon = styled(AntDesign)`
    font-size: ${RFValue(20)}px;
    margin-right: ${RFValue(30)}px;
    color: #FFF;
`;