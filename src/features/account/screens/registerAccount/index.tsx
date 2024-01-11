import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from '@rneui/base';
import { FormInput } from '../../../core/components/formInput';
import { useNavigation } from '@react-navigation/native';
import { useRegister } from '../../hooks/useregister';
import { buttonPrimaryStyle, colors } from '../../../core/styles';

export default function Register() {
  const navigation = useNavigation();
  const [formik] = useRegister();
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.content}>
      <FormInput formik={formik} fieldValue="email" name="Email" />

      <FormInput
        formik={formik}
        fieldValue="password"
        name="Contraseña"
        type="pass"
      />

      <FormInput
        formik={formik}
        fieldValue="passwordConfirm"
        name="Repetir Contraseña"
        type="pass"
      />

      <Button
        title={'Registrarme'}
        onPress={() => formik.handleSubmit()}
        loading={formik.isSubmitting}
        buttonStyle={buttonPrimaryStyle}
      />

      <Text style={styles.text}>
        ¿Ya tenes cuenta?{' '}
        <Text
          style={styles.register}
          onPress={() => navigation.navigate('Login' as never)}
        >
          Inicia Sesión
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
  register: {
    width: '100%',
    color: colors.blue_,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 24,
    textAlign: 'center',
  },
});
