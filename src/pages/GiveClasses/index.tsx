import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  GiveClassesBg,
  Title,
  Description,
  OkButton,
  OkButtonText
} from "./styles";

import {
  LandingContainer
} from "../Landing/styles";

import bgImg from "../../assets/images/give-classes-background.png";

const GiveClasses = () => {
  const { goBack } = useNavigation();
  return (
    <LandingContainer>
      <GiveClassesBg source={bgImg}>
        <Title>Quer ser um Proffy?</Title>
        <Description>
          Para começar você precisa se cadastrar como professor na nossa plataforma web.
        </Description>
      </GiveClassesBg>
      <OkButton onPress={() => goBack("Landing")}>
        <OkButtonText>
          Tudo bem
        </OkButtonText>
      </OkButton>
    </LandingContainer>
  )
}

export default GiveClasses
