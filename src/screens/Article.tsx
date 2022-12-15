/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';

const Article = () => {
  return (
    <View>
      <Text style={{...styles.text, textAlign: 'center', fontSize: 35}}>Article</Text>
    </View>
  );
};

export default Article;
