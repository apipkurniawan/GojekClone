import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const ScrollableItem = props => {
  return (
    <View>
      <View style={styles.container}>
        <Image source={props.img} style={styles.img} />
      </View>
      <Text style={styles.title}>
        {props.title.length >= 20
          ? props.title.substring(0, 20).concat('...')
          : props.title}
      </Text>
    </View>
  );
};

export default ScrollableItem;

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginRight: 16,
  },
  img: {
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    flex: 1,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C1C1C',
    marginTop: 12,
  },
});
