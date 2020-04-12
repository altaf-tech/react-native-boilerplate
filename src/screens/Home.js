import React from 'react';

import {
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import Icon from '../components/Icon';

const {height} = Dimensions.get('screen');

function Home(props) {
  const {navigation} = props;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.wrapper}>
            <View style={styles.menu}>
              <Icon name="navicon" size={20} color="#333" />
              <Button
                title="Open Drawer"
                onPress={() => navigation.toggleDrawer()}
              />
            </View>

            <Text style={{fontSize: 30, marginTop: 100}}>Hello, Home!</Text>
            <Button
              title="Go to Details"
              onPress={() => navigation.navigate('Details')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'transparent',
  },
  wrapper: {
    flex: 1,
    height: height - 200,
    alignItems: 'center',
  },
  menu: {
    marginTop: 50,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
