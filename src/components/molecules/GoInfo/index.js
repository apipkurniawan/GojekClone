import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import ImgGojek from '../../../assets/logo/gojek.png';
import ImgFacebook from '../../../assets/dummy/facebook-connect.png';

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
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>CONNECT</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
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
  button: {
    backgroundColor: '#61A756',
    paddingHorizontal: 12,
    paddingVertical: 11,
    borderRadius: 4,
    alignSelf: 'flex-end',
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
});
