import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import OverviewScreen from './overview';
import CryptoScreen from './crypto';
import StockMarketScreen from './stockMarket';
import AirdropScreen from './airdrop';
import { colors } from '../../core/styles';

const Tab = createMaterialTopTabNavigator();

export default function Investments() {
  const { t } = useTranslation();

  const tabScreens = [
    { name: 'Overview', component: OverviewScreen },
    { name: 'Cryptos', component: CryptoScreen },
    { name: 'Stock Market', component: StockMarketScreen },
    { name: 'Airdrops', component: AirdropScreen },
  ];

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarIndicatorStyle: {
            height: 3,
            backgroundColor: colors.primary,
          },
          tabBarStyle: {
            backgroundColor: colors.black1,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            color: colors.white3,
          },
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
            options={{}}
          />
        ))}
      </Tab.Navigator>
    </>
  );
}
