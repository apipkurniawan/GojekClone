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

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <SearchFeature />
        <HomeGoPay />
        <HomeMainFeature />
        <View style={styles.divider} />
        <GoNews
          content={
            'Dimas Drajat selamatkan penalty, Timnas U-23 kalahkan brunei'
          }
        />
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
  divider: {
    height: 17,
    backgroundColor: '#F2F2F4',
    marginTop: 20,
  },
});

export default App;
