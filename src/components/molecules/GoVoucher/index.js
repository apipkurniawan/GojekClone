import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import ImgFood from '../../../assets/dummy/food-banner.jpg';
import LogoGojek from '../../../assets/logo/white.png';

const GoVoucher = () => {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image style={styles.img} source={ImgFood} />
        <View style={styles.backGround} />
        <View style={styles.logoContainer}>
          <Image source={LogoGojek} style={styles.logo} />
        </View>
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>FREE GO-FOOD voucher</Text>
            <Text style={styles.desc}>Quick, before they run out!</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>GET VOUCHER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.separator} />
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
  button: {
    backgroundColor: '#61A756',
    paddingHorizontal: 12,
    paddingVertical: 11,
    borderRadius: 4,
    alignSelf: 'stretch',
  },
  buttonText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#E8E9ED',
    marginTop: 16,
    marginBottom: -16,
  },
  backGround: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.15,
    borderRadius: 6,
  },
});
