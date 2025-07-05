import React, { useEffect, useState } from 'react';
import { VictoryPie } from 'victory-pie';
import { RFValue } from 'react-native-responsive-fontsize';

import { api } from '../../services/api';
import { theme } from '../../global/theme';

import {
  Container,
  Header,
  Title,
  ChartContainer,
} from './styles';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  date: string;
}

export default function Resumo() {
  const [data, setData] = useState<Transaction[]>([]);

  useEffect(() => {
    (async () => {
      const response = await api.get('/');
      setData(response.data);
    })();
  }, []);

  const entries = data
    .filter((t: Transaction) => t.amount > 0)
    .reduce((sum: number, t: Transaction) => sum + t.amount, 0);

  const expenses = data
    .filter((t: Transaction) => t.amount < 0)
    .reduce((sum: number, t: Transaction) => sum + Math.abs(t.amount), 0);

  return (
    <Container>
      <Header>
        <Title>Resumo</Title>
      </Header>

      <ChartContainer>
        <VictoryPie
          data={[
            { x: 'Entradas', y: entries },
            { x: 'Saídas', y: expenses }
          ]}
          colorScale={[
            theme.colors.success,
            theme.colors.attention
          ]}
          height={RFValue(200)}
          innerRadius={RFValue(60)}
          labelRadius={RFValue(80)}
          style={{
            labels: { fontSize: RFValue(14), fill: theme.colors.text }
          }}
        />
      </ChartContainer>
    </Container>
  );
}
