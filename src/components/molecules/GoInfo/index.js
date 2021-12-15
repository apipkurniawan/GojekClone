import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import ImgGojek from '../../../assets/logo/gojek.png';
import ImgFacebook from '../../../assets/dummy/facebook-connect.png';

import Separator from '../../atoms/Separator';
import Button from '../../atoms/Button';

const GoInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={ImgGojek} style={styles.logo} />
      </View>
      <Text style={styles.header}>Complete Your Profile</Text>
      <View style={styles.contentContainer}>
        <View>
          <Image source={ImgFacebook} />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Connect with facebook</Text>
          <Text style={styles.desc}>
            Login faster without verification code
          </Text>
        </View>
      </View>
      <Button title="CONNECT" />
      <Separator style={styles.separator} />
    </View>
  );
};

export default GoInfo;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  logoContainer: {
    height: 15,
    width: 60,
  },
  logo: {
    width: undefined,
  },
  header: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1C1C1C',
    marginTop: 15,
    marginBottom: 20,
  },
  contentContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  desc: {
    fontSize: 17,
    fontWeight: 'normal',
    color: '#4A4A4A',
    width: '80%',
  },
  separator: {
    marginTop: 16,
    marginBottom: -16,
  },
});
