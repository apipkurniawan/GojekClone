import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import IconGopay from '../../../assets/icon/gopay.png';
import IconPay from '../../../assets/icon/pay.png';
import IconNearby from '../../../assets/icon/nearby.png';
import IconTopUp from '../../../assets/icon/topup.png';
import IconMore from '../../../assets/icon/more.png';
import GoPayFeature from '../../../components/molecules/GoPayFeature';

const HomeGoPay = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={IconGopay} />
        <Text style={styles.money}>Rp. 50.000</Text>
      </View>
      <View style={styles.content}>
        <GoPayFeature img={IconPay} title={'Pay'} />
        <GoPayFeature img={IconNearby} title={'Nearby'} />
        <GoPayFeature img={IconTopUp} title={'Top Up'} />
        <GoPayFeature img={IconMore} title={'More'} />
      </View>
    </View>
  );
};

export default HomeGoPay;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 17,
    marginTop: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2C5F88',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    padding: 14,
  },
  money: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    flexDirection: 'row',
    paddingBottom: 14,
    paddingTop: 20,
    backgroundColor: '#2F65BD',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
});
