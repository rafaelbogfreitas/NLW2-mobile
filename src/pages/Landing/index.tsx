import React from 'react';

import styles, {
  LandingContainer,
  LandingImage,
  LandingText,
  LandingTextBold
} from "./styles";

import landing from "../../assets/images/landing.png";

const Landing = () => {
  return (
    <LandingContainer>
      <LandingImage
        source={landing}
        style={styles.landingImg}
      />
      <LandingText>
        Seja bem {`\n`}
        <LandingTextBold>
          O que deseja fazer?
        </LandingTextBold>
      </LandingText>
    </LandingContainer>
  )
}

export default Landing;
