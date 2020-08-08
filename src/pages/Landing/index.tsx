import React from 'react';
import { useNavigation } from "@react-navigation/native";

import styles, {
  LandingContainer,
  LandingImage,
  LandingText,
  LandingTextBold,
  ButtonsContainer,
  LandingButton,
  LandingButtonText,
  Icon,
  ConnectionsText
} from "./styles";

import landing from "../../assets/images/landing.png";
import studyIcon from "../../assets/images/icons/study.png";
import giveClassesIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";

const Landing = () => {
  const navigation = useNavigation();

  return (
    <LandingContainer>
      <LandingImage
        source={landing}
        style={styles.landingImg}
      />
      <LandingText>
        Seja bem-vindo {`\n`}
        <LandingTextBold>
          O que deseja fazer?
        </LandingTextBold>
      </LandingText>

      <ButtonsContainer>
        <LandingButton bg={"#9871f5"} onPress={() => navigation.navigate("Study")}>
          <Icon source={studyIcon} />
          <LandingButtonText>
            Estudar
          </LandingButtonText>
        </LandingButton>

        <LandingButton bg={"#04d361"} onPress={() => navigation.navigate("GiveClasses")}>
          <Icon source={giveClassesIcon} />
          <LandingButtonText>
            Dar aulas
          </LandingButtonText>
        </LandingButton>
      </ButtonsContainer>

      <ConnectionsText>
        Total de 285 conexões já realizadas. {" "}
        <Icon source={heartIcon} />
      </ConnectionsText>
    </LandingContainer>
  )
}

export default Landing;
