import React from "react";
import { Container, Header, Title, Form } from "./styles";
import { Input } from "../Dashboard/styles";

export function Register () {

    return(

        <Container>
            <Header>
                <Title>
                    Cadastro
                </Title>
            </Header>

            <Form>

                <Input
                    placeholder='Nome'/>
                <Input
                    placeholder='Valor'/>

            </Form>

        </Container>
    );
}