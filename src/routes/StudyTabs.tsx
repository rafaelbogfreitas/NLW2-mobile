import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const { Screen, Navigator } = createBottomTabNavigator();

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const StudyTabs = () => {
  return (
    <Navigator tabBarOptions={{
      style: {
        elevation: 0,
        shadowOpacity: 0,
        height: 100,
      },
      tabStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
      },
      iconStyle: {
        flex: 0,
        width: 20,
        height: 30
      },
      labelStyle: {
        fontFamily: "Archivo_bold",
        fontSize: 13,
        marginLeft: 16
      },
      inactiveBackgroundColor: "#fafafc",
      activeBackgroundColor: "#ebebf5",
      inactiveTintColor: "#c1bccc",
      activeTintColor: "#32264d"
    }}>
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-easel"
                color={focused ? "#8557e5" : color}
                size={size}
              />
            )
          }
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-heart"
                color={focused ? "#8557e5" : color}
                size={size}
              />
            )
          }
        }}
      />
    </Navigator>
  )
}

export default StudyTabs;
