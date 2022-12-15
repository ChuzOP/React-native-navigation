/* eslint-disable react-native/no-inline-styles */
import {View, Text, Button} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'Persona'> {}
const Persona = ({navigation, route}: Props) => {
  const params = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: 'Quién Eres',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.contentContainer}>
      <Text style={styles.title}>Persona</Text>
      <Text
        style={{
          ...styles.text,
          textAlign: 'center',
          fontSize: 20,
          color: 'green',
          fontWeight: 'bold',
          marginBottom: 10,
        }}>{`Soy ${params.nombre}, con id ${params.id}`}</Text>
      <Button
        title="Regresar al Inicio"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default Persona;
