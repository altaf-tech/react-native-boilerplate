import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from '../components/Icon';
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerContent(props) {
  const {navigation} = props.navigation;
  return (
    <View style={styles.drawerContent}>
      <View style={styles.profile}>
        <Text style={styles.name}>Altaf Hussain</Text>
      </View>
      <DrawerContentScrollView {...props} style={styles.drawerSection}>
        <View>
          <DrawerItem
            label="Home"
            onPress={() => navigation.navigate('Home')}
          />
          <DrawerItem
            label="Details"
            onPress={() => navigation.navigate('Details')}
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation, route}) => ({
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerLeft: () => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.toggleDrawer()}
              style={{paddingLeft: 10, paddingRight: 10, width: 100}}>
              <Icon name="navicon" size={22} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerStyle: {
            backgroundColor: '#BB2F97',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={navigation => <DrawerContent navigation={navigation} />}>
        <Drawer.Screen name="Home" component={RootNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  drawerSection: {backgroundColor: '#ffffff', marginTop: -20},

  profile: {
    justifyContent: 'flex-end',
    padding: 15,
    height: 150,
    backgroundColor: '#f1f1f1',
    zIndex: 1,
  },
  name: {fontWeight: 'bold', fontSize: 16},
});
