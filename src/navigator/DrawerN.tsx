/* eslint-disable react/react-in-jsx-scope */
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useWindowDimensions} from 'react-native';
import Article from '../screens/Article';
import { StackNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator();

export const DrawerN = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width > 450 ? 'permanent' : 'front', // Menú modo horizontal
        // headerShown: false, // Oculta la hamburguesa
      }}>
      <Drawer.Screen name="StackNavigator" options={{ title: 'Home'}} component={StackNavigator} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
};
// import {View, Text} from 'react-native';
// import React from 'react';

// const DrawerN = () => {
//   return (
//     <View>
//       <Text>DrawerN</Text>
//     </View>
//   );
// };

// export default DrawerN;
