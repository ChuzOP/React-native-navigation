import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  Image,
  useWindowDimensions,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import Article from '../screens/Article';
import {StackNavigator} from './StackNavigator';
import {styles} from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const SideMenu = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContent={props => <MenuContent {...props} />} //se usa para estilizar el menuLateral
      screenOptions={{
        drawerType: width > 450 ? 'permanent' : 'front', // Menú modo horizontal
        // headerShown: false, // Oculta la hamburguesa
      }}>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
};

const MenuContent = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://www.pngkey.com/png/detail/950-9501315_katie-notopoulos-katienotopoulos-i-write-about-tech-user.png',
          }}
          style={styles.avatar}
        />
      </View>
      <View style={styles.navContainer}>
        <TouchableOpacity
          style={styles.nav}
          onPress={() => navigation.navigate('StackNavigator')}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nav}
          onPress={() => navigation.navigate('Article')}>
          <Text style={styles.navText}>Article</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
