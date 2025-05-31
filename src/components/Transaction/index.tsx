import { 
    Container, 
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTransaction,
    Text,
    IconGroup

}   from "./styles";

interface Props {
    type: 'up' | 'down' | 'total'
    title: string
    amount: string
    lastTransaction: string
}

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign',
}

export function Transaction(){
    return(
        <Container>

            <Header>

                <Title>
                    Desenvolvimento de site
                </Title>

                <Amount>
                    R$ 12.000,00
                </Amount>

                

            </Header>

            <Footer>

                <IconGroup>
                <Icon name='dollar-sign'/>
                <Text>vendas</Text>
                </IconGroup>

                <LastTransaction>
                    13/04/2025
                </LastTransaction>

            </Footer>

        </Container>
    )
}