import React, { useState, useEffect } from 'react';
import { Linking } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import {
  Container,
  ProfileContainer,
  ProfileImage,
  ProfileInfo,
  ProfileName,
  Subject,
  Bio,
  ProfileFooter,
  Price,
  Value,
  ButtonsContainer,
  ButtonIcon,
  ContactButton,
  FavoriteButton,
  ButtonText
} from "./styles";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

import api from "../../services/api";

export interface TeacherItemsProps {
  name: string;
  avatar: string;
  bio: string;
  id: number;
  subject: string;
  whatsapp: string;
  cost: number;
  favorite: Boolean;
}

const TeacherItem: React.FC<TeacherItemsProps> = ({ name, id, subject, bio, avatar, cost, whatsapp, favorite }) => {
  const [isFavorite, setIsFavorite] = useState(favorite);

  const handleLinkToWhatsapp = () => {
    api.post("connectios", {
      user_id: id
    });
    Linking.openURL(`whatsapp://send?phone=${whatsapp}`)
  }

  const handleToggleFavorite = async () => {
    const favorites = await AsyncStorage.getItem("favorites");

    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    const teacher = {
      name,
      avatar,
      bio,
      subject,
      cost,
      whatsapp,
      id,
      favorite
    };

    if (isFavorite) {
      favoritesArray = favoritesArray.filter( (favTeacher: TeacherItemsProps) => favTeacher.id !== id);
      setIsFavorite(false);
    } else {
      favoritesArray.push(teacher);
      setIsFavorite(!isFavorite);
    }

    await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray))
  }

  return (
    <Container>
      <ProfileContainer>
        <ProfileImage source={{ uri: avatar }} />
        <ProfileInfo>
          <ProfileName>{name}</ProfileName>
          <Subject>{subject}</Subject>
        </ProfileInfo>
      </ProfileContainer>

      <Bio>
        {bio}
      </Bio>

      <ProfileFooter>
        <Price>
          Preço/hora {"   "}
          <Value>
            R$ {cost}.00
          </Value>
        </Price>
      </ProfileFooter>

      <ButtonsContainer>
        <FavoriteButton onPress={handleToggleFavorite}>
          <ButtonIcon source={isFavorite ? unfavoriteIcon : heartOutlineIcon} />
        </FavoriteButton>

        <ContactButton onPress={handleLinkToWhatsapp}>
          <ButtonIcon source={whatsappIcon} />
          <ButtonText>Entre em contato</ButtonText>
        </ContactButton>
      </ButtonsContainer>
    </Container>
  )
}

export default TeacherItem;
