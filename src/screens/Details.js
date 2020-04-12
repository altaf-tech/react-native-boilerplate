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

function Detail(props) {
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
              <Icon name="angle-left" size={20} color="#333" />
              <Button
                title="Back to Home"
                onPress={() => navigation.goBack()}
              />
            </View>

            <Text style={{fontSize: 30}}>Hello, Detail!</Text>
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

export default Detail;
