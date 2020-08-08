import React from 'react';

import styles, {
  LandingContainer,
  LandingImage,
  LandingText,
  LandingTextBold,
  ButtonsContainer,
  LandingButton,
  LandingButtonText,
  StudyIcon,
} from "./styles";

import landing from "../../assets/images/landing.png";
import studyIcon from "../../assets/images/icons/study.png";
import giveClassesIcon from "../../assets/images/icons/give-classes.png";

const Landing = () => {
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
        <LandingButton bg={"#9871f5"}>
          <StudyIcon source={studyIcon} />
          <LandingButtonText>
            Estudar
          </LandingButtonText>
        </LandingButton>
        
        <LandingButton bg={"#04d361"}>
          <StudyIcon source={giveClassesIcon} />
          <LandingButtonText>
            Dar aulas
          </LandingButtonText>
        </LandingButton>
      </ButtonsContainer>
    </LandingContainer>
  )
}

export default Landing;
