import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigation/AuthStack';

function App() {
  return (
    <NavigationContainer>
      <Navigator></Navigator>
    </NavigationContainer>
  );
}

export default App;