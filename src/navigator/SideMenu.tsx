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
import {styles} from '../theme/appTheme';
import Settings from '../screens/Settings';
import {BottomTabNavigator} from './BottomTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

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
        name="BottomTabNavigator"
        options={{title: 'Home'}}
        component={BottomTabNavigator}
      />
      <Drawer.Screen name="Setting" component={Settings} />
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
          onPress={() => navigation.navigate('BottomTabNavigator')}>
          <Text>
            <Icon name="home-outline" size={25} color="#000" />;
          </Text>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nav}
          onPress={() => navigation.navigate('Setting')}>
          <Text>
            <Icon name="settings-outline" size={25} color="#000" />;
          </Text>
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
