import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const GoPayFeature = props => {
  return (
    <View style={styles.container}>
      <Image source={props.img} />
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export default GoPayFeature;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 15,
  },
});
