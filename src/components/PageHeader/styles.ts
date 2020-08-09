import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  padding: 40px;
  background-color: #8257e5;
`

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const BackButton = styled.TouchableOpacity`
`

export const BackButtonImg = styled.Image.attrs({
  resizeMode: "contain"
})`
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.Image.attrs({
  resizeMode: "contain"
})`
`

export const HeaderTitle = styled.Text.attrs({
  marginVertical: 40
})`
  font-family: Archivo_bold;
  color:#fff;
  font-size: 24px;
  line-height:32px;
  max-width: 160px;
`