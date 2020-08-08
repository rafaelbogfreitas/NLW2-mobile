import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  landingImg: {
    resizeMode: "contain",
  }
});

export default styles;


import styled from "styled-components/native";


interface buttonProps {
  bg: string;
}

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
  font-family: Poppins;
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
`

export const LandingTextBold = styled.Text`
  font-family: Poppins_semiBold;
`

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content:space-between;
`

export const LandingButton = styled.TouchableOpacity<{ bg: string }>`
  height: 150px;
  width: 48%;
  background-color: black;
  border-radius: 8px;
  padding: 24px;
  justify-content:space-between;
  background-color: ${({ bg }) => bg}

`
export const LandingButtonText = styled.Text`
  font-family: Archivo_bold;
  color: #fff;
  font-size: 20px;
`

export const Icon = styled.Image``

export const ConnectionsText = styled.Text`
  font-family: Poppins;
  color: #d4c2ff;
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
  margin-top: 40px;
`
