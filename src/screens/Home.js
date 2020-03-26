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
          <View
            style={{
              flex: 1,
              height: height - 200,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Button
              title="Open Drawer"
              onPress={() => navigation.toggleDrawer()}
            />

            <Text style={{fontSize: 30}}>Hello, Home!</Text>
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
});

export default Home;
