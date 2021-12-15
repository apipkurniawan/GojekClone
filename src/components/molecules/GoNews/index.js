import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import ImgBall from '../../../assets/dummy/sepak-bola.jpg';
import LogoGojek from '../../../assets/logo/white.png';
import Button from '../../atoms/Button';
import Opacity from '../../atoms/Opacity';

const GoNews = () => {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image source={ImgBall} style={styles.img} />
        <Opacity />
        <View style={styles.logoContainer}>
          <Image source={LogoGojek} style={styles.logo} />
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>GO-NEWS</Text>
        <Text style={styles.desc}>
          Dimas Drajat selamatkan penalty, Timnas U-23 kalahkan brunei
        </Text>
        <Button title="READ" />
      </View>
    </View>
  );
};

export default GoNews;

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  banner: {
    position: 'relative',
  },
  img: {
    height: 200,
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
    paddingTop: 16,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E9ED',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#1C1C1C',
  },
  desc: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#7A7A7A',
    marginBottom: 11,
  },
});
