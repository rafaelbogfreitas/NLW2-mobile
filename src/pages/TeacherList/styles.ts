import styled from "styled-components/native";
import { BorderlessButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex:1;
  background-color:#f0f0f7;
`

export const TeachersList = styled.ScrollView`
  margin-top: -30px;
`

export const SearchForm = styled.View`
  margin-bottom: 24px;
`

export const Label = styled.Text`
  color: #d4c2ff;
  font-family: Poppins;
`

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#c1bccc",
})`
  background-color: #fff;
  border-radius: 8px;
  height: 56px;
  margin-top: 4px;
  justify-content: center;
  margin-bottom: 16px;
  padding: 0 16px;
`
export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
export const InputBlock = styled.View`
  width: 48%;
`

export const FilterButton = styled(BorderlessButton)`
  
`

export const SearchButton = styled(BorderlessButton)`
  height: 56px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #04d361;
`

export const SearchButtonText = styled.Text`
  font-family: Archivo_bold;
  color: #fff;
  font-size: 16px;
`

