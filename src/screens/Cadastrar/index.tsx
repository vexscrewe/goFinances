// src/screens/Cadastrar/index.tsx
import React, { useState } from 'react';
import { api } from '../../services/api';
import {
  Container, Header, Title,
  Form, Input, ButtonSubmit, ButtonText,
  TransactionType, TypeButton
} from './styles';

export default function Cadastrar() {
  const [title, setTitle]     = useState('');
  const [amount, setAmount]   = useState('');
  const [category, setCategory]= useState('');
  const [type, setType]       = useState<'up'|'down'>('up');

  const handleSubmit = async () => {
    if (!title||!amount) return;
    await api.post('/', {
      title,
      amount: type==='up'? Number(amount): -Number(amount),
      category,
      date: new Date().toISOString()
    });
    setTitle(''); setAmount(''); setCategory(''); setType('up');
  };

  return (
    <Container>
      <Header><Title>Cadastrar</Title></Header>
      <Form>
        <Input
          placeholder="Título"
          value={title}
          onChangeText={setTitle}
        />
        <Input
          placeholder="Valor"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
        <TransactionType>
          <TypeButton
            active={type==='up'}
            onPress={()=>setType('up')}
          >Income</TypeButton>
          <TypeButton
            active={type==='down'}
            onPress={()=>setType('down')}
          >Outcome</TypeButton>
        </TransactionType>
        <Input
          placeholder="Categoria"
          value={category}
          onChangeText={setCategory}
        />
        <ButtonSubmit onPress={handleSubmit}>
          <ButtonText>Enviar</ButtonText>
        </ButtonSubmit>
      </Form>
    </Container>
  );
}
