import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { SideMenu } from './src/navigator/SideMenu';
// import {StackNavigator} from './src/navigator/StackNavigator';
// import { DrawerN } from './src/navigator/DrawerN';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <DrawerN /> */}
      <SideMenu />
    </NavigationContainer>
  );
};

export default App;
