import { StyleSheet } from 'react-native';
import React from 'react';
import { Icon, Input } from '@rneui/base';
import { colors } from '../../styles';

type Props = {
  formik: any;
  name: string;
  type?: 'default' | 'pass';
  fieldValue: string;
};

export function FormInput({
  formik,
  fieldValue,
  type = 'default',
  name,
}: Props) {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <Input
      placeholder={name}
      containerStyle={styles.input}
      {...(type === 'pass' && { secureTextEntry: !showPassword })}
      rightIcon={
        type === 'pass' ? (
          <Icon
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            type="material-community"
            iconStyle={styles.icon}
            onPress={() => handleShowPassword()}
          />
        ) : (
          <Icon
            name={fieldValue}
            type="material-community"
            iconStyle={styles.icon}
          />
        )
      }
      onChangeText={(text) => formik.setFieldValue(fieldValue, text)}
      errorMessage={formik.errors[fieldValue]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    width: '100%',
  },
  icon: {
    color: colors.white3,
  },
});
