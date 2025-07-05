import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import {
  Container,
  Header,
  Title,
  List,
  TransactionCard,
  TransactionTitle,
  TransactionAmount,
  TransactionFooter,
  Category,
  DateText,
  Transaction // 👈 tipagem vinda de styles.ts
} from './styles';

export default function Listagem() {
  const [data, setData] = useState<Transaction[]>([]);

  const loadTransactions = async () => {
    try {
      const response = await api.get('/');
      setData(response.data);
    } catch (error) {
      console.error('Erro ao carregar transações:', error);
    }
  };

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Listagem</Title>
      </Header>

      <List
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }: { item: Transaction }) => (
          <TransactionCard>
            <TransactionTitle>{item.title}</TransactionTitle>
            <TransactionAmount type={item.amount > 0 ? 'up' : 'down'}>
              {(item.amount > 0 ? '' : '- ') +
                item.amount.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
            </TransactionAmount>
            <TransactionFooter>
              <Category>{item.category}</Category>
              <DateText>
                {new Date(item.date).toLocaleDateString('pt-BR')}
              </DateText>
            </TransactionFooter>
          </TransactionCard>
        )}
        onRefresh={loadTransactions}
        refreshing={false}
      />
    </Container>
  );
}
