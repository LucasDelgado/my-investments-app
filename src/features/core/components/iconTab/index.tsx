import { Icon } from '@rneui/themed';
import React from 'react';

type IconTabProps = {
  route: { name: string };
  color: string;
  size: number;
};
export default function IconTab({
  route,
  color,
  size,
}: IconTabProps): JSX.Element {
  let iconName: string;

  const icons: Record<string, string> = {
    AccountStack: 'account-outline',
    Home: 'home-outline',
  };

  iconName = icons[route.name] || 'alert-circle-outline';

  return (
    <Icon name={iconName} type="material-community" color={color} size={size} />
  );
}
