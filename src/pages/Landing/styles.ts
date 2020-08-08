import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  landingImg: {
    resizeMode: "contain",
  }
});

export default styles;


import styled from "styled-components/native";

export const LandingContainer = styled.View`
  background-color: #8257e5;
  flex: 1;
  justify-content: center;
  padding: 40px;
`

export const LandingImage = styled.Image`
  width: 100%;
`

export const LandingText = styled.Text`
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
`

export const LandingTextBold = styled.Text`
font-weight: bold;
`
