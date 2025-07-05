// src/screens/Resumo/styles.ts
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
export const ChartContainer = styled.View`
  flex:1; justify-content:center; align-items:center; padding:16px;
`;
