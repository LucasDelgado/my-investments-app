import React from 'react';
import ResumeHeader from '../../components/resumeHeader';
import TabsInternal from '../../components/tabsInternal';
import OverviewScreen from './OverviewScreen';
import TransactionsScreen from './TransactionsScreen';

export default function CryptoScreen() {
  const tabScreens = [
    { name: 'Portfolio', component: OverviewScreen },
    { name: 'Movimientos', component: TransactionsScreen },
  ];

  return (
    <>
      <ResumeHeader />
      <TabsInternal tabScreens={tabScreens} />
    </>
  );
}
