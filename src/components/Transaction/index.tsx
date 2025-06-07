import { 
    Container, 
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTransaction,
    Category,
    CategoryName,

}   from "./styles";



interface Category{
    name: string
    icon: string
}

interface TransactionProps {
    type: 'positive' | 'negative'
    title: string
    amount: string
    category: Category
    date: string
}

interface Props {
    data: TransactionProps
}

export function Transaction({data}: Props){
    return(
        <Container>

            <Header>

                <Title>
                    {data.title}
                </Title>

                <Amount type={data.type}>
                    {data.type === 'negative' && '- '}
                    {data.amount}
                </Amount>

                

            </Header>

            <Footer>

                <Category>
                        <CategoryName>
                            <Icon name={data.category?.icon}></Icon>
                            {data.category?.name}   
                        </CategoryName>
                        
                        <CategoryName>
                            {data.date}
                        </CategoryName>
                    
               
                </Category>
                

            </Footer>

        </Container>
    )
}