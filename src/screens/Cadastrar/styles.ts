// src/screens/Cadastrar/styles.ts
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex:1; background:${({theme})=>theme.colors.background};
`;
export const Header = styled.View`
  height:${RFValue(100)}px;
  background:${({theme})=>theme.colors.primary};
  justify-content:flex-end; padding:0 24px ${RFValue(20)}px;
`;
export const Title = styled.Text`
  color:#fff; font-family:${({theme})=>theme.fonts.bold};
  font-size:${RFValue(18)}px;
`;
export const Form = styled.View`
  flex:1; padding:24px; justify-content:center;
`;
export const Input = styled.TextInput`
  width:100%; padding:16px; border-radius:8px;
  background:${({theme})=>theme.colors.shape}; margin-bottom:16px;
  font-size:${RFValue(14)}px; font-family:${({theme})=>theme.fonts.regular};
`;
export const TransactionType = styled.View`
  flex-direction:row; justify-content:space-between; margin-bottom:16px;
`;
export const TypeButton = styled.TouchableOpacity<{active:boolean}>`
  flex:1; padding:16px; margin:0 4px;
  background:${({active,theme})=>
    active? theme.colors.success: theme.colors.shape};
  border:1px solid ${({theme})=>theme.colors.text_light};
  border-radius:8px;
  align-items:center;
`;
export const ButtonSubmit = styled.TouchableOpacity`
  height:${RFValue(56)}px; background:${({theme})=>theme.colors.secondary};
  border-radius:8px; justify-content:center; align-items:center;
`;
export const ButtonText = styled.Text`
  color:#fff; font-family:${({theme})=>theme.fonts.bold};
  font-size:${RFValue(14)}px;
`;
