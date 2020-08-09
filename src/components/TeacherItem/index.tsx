import React, { useEffect } from 'react';
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

interface TeacherItemsProps {
  name: string;
  avatar: string;
  bio: string;
  id: number;
  subject: string;
  whatsapp: string;
  cost: number;
}

const TeacherItem: React.FC<TeacherItemsProps> = ({ name, id, subject, bio, avatar, cost, whatsapp }) => {
  useEffect(( ) => {
    AsyncStorage.getItem("favorites");
  }, []);

  const handleLinkToWhatsapp = () => {
    Linking.openURL(`whatsapp://send?phone=${whatsapp}`)
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
        <FavoriteButton>
          {/* <ButtonIcon  source={heartOutlineIcon} /> */}
          <ButtonIcon source={unfavoriteIcon} />
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
