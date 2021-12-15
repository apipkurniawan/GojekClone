import React from 'react';
import {StyleSheet, View} from 'react-native';

// import IconHome from '../../../assets/icon/home.png';
import IconHomeActive from '../../../assets/icon/home-active.png';
import IconOrder from '../../../assets/icon/order.png';
import IconHelp from '../../../assets/icon/help.png';
import IconInbox from '../../../assets/icon/inbox.png';
import IconAccount from '../../../assets/icon/account.png';
import FooterBarIcon from '../../../components/molecules/FooterBarIcon';

const FooterBar = () => {
  return (
    <View style={styles.container}>
      <FooterBarIcon img={IconHomeActive} title="Home" active />
      <FooterBarIcon img={IconOrder} title="Orders" />
      <FooterBarIcon img={IconHelp} title="Help" />
      <FooterBarIcon img={IconInbox} title="Inbox" />
      <FooterBarIcon img={IconAccount} title="Account" />
    </View>
  );
};

export default FooterBar;

const styles = StyleSheet.create({
  container: {
    height: 54,
    flexDirection: 'row',
  },
});
