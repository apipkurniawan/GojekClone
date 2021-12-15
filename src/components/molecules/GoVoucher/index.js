import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import ImgFood from '../../../assets/dummy/food-banner.jpg';
import LogoGojek from '../../../assets/logo/white.png';

import Separator from '../../atoms/Separator';
import Button from '../../atoms/Button';
import Opacity from '../../atoms/Opacity';

const GoVoucher = () => {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image style={styles.img} source={ImgFood} />
        <Opacity />
        <View style={styles.logoContainer}>
          <Image source={LogoGojek} style={styles.logo} />
        </View>
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>FREE GO-FOOD voucher</Text>
            <Text style={styles.desc}>Quick, before they run out!</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="GET VOUCHER" />
          </View>
        </View>
      </View>
      <Separator style={styles.separator} />
    </View>
  );
};

export default GoVoucher;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  banner: {
    position: 'relative',
  },
  img: {
    height: 170,
    width: '100%',
    borderRadius: 6,
  },
  logoContainer: {
    height: 15,
    width: 55,
    position: 'absolute',
    top: 16,
    left: 16,
  },
  logo: {
    resizeMode: 'contain',
    flex: 1,
    width: undefined,
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  desc: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
  },
  buttonContainer: {
    flex: 1,
    paddingLeft: 12,
  },
  separator: {
    marginTop: 16,
    marginBottom: -16,
  },
  // button: {
  //   backgroundColor: '#61A756',
  //   paddingHorizontal: 12,
  //   paddingVertical: 11,
  //   borderRadius: 4,
  //   alignSelf: 'stretch',
  // }
});
