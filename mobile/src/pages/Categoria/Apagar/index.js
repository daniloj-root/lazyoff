import React from 'react';
import { Feather } from '@expo/vector-icons';
import {
  Container,
  ButtonReturn,
  Title,
  Strong,
  Icon,
  RemoveButton,
  CancelButton,
} from './styles';

const Apagar = ({ navigation }) => {
  return (
    <Container>
      <ButtonReturn onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={30} color="#333" />
      </ButtonReturn>
      <Icon name="info" size={30} color="black" />
      <Title>
        Tem certeza que deseja apagar a categoria <Strong>Faculdade</Strong>?
        Esta ação não poderá ser desfeita.
      </Title>
      <RemoveButton>Apagar Faculdade</RemoveButton>
      <CancelButton>Não Apagar</CancelButton>
    </Container>
  );
};

export default Apagar;