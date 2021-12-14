import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

import ImgGoFoodBangka from '../../../assets/dummy/go-food-banka.jpg';
import ImgGoFoodGm from '../../../assets/dummy/go-food-gm.jpg';
import ImgGoFoodKfc from '../../../assets/dummy/go-food-kfc.jpg';
import ImgGoFoodOrins from '../../../assets/dummy/go-food-orins.jpg';
import ImgGoFoodPakBos from '../../../assets/dummy/go-food-pak-boss.jpg';
import LogoGoFood from '../../../assets/logo/go-food.png';
import ScrollableItem from '../../../components/molecules/ScrollableItem';

const ScrollableProduct = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={LogoGoFood} style={styles.logo} />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerLeft}>Nearby Restaurants</Text>
        <Text style={styles.headerRight}>See All</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.productContainer}>
        <ScrollableItem img={ImgGoFoodBangka} title={'Martabak bangka'} />
        <ScrollableItem img={ImgGoFoodKfc} title={'KFC Aeon Mall'} />
        <ScrollableItem img={ImgGoFoodGm} title={'Bakmi GM Aeon mall'} />
        <ScrollableItem img={ImgGoFoodOrins} title={'Sederhana minang'} />
        <ScrollableItem img={ImgGoFoodPakBos} title={'Ayam Pak Bos'} />
      </ScrollView>
      <View style={styles.separator} />
    </View>
  );
};

export default ScrollableProduct;

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
  },
  logoContainer: {
    height: 15,
    width: 60,
    marginLeft: 16,
  },
  logo: {
    width: undefined,
    flex: 1,
    resizeMode: 'contain',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  headerLeft: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#1C1C1C',
  },
  headerRight: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#61A652',
  },
  productContainer: {
    flexDirection: 'row',
    paddingLeft: 16,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#E8E9ED',
    marginTop: 16,
    marginHorizontal: 16,
  },
});
