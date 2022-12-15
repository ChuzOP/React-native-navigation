import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Page2 from '../screens/Page2';
import Settings from '../screens/Settings';
import Persona from '../screens/Persona';

export type RootStackParams = {
  Home: undefined;
  Page2: undefined;
  Settings: undefined;
  Persona: {id: number; nombre: string};
};
const Stack = createStackNavigator<RootStackParams>(); //RootStackParams es la definicion de las props que pasaremos entre screens

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      //initialRouteName='Settings' //Como su nombre lo dice cuando la app se inicie la pag principal por defecto tendra la que configuremos aqui
      // property util para estilizar de manera global las screens
      screenOptions={{
        //headerShown: false //deshabilitará la barra de navegación
        headerStyle: {
          //elevation: 0, //quita la linea de separación entre la navegación y el contenido para android
          //shadowColor: 'transparent', //IOS
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Bienvenida'}}
      />
      {/* Podemos enviar en la opciones el titulo de la screen*/}
      <Stack.Screen name="Page2" component={Page2} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Persona" component={Persona} />
    </Stack.Navigator>
  );
};
