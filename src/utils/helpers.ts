import AsyncStorage from "@react-native-community/async-storage";
import { TeacherItemsProps } from "../components/TeacherItem";

export const loadFavorites = (handler: Function) => {
  AsyncStorage.getItem("favorites")
    .then(response => {
      if (response) {
        const favoriteTeachers = JSON.parse(response);
        const favoriteTeachersId = favoriteTeachers.map((item: TeacherItemsProps) => item.id);

        handler(favoriteTeachersId);
      }

    })
    .catch(console.log);
}