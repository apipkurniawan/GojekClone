import React, {Component} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import SearchFeature from '../../../components/molecules/SearchFeature';
import GoNews from '../../../components/molecules/GoNews';
import GoInfo from '../../../components/molecules/GoInfo';
import GoVoucher from '../../../components/molecules/GoVoucher';
import Divider from '../../../components/atoms/Divider';

import ScrollableProduct from '../../../containers/organisms/ScrollableProduct';
import HomeMainFeature from '../../../containers/organisms/HomeMainFeature';
import FooterBar from '../../../containers/organisms/FooterBar';
import HomeGoPay from '../../../containers/organisms/HomeGoPay';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          <SearchFeature />
          <HomeGoPay />
          <HomeMainFeature />
          <Divider />
          <GoNews
            onPress={() => this.props.navigation.navigate('GoNewsDetail')}
          />
          <GoInfo />
          <GoVoucher />
          <ScrollableProduct />
        </ScrollView>
        <FooterBar />
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    backgroundColor: 'white',
    flex: 1,
  },
});
