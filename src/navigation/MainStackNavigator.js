import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import {View, Text, StyleSheet} from 'react-native';

import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerContent(props) {
  const {navigation} = props.navigation;
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          justifyContent: 'flex-end',
          padding: 15,
          height: 150,
          backgroundColor: '#f1f1f1',
          zIndex: 1,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>Altaf Hussain</Text>
      </View>
      <DrawerContentScrollView
        {...props}
        style={{backgroundColor: '#ffffff', marginTop: -40}}>
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
        options={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
        }}
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

// const styles = StyleSheet.create({
//   drawerContent: {
//     flex: 1,
//   },
//   drawerSection: {
//     marginTop: 15,
//   },
// });
