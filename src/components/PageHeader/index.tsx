import React, { ReactNode } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  HeaderContainer,
  TopBar,
  BackButton,
  BackButtonImg,
  Logo,
  HeaderTitle,
  Header
} from "./styles";

import backIcon from "../../assets/images/icons/back.png";
import logo from "../../assets/images/logo.png";

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children, headerRight }) => {
  const { navigate } = useNavigation();
  return (
    <HeaderContainer>
      <TopBar>
        <BackButton onPress={() => navigate("Landing")}>
          <BackButtonImg source={backIcon} />
        </BackButton>
        <Logo source={logo} />
      </TopBar>
      <Header>
        <HeaderTitle>{title}</HeaderTitle>
        {headerRight}
      </Header>
      {children}
    </HeaderContainer>
  )
}

export default PageHeader;
