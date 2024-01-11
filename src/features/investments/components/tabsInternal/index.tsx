import { View, Text } from 'react-native';
import React from 'react';
import { colors } from '../../../core/styles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

type Props = {
  tabScreens: Array<{
    name: string;
    component: React.FC;
  }>;
};

export default function TabsInternal({ tabScreens }: Props) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          height: 1,
          backgroundColor: colors.primary,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          color: colors.white3,
        },
        tabBarIndicatorContainerStyle: {
          backgroundColor: colors.black5,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.white3,
        tabBarPressColor: colors.primary,
      }}
      sceneContainerStyle={{
        backgroundColor: colors.black2,
      }}
    >
      {tabScreens.map((tabScreen) => (
        <Tab.Screen
          key={tabScreen.name}
          name={tabScreen.name}
          component={tabScreen.component}
        />
      ))}
    </Tab.Navigator>
  );
}
