import React, { useState } from 'react';
import Container from '~/components/Container';
import { CheckBox} from "react-native";
import {
  Area,
  CheckArea,
  CheckText,
  CheckItem,
  Text,
  Title,
  HeaderTop,
  Div,
} from './styles';

const Checklist = () => {

  const [isSelected, setSelection] = useState(false);

  return (
    <Container>
      <HeaderTop>
          <Title>Segunda, 14 de junho</Title>
      </HeaderTop>
      <Area>
        <CheckArea>
          <CheckItem>
            <CheckBox value={isSelected} name="Tarefa" onValueChange={setSelection} />
            <CheckText>Ração do Cachorro</CheckText>
          </CheckItem>
          <CheckItem>
            <CheckBox value={isSelected} name="tarefa" onValueChange={setSelection} />
            <CheckText>Aniversário do Frodo</CheckText>
          </CheckItem>
        </CheckArea>
        <Text>Comprar produtos de Limpeza (4)</Text>
        <Div>
        <CheckArea>
          <CheckItem>
            <CheckBox value={isSelected} name="Tarefa" onValueChange={setSelection} />
            <CheckText>Desidratante</CheckText>
          </CheckItem>
          <CheckItem>
            <CheckBox value={isSelected} name="tarefa" onValueChange={setSelection} />
            <CheckText>Sabão em pó</CheckText>
          </CheckItem>
          <CheckItem>
            <CheckBox value={isSelected} name="tarefa" onValueChange={setSelection} />
            <CheckText>Vanish</CheckText>
          </CheckItem>
          <CheckItem>
            <CheckBox value={isSelected} name="tarefa" onValueChange={setSelection} />
            <CheckText>Vanish</CheckText>
          </CheckItem>
        </CheckArea>
        </Div>
      </Area>
    </Container>
  );
};

export default Checklist;
