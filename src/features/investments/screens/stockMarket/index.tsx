import React from 'react';
import ResumeHeader from '../../components/resumeHeader';
import TabsInternal from '../../components/tabsInternal';
import OverviewScreen from './OverviewScreen';
import Transactions from './TransactionsScreen';

export default function StockMarketScreen() {
  const tabScreens = [
    { name: 'Portfolio', component: OverviewScreen },
    { name: 'Movimientos', component: Transactions },
  ];

  return (
    <>
      <ResumeHeader />
      <TabsInternal tabScreens={tabScreens} />
    </>
  );
}
