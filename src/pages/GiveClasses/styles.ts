import styled from "styled-components/native";

export const GiveClassesBg = styled.ImageBackground.attrs({
  resizeMode: "contain"
})`
  flex: 1;
  justify-content:center;
`

export const Title = styled.Text`
  font-family: Archivo_bold;
  color: #fff;
  font-size: 32px;
  line-height: 37px;
  max-width: 180px;
`
export const Description = styled.Text`
  margin-top: 24px;
  font-size: 16px;
  line-height: 26px;
  color: #d4c2ff;
  font-family: Poppins;
  max-width: 240px;
`

export const OkButton = styled.TouchableOpacity.attrs({
  marginVertical: 40
})`
  background-color: #04d361;
  height: 58px;
  align-items:center;
  justify-content:center;
  border-radius: 8px;
`

export const OkButtonText = styled.Text`
  font-family: Archivo_bold;
  font-size: 16px;
  color: #fff;
`