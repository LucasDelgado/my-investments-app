import { NavigationContainer } from '@react-navigation/native';

import './polyfill';
import Toast from 'react-native-toast-message';
import { AppNavigation } from './src/navigation/AppNavigation';
import './i18n';
import { initFirebase } from './src/repository/Firbase';
import { StoreProvider } from './src/store/StoreProvider';

initFirebase;

export default function App() {
  return (
    <StoreProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
      <Toast />
    </StoreProvider>
  );
}
