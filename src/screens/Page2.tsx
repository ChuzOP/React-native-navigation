/* eslint-disable react-native/no-inline-styles */
import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack/lib/typescript/src/types';
import {styles} from '../theme/appTheme';
import { CommonActions } from '@react-navigation/native';

interface Props extends StackScreenProps<any, any> {}
const Page2 = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Información Pública',
      headerBackTitle: '', //si lo dejamos vacio dependiendo del lenguaje del SO pondra el equivalente a "Atras"
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.contentContainer}>
      <Text style={styles.title}>Page2</Text>
      <View>
        <Text style={{...styles.text, textAlign: 'center'}}>Navegar con Argumentos</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
          style={styles.buttonP}
            onPress={() =>
              navigation.dispatch(
                CommonActions.navigate('Persona', {
                  id: 1,
                  nombre: 'Pedrito',
                }),
              )
            }>
            <Text style={styles.buttonText}>Pedrito</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonM}
            onPress={() =>
              navigation.dispatch(
                CommonActions.navigate('Persona', {
                  id: 2,
                  nombre: 'María',
                }),
              )
            }>
            <Text style={styles.buttonText}>María</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button title="Regresar" onPress={() => navigation.pop()} />
      <View style={{marginVertical: 5}} />
      <Button
        title="Regresar al Inicio"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default Page2;
