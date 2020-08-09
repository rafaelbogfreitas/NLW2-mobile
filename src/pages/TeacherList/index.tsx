import React, { useState } from 'react';
import { Feather } from "@expo/vector-icons";

import {
  Container,
  TeachersList,
  SearchForm,
  Label,
  Input,
  InputGroup,
  InputBlock,
  SearchButton,
  SearchButtonText,
  FilterButton
} from "./styles";

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

const TeacherList = () => {
  const [isFilterVisible, setFilterVisible] = useState(false);
  return (
    <Container>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={(
          <FilterButton onPress={() => setFilterVisible(!isFilterVisible)}>
            <Feather name="filter" size={20} color="#fff" />
          </FilterButton>
        )}
      >
        {
          isFilterVisible &&
          <SearchForm>
            <Label>Matéria</Label>
            <Input placeholder="Qual a matéria?" />

            <InputGroup>
              <InputBlock>
                <Label>Dia da semana?</Label>
                <Input placeholder="Qual o dia?" />
              </InputBlock>

              <InputBlock>
                <Label>Horário</Label>
                <Input placeholder="Qual horário?" />
              </InputBlock>
            </InputGroup>
            <SearchButton>
              <SearchButtonText>
                Buscar
              </SearchButtonText>
            </SearchButton>
          </SearchForm>
        }
      </PageHeader>
      <TeachersList contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 24
      }}>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </TeachersList>
    </Container>
  )
}

export default TeacherList;
