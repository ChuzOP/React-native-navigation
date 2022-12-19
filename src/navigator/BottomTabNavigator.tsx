/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Article from '../screens/Article';
import TabScreen from '../screens/TabScreen';
import {colors} from '../theme/appTheme';
import {Platform, Text} from 'react-native';
import {TopTabNavigator} from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const BottomTabNavigator = () => {
  return Platform.OS === 'ios' ? <TabIOS /> : <TabAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      barStyle={{
        backgroundColor: colors.pirmary,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'TabScreen':
              iconName = 'locate-outline';
              break;

            case 'NavScreen':
              iconName = 'navigate-circle-outline';
              break;

            case 'Settings':
              iconName = 'cog-outline';
              break;
          }
          return <Icon name={iconName} size={28} color={color} />;
        },
      })}>
      <BottomTabAndroid.Screen
        // options={{tabBarLabel: 'Home', tabBarIcon: () => null}}
        options={{tabBarLabel: 'TabScreen'}}
        name="TabScreen"
        component={TabScreen}
      />
      <BottomTabAndroid.Screen name="NavScreen" component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="Settings" component={Article} />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabIOS = createBottomTabNavigator();

const TabIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.secondary,
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'TabScreen':
              iconName = 'T1';
              break;

            case 'NavScreen':
              iconName = 'T2';
              break;

            case 'Settings':
              iconName = 'T3';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <BottomTabIOS.Screen
        name="TabScreen"
        options={{tabBarLabel: 'X'}}
        // options={{tabBarLabel: 'X', tabBarIcon: () => null}}
        component={TabScreen}
      />
      <BottomTabIOS.Screen name="NavScreen" component={TopTabNavigator} />
      <BottomTabIOS.Screen
        name="Settings"
        options={{tabBarLabel: 'Ajustes'}}
        component={Article}
      />
    </BottomTabIOS.Navigator>
  );
};
