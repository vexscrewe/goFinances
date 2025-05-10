import { Feather } from '@expo/vector-icons'

import { 
    Container, 
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    UserWrapper,
}   from "./styles";

export function Dashboard(){
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

                <Feather name="power" />

            </UserWrapper>
          </Header>
        </Container>
    );
}
