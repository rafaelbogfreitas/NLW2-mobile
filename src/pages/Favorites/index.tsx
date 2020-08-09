import React, { useState, useEffect } from 'react';
import { useFocusEffect } from "@react-navigation/native";
import TeacherItem, { TeacherItemsProps } from "../../components/TeacherItem";
import PageHeader from "../../components/PageHeader";
import { Container, TeachersList } from "../TeacherList/styles";
import AsyncStorage from '@react-native-community/async-storage';


const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useFocusEffect(() => {
    loadFavorites();
  })

  const loadFavorites = () => {
    AsyncStorage.getItem("favorites")
      .then(response => {
        if (response) {
          const favoriteTeachers = JSON.parse(response);
          setFavorites(favoriteTeachers);
        }

      })
      .catch(console.log);
  }
  
  return (
    <Container>
      <PageHeader title="Meus proffys favoritos" />
      <TeachersList>
        {favorites.map((teacher: TeacherItemsProps) => <TeacherItem {...teacher} />)}
      </TeachersList>
    </Container>
  )
}

export default Favorites;
