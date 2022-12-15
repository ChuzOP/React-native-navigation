/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {styles} from '../theme/appTheme';
import {View, Text, Button} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/core';

const Settings = () => {
  const navigator = useNavigation();
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.title}>Settings</Text>
      <Button
        title="Go to Page2"
        onPress={() =>
          navigator.dispatch(CommonActions.navigate({name: 'Page2'}))
        }
      />
      <View style={{marginVertical: 5}} />
      <Button
        title="Go to Persona"
        onPress={() =>
          navigator.dispatch(CommonActions.navigate({name: 'Persona'}))
        }
      />
    </View>
  );
};

export default Settings;
