import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const FooterBarIcon = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={props.img} />
      <Text style={[styles.title, styles.activeMode]}>{props.title}</Text>
    </View>
  );
};

export default FooterBarIcon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 26,
    width: 26,
  },
  title: {
    fontSize: 10,
    marginTop: 4,
    color: '#545454',
  },
  activeMode: {
    color: '#43Ab4A',
  },
});
