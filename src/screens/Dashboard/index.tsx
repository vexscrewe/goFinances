

import { HighlightCard } from "../../components/HighlightCard";
import { Transaction } from "../../components/Transaction";
import { TransactionProps } from "../../components/Transaction";
import { 
    Container, 
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    UserWrapper,
    Icon,
    HighlightCards,
    Transactions,
    Text,
    TransactionList,
    
}   from "./styles";
    
export interface DataListProps extends TransactionProps{
  id: string;
}

export function Dashboard(){

  const data: DataListProps[] = [{
        id: '1',
        title:'Desenvolvimento de site',
        type: 'negative',
        amount:'R$ 12.000,00',
        category:{
            name: 'vendas',
            icon: 'dollar-sign',
        },
        date: '12/05/2025',
    },
    {
      id:'2',
      title:'Desenvolvimento de site',
      type: 'positive',
        amount:'R$ 12.000,00',
        category:{
            name: 'vendas',
            icon: 'dollar-sign',
        },
        date: '12/05/2025',

    },

    {
      id:'3',
      title:'Desenvolvimento de site',
      type: 'positive',
        amount:'R$ 12.000,00',
        category:{
            name: 'vendas',
            icon: 'dollar-sign',
        },
        date: '12/05/2025',

    },
      ]
  
    return (
        <Container>
          <Header>
            <UserWrapper>
                <UserInfo>
                    <Photo source={ { uri: 'https://64.media.tumblr.com/430bbf4c20e7be7238081bb2caa7c1ff/64f6b3c78b75f1b9-57/s400x600/b1050b397e16d3f3d63e930fbb8426c3ef25ee33.png'} }/>
                    <User>
                        <UserGreeting>Olá</UserGreeting>
                        <UserName>Aluno</UserName>
                    </User>
                </UserInfo>

                <Icon name="power" />

            </UserWrapper>
          </Header>
          
          <HighlightCards>

            <HighlightCard
            
              type='up'
              title='Entradas'
              amount='R$ 17.000,00'
              lastTransaction='Última entrada em 16 de Junho'

            />

            <HighlightCard
            
              type='down'
              title='Saídas'
              amount='R$ 10.000,00'
              lastTransaction='Última entrada em 10 de Junho'

            />

            <HighlightCard
            
              type='total'
              title='Total'
              amount='R$ 7.000,00'
              lastTransaction='De 1 a 16 de Junho'

            />

          </HighlightCards>

          <Transactions>

            <Text>Listagem</Text>

            <TransactionList
            data={data}
            renderItem={({ item }) => <Transaction data={item}/>}
            />
              
          </Transactions>

        </Container>
    );
}
