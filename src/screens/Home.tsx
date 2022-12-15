import {View, Text, Button} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack/lib/typescript/src/types';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}
const Home = ({navigation}: Props) => {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.title}>Home</Text>
      <Button
        title="Go to Page2"
        onPress={() => navigation.navigate('Page2')}
      />
    </View>
  );
};

export default Home;
