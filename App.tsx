import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StackNavigator} from './src/navigator/StackNavigator';
// import { DrawerN } from './src/navigator/DrawerN';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
      {/* <DrawerN /> */}
    </NavigationContainer>
  );
};

export default App;
