import { color } from '@rneui/base';
import { TextStyle } from 'react-native';

export const colors = {
  primary: '#3a9ec2',
  primaryDark: '#529a9e',
  primaryLight: '#8cdde3',
  primaryLightxl: '#aad8db',
  black1: '#1b1b1b',
  black2: '#3b3b3b',
  black3: '#606060',
  black4: '#bdbdbd',
  black5: '#363636',
  white1: '#ededed',
  white2: '#e6e6e6',
  white3: '#cdcdcd',
  blue_: '#2f80ed',
};

export const linkTextStyle: TextStyle = {
  color: colors.blue_,
  fontWeight: 'bold',
};

export const buttonPrimaryStyle = {
  backgroundColor: colors.primaryDark,
  borderRadius: 3,
};
