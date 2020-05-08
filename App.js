import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import configureStore from './src/store/configureStore';
import Navigator from './src/navigation/AuthStack';

function App() {
  const {store, persistor} = configureStore();
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <Navigator></Navigator>
      </NavigationContainer>
    </PersistGate>
  </Provider>
  );
}

export default App;