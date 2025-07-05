import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

// Tipagem da transação
export interface Transaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  date: string;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  height: ${RFValue(100)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: flex-end;
  padding: 0 24px ${RFValue(20)}px;
`;

export const Title = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
`;

export const List = styled(
  FlatList as new () => FlatList<Transaction>
).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})``;

export const TransactionCard = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

export const TransactionTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const TransactionAmount = styled.Text<{ type: 'up' | 'down' }>`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme, type }) =>
    type === 'up' ? theme.colors.success : theme.colors.attention};
  margin: 8px 0;
`;

export const TransactionFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Category = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text_light};
`;

export const DateText = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text_light};
`;
