import React from 'react';

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

const TeacherItem = () => {
  return (
    <Container>
      <ProfileContainer>
        <ProfileImage source={{ uri: "https://avatars0.githubusercontent.com/u/43966974?s=460&u=e55f14d1486ecfbf0719b9531206240c56998ee1&v=4" }} />
        <ProfileInfo>
          <ProfileName>Rafael</ProfileName>
          <Subject>Quimíca</Subject>
        </ProfileInfo>
      </ProfileContainer>

      <Bio>
        Junior Full-stack Developer,
        {'\n'}{'\n'}
        fascinated for JavaScript and ES6+, currently learning IOS Development.
      </Bio>

      <ProfileFooter>
        <Price>
          Preço/hora {"   "}
          <Value>
            R$ 120.00
          </Value>
        </Price>
      </ProfileFooter>

      <ButtonsContainer>
        <FavoriteButton>
          {/* <ButtonIcon  source={heartOutlineIcon} /> */}
          <ButtonIcon  source={unfavoriteIcon} />
        </FavoriteButton>

        <ContactButton>
          <ButtonIcon source={whatsappIcon} />
          <ButtonText>Entre em contato</ButtonText>
        </ContactButton>
      </ButtonsContainer>
    </Container>
  )
}

export default TeacherItem;
