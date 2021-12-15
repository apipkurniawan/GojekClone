/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import SearchFeature from './src/components/molecules/SearchFeature';
import GoNews from './src/components/molecules/GoNews';
import GoInfo from './src/components/molecules/GoInfo';
import GoVoucher from './src/components/molecules/GoVoucher';

import ScrollableProduct from './src/containers/organisms/ScrollableProduct';
import HomeMainFeature from './src/containers/organisms/HomeMainFeature';
import FooterBar from './src/containers/organisms/FooterBar';
import HomeGoPay from './src/containers/organisms/HomeGoPay';

import Divider from './src/components/atoms/Divider';

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <SearchFeature />
        <HomeGoPay />
        <HomeMainFeature />
        <Divider />
        <GoNews />
        <GoInfo />
        <GoVoucher />
        <ScrollableProduct />
      </ScrollView>
      <FooterBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default App;
