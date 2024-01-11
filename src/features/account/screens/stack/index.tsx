import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from '../account';
import Login from '../loginAccount';
import Register from '../registerAccount';
import { colors } from '../../../core/styles';

const Stack = createNativeStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Account'}
        component={Account}
        options={{
          title: 'Mi cuenta',
          headerStyle: {
            backgroundColor: colors.black1,
          },
          headerTintColor: colors.white3,
        }}
      />
      <>
        <Stack.Screen
          name={'Login'}
          component={Login}
          options={{
            title: 'Iniciar Sesion',
            headerStyle: {
              backgroundColor: colors.primaryLightxl,
            },
          }}
        />
        <Stack.Screen
          name={'Register'}
          component={Register}
          options={{
            title: 'Registrarme',
            headerStyle: {
              backgroundColor: colors.primaryLightxl,
            },
          }}
        />
      </>
    </Stack.Navigator>
  );
}
