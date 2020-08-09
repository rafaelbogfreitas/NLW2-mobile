import styled from "styled-components/native";

export const Container = styled.View`
  background-color:#fff;
  border: 1px solid #e6e6f0;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
`

export const ProfileContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`

export const ProfileImage = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: #eee;
`

export const ProfileInfo = styled.View`
  margin-left: 16px;
`

export const ProfileName = styled.Text`
  font-family: Archivo_bold;
  color: #32264d;
  font-size: 20px;
`

export const Subject = styled.Text`
  font-family: Poppins;
  color: #6a6180;
  font-size:12px;
  margin-top: 4px;
`

export const Bio = styled.Text`
  margin: 0 24px;
  font-family: Poppins; 
  font-size: 14px;
  line-height: 24px;
  color: #6a6180;
`

export const ProfileFooter = styled.View`
  background-color: #fafafc;
  padding: 24px;
  align-items: center;
  margin-top: 24px;
`

export const Price = styled.Text`
  font-family: Poppins;
  color: #6a6180;
  font-size: 14px;
`

export const Value = styled.Text`
  font-family: Archivo_bold;
  font-size: 14px;
  color: #8257e5;
`

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
  padding: 12px;
`

export const ButtonIcon = styled.Image`
  
`

export const FavoriteButton = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  border-radius: 8px;
  margin-right: 8px;
  justify-content: center;
  align-items: center;
  background-color: #F55643;
  /* background-color: #8257e5; */
`

export const ContactButton = styled.TouchableOpacity`
  height: 56px;
  border-radius: 8px;
  margin-right: 8px;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #04d361;
`

export const ButtonText = styled.Text`
  font-family: Archivo_bold;
  color: #fff;
  font-size: 16px;
  margin-left: 16px;
`