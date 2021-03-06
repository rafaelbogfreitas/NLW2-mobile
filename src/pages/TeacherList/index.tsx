import React, { useState } from 'react';
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";

import { TeacherItemsProps } from "../../components/TeacherItem";

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
import api from '../../services/api';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [isFilterVisible, setFilterVisible] = useState(false);

  const [subject, setSubject] = useState("");
  const [time, setTime] = useState("");
  const [week_day, setWeekDay] = useState("");

  const [favorites, setFavorites] = useState<number[]>([]);

  const loadFavorites = () => {
    AsyncStorage.getItem("favorites")
      .then(response => {
        if (response) {
          const favoriteTeachers = JSON.parse(response);
          const favoriteTeachersId = favoriteTeachers.map((item: TeacherItemsProps) => item.id);

          setFavorites(favoriteTeachersId);
        }

      })
      .catch(console.log);
  }

  const handleSubmit = () => {
    loadFavorites();

    const params = {
      subject,
      week_day,
      time
    }

    console.log(params)

    api.get("/classes", { params })
      .then(response => {
        setTeachers(response.data);
        console.log(response.data);

        // setSubject("");
        // setWeekDay("");
        // setTime("");

        setFilterVisible(false);
      })
      .catch(console.log)
  }

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
            <Input
              placeholder="Qual a matéria?"
              value={subject}
              onChangeText={text => setSubject(text)}
            />

            <InputGroup>
              <InputBlock>
                <Label>Dia da semana?</Label>
                <Input
                  placeholder="Qual o dia?"
                  value={week_day}
                  onChangeText={text => setWeekDay(text)}
                />
              </InputBlock>

              <InputBlock>
                <Label>Horário</Label>
                <Input
                  placeholder="Qual horário?"
                  value={time}
                  onChangeText={text => setTime(text)}
                />
              </InputBlock>
            </InputGroup>
            <SearchButton onPress={handleSubmit}>
              <SearchButtonText>
                Filtrar
              </SearchButtonText>
            </SearchButton>
          </SearchForm>
        }
      </PageHeader>
      <TeachersList contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 24
      }}>
        {teachers.map((teacher: TeacherItemsProps, i) => <TeacherItem key={i} favorite={favorites.includes(teacher.id)} {...teacher} />)}
      </TeachersList>
    </Container>
  )
}

export default TeacherList;
