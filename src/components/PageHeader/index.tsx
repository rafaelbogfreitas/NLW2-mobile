import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  HeaderContainer,
  TopBar,
  BackButton,
  BackButtonImg,
  Logo,
  HeaderTitle
} from "./styles";

import backIcon from "../../assets/images/icons/back.png";
import logo from "../../assets/images/logo.png";

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const { navigate } = useNavigation();
  return (
    <HeaderContainer>
      <TopBar>
        <BackButton onPress={() => navigate("Landing")}>
          <BackButtonImg source={backIcon} />
        </BackButton>
        <Logo source={logo} />
      </TopBar>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  )
}

export default PageHeader;
