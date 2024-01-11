import { StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from '@rneui/themed';

import AccountStack from '../features/account/screens/stack';
import Investments from '../features/investments/screens';
import { colors } from '../features/core/styles';
import IconTab from '../features/core/components/iconTab';

const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor:colors.black3,
          tabBarLabelStyle: {
            fontSize: 14,
            color: colors.white2,
          },
          headerShown: false,
          headerStyle: {
            backgroundColor: colors.black1,
          },
          tabBarStyle: {
            backgroundColor: colors.black1,
          },
          tabBarIcon: ({ color, size }) => (
            <IconTab route={route} color={color} size={size} />
          ),
        })}
        sceneContainerStyle={{
          backgroundColor: colors.black1,
        }}
      >
        <Tab.Screen
          name={'Investments'}
          component={Investments}
          options={{
            headerShown: true,
            title: 'Mis Inversiones',
            tabBarActiveTintColor: colors.primary,
            headerTintColor: colors.white3,
          }}
        />

        <Tab.Screen name={'AccountStack'} component={AccountStack} />
      </Tab.Navigator>
      <TouchableOpacity>
        <Icon
          reverse
          type="material-community"
          name="plus"
          color={colors.primary}
          containerStyle={styles.btnContainer}
          //onPress={goToAddRestaurant}
        />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    backgroundColor: colors.primary,
  },
});
