import React from 'react';
import {StyleSheet, View} from 'react-native';

const Separator = props => {
  return <View style={[styles.container, props.style]} />;
};

export default Separator;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#E8E9ED',
  },
});
