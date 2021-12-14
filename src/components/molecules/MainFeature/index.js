import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const MainFeature = props => {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image source={props.img} />
      </View>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export default MainFeature;

const styles = StyleSheet.create({
  container: {
    width: '25%',
    alignItems: 'center',
  },
  img: {
    borderWidth: 1,
    height: 58,
    width: 58,
    borderColor: '#efefef',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 6,
    textAlign: 'center',
  },
});
