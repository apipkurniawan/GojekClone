import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';

import IconSearch from '../../../assets/icon/search.png';
import IconPromo from '../../../assets/icon/promo.png';

const SearchFeature = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput
          placeholder={'what do you want'}
          style={styles.searchBoxTextInput}
        />
        <Image source={IconSearch} style={styles.searchBoxIcon} />
      </View>
      <View style={styles.promo}>
        <Image source={IconPromo} />
      </View>
    </View>
  );
};

export default SearchFeature;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 17,
    flexDirection: 'row',
    paddingTop: 15,
  },
  searchBox: {
    position: 'relative',
    flex: 1,
  },
  searchBoxIcon: {
    position: 'absolute',
    left: 10,
    top: 5,
  },
  searchBoxTextInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 25,
    height: 40,
    borderColor: '#E8E8E8',
    fontSize: 13,
    paddingLeft: 45,
    paddingRight: 20,
    marginRight: 18,
  },
  promo: {
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
