import React from 'react';

import {
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
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
            <Image
              style={styles.tinyLogo}
              source={require('../../assets/images/heart.png')}
            />

            <Text style={{fontSize: 30, marginTop: 100}}>Welcome!</Text>
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
    justifyContent: 'center',
  },
  tinyLogo: {width: 60, height: 60},
});

export default Home;
