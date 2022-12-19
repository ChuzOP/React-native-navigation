import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const TabScreen = () => {
  return (
    <View>
      <Text style={styles.title}>TabScreen</Text>
      <Text>
        <Icon name="rocket" size={30} color="#900" />;
      </Text>
    </View>
  );
};

export default TabScreen;
