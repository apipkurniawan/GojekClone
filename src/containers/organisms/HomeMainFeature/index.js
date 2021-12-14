import React from 'react';
import {StyleSheet, View} from 'react-native';

import IconGoRide from '../../../assets/icon/go-ride.png';
import IconGoFood from '../../../assets/icon/go-food.png';
import IconGoSend from '../../../assets/icon/go-send.png';
import IconGoPulsa from '../../../assets/icon/go-pulsa.png';
import IconGoDeals from '../../../assets/icon/go-deals.png';
import IconGoCar from '../../../assets/icon/go-car.png';
import IconGoBlueBird from '../../../assets/icon/go-bluebird.png';
import IconGoMore from '../../../assets/icon/go-more.png';
import MainFeature from '../../../components/molecules/MainFeature';

const HomeMainFeature = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.section, styles.spaceBottom]}>
        <MainFeature img={IconGoRide} title={'GO-RIDE'} />
        <MainFeature img={IconGoCar} title={'GO-CAR'} />
        <MainFeature img={IconGoBlueBird} title={'GO-BLUEBIRD'} />
        <MainFeature img={IconGoSend} title={'GO-SEND'} />
      </View>
      <View style={styles.section}>
        <MainFeature img={IconGoDeals} title={'GO-DEALS'} />
        <MainFeature img={IconGoPulsa} title={'GO-PULSA'} />
        <MainFeature img={IconGoFood} title={'GO-FOOD'} />
        <MainFeature img={IconGoMore} title={'GO-MORE'} />
      </View>
    </View>
  );
};

export default HomeMainFeature;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 18,
    marginBottom: 18,
  },
  section: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  spaceBottom: {
    marginBottom: 18,
  },
});
