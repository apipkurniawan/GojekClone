import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.btnText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#61A756',
    paddingHorizontal: 12,
    paddingVertical: 11,
    borderRadius: 4,
    alignSelf: 'flex-end',
  },
  btnText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
