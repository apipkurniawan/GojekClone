import React from 'react';
import {StyleSheet, View} from 'react-native';

const Opacity = () => {
  return <View style={styles.container} />;
};

export default Opacity;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.15,
    borderRadius: 6,
  },
});
