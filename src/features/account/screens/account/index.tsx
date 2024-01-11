import { View, Text } from 'react-native';
import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { Button } from '@rneui/base';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { useStore } from '../../../../store/hooks/useStore';
import { UserStore } from '../../models/User';
import { colors } from '../../../core/styles';
import { useNavigation } from '@react-navigation/native';

export default function Account() {
  const { state, setUser } = useStore();
  const navigation = useNavigation();

  const logout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      setUser({} as UserStore);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error al cerrar sesion',
        visibilityTime: 5000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
    }
  };

  if (!state?.user?.isLogged) {
    return (
      <View>
        <Text>debes registrate o logearte gato</Text>
        <Button
          title={'Iniciar Sesion'}
          onPress={() => {
            navigation.navigate('Login' as never);
          }}
        />
        <Button
          title={'Registrarme'}
          onPress={() => {
            navigation.navigate('Register' as never);
          }}
        />
      </View>
    );
  }

  return (
    <View>
      <Text>Account configuracion de toda laaaa cuenta</Text>
      <Text> {state.user.uid} </Text>
      <Button title={'Cerrar Sesion'} onPress={() => logout()} />
    </View>
  );
}
