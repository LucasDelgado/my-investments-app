import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { useTranslation } from 'react-i18next';

import { Text, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from '@rneui/themed';
import { useLogin } from '../../hooks/useLogin';
import { FormInput } from '../../../core/components/formInput';
import {
  buttonPrimaryStyle,
  colors,
  linkTextStyle,
} from '../../../core/styles';

export default function LoginScreen() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [formik, loginWithGoogle] = useLogin();

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.content}>
      <FormInput formik={formik} fieldValue="email" name="Email" />

      <FormInput
        formik={formik}
        fieldValue="password"
        name="Contraseña"
        type="pass"
      />

      <Button
        title={'Iniciar Sesion'}
        onPress={() => formik.handleSubmit()}
        loading={formik.isSubmitting}
        buttonStyle={buttonPrimaryStyle}
      />
      {/* <Text style={styles.text}>O</Text>
      <Button
        title={'Iniciar Sesion Google'}
        onPress={() => loginWithGoogle()}
      /> */}

      <Text style={styles.text}>
        ¿No tenes cuenta?{' '}
        <Text
          style={styles.login}
          onPress={() => navigation.navigate('Register' as never)}
        >
          {t('welcome')}
        </Text>
      </Text>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  login: {
    width: '100%',
    ...linkTextStyle,
  },
  text: {
    marginTop: 24,
    textAlign: 'center',
  },
});
