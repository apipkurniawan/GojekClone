/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// import IconHome from './src/assets/icon/home.png';
import IconHomeActive from './src/assets/icon/home-active.png';
import IconOrder from './src/assets/icon/order.png';
import IconHelp from './src/assets/icon/help.png';
import IconInbox from './src/assets/icon/inbox.png';
import IconAccount from './src/assets/icon/account.png';
import IconSearch from './src/assets/icon/search.png';
import IconPromo from './src/assets/icon/promo.png';
import IconGopay from './src/assets/icon/gopay.png';
import IconPay from './src/assets/icon/pay.png';
import IconNearby from './src/assets/icon/nearby.png';
import IconTopUp from './src/assets/icon/topup.png';
import IconMore from './src/assets/icon/more.png';
import IconGoRide from './src/assets/icon/go-ride.png';
import IconGoFood from './src/assets/icon/go-food.png';
import IconGoSend from './src/assets/icon/go-send.png';
import IconGoPulsa from './src/assets/icon/go-pulsa.png';
import IconGoDeals from './src/assets/icon/go-deals.png';
import IconGoCar from './src/assets/icon/go-car.png';
import IconGoBlueBird from './src/assets/icon/go-bluebird.png';
import IconGoMore from './src/assets/icon/go-more.png';
import ImgBall from './src/assets/dummy/sepak-bola.jpg';
import ImgFood from './src/assets/dummy/food-banner.jpg';
import ImgFacebook from './src/assets/dummy/facebook-connect.png';
import ImgGoFoodBangka from './src/assets/dummy/go-food-banka.jpg';
import ImgGoFoodGm from './src/assets/dummy/go-food-gm.jpg';
import ImgGoFoodKfc from './src/assets/dummy/go-food-kfc.jpg';
import ImgGoFoodOrins from './src/assets/dummy/go-food-orins.jpg';
import ImgGoFoodPakBos from './src/assets/dummy/go-food-pak-boss.jpg';
import LogoGojek from './src/assets/logo/white.png';
import ImgGojek from './src/assets/logo/gojek.png';
import LogoGoFood from './src/assets/logo/go-food.png';

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        {/* searchBox */}
        <View style={styles.searchBoxContainer}>
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
        {/* gopay */}
        <View style={styles.gopayContainer}>
          <View style={styles.gopay}>
            <Image source={IconGopay} />
            <Text style={styles.gopayText}>Rp. 50.000</Text>
          </View>
          <View style={styles.payMenu}>
            <View style={styles.payMenuComponent}>
              <Image source={IconPay} />
              <Text style={styles.payMenuText}>Pay</Text>
            </View>
            <View style={styles.payMenuComponent}>
              <Image source={IconNearby} />
              <Text style={styles.payMenuText}>Nearby</Text>
            </View>
            <View style={styles.payMenuComponent}>
              <Image source={IconTopUp} />
              <Text style={styles.payMenuText}>Top Up</Text>
            </View>
            <View style={styles.payMenuComponent}>
              <Image source={IconMore} />
              <Text style={styles.payMenuText}>More</Text>
            </View>
          </View>
        </View>
        {/* fitur utama */}
        <View style={styles.mainFeatureContainer}>
          <View style={[styles.sectionFeature, styles.spaceBottom]}>
            <View style={styles.mainFeatureComponent}>
              <View style={styles.mainFeatureImageContainer}>
                <Image source={IconGoRide} />
              </View>
              <Text style={styles.mainFeatureText}>GO-RIDE</Text>
            </View>
            <View style={styles.mainFeatureComponent}>
              <View style={styles.mainFeatureImageContainer}>
                <Image source={IconGoCar} />
              </View>
              <Text style={styles.mainFeatureText}>GO-CAR</Text>
            </View>
            <View style={styles.mainFeatureComponent}>
              <View style={styles.mainFeatureImageContainer}>
                <Image source={IconGoBlueBird} />
              </View>
              <Text style={styles.mainFeatureText}>GO-BLUEBIRD</Text>
            </View>
            <View style={styles.mainFeatureComponent}>
              <View style={styles.mainFeatureImageContainer}>
                <Image source={IconGoSend} />
              </View>
              <Text style={styles.mainFeatureText}>GO-SEND</Text>
            </View>
          </View>
          <View style={styles.sectionFeature}>
            <View style={styles.mainFeatureComponent}>
              <View style={styles.mainFeatureImageContainer}>
                <Image source={IconGoDeals} />
              </View>
              <Text style={styles.mainFeatureText}>GO-DEALS</Text>
            </View>
            <View style={styles.mainFeatureComponent}>
              <View style={styles.mainFeatureImageContainer}>
                <Image source={IconGoPulsa} />
              </View>
              <Text style={styles.mainFeatureText}>GO-PULSA</Text>
            </View>
            <View style={styles.mainFeatureComponent}>
              <View style={styles.mainFeatureImageContainer}>
                <Image source={IconGoFood} />
              </View>
              <Text style={styles.mainFeatureText}>GO-FOOD</Text>
            </View>
            <View style={styles.mainFeatureComponent}>
              <View style={styles.mainFeatureImageContainer}>
                <Image source={IconGoMore} />
              </View>
              <Text style={styles.mainFeatureText}>GO-MORE</Text>
            </View>
          </View>
        </View>
        {/* divider */}
        <View style={styles.divider} />
        {/* GO-NEWS section */}
        <View style={styles.goNewsContainer}>
          <View style={styles.goNewsImageContainer}>
            <Image source={ImgBall} style={styles.goNewsImage} />
            <View style={styles.backGround} />
            <View style={styles.goNewsLogoContainer}>
              <Image source={LogoGojek} style={styles.goNewsLogo} />
            </View>
          </View>
          <View style={styles.goNewsContent}>
            <Text style={styles.goNewsTitle}>GO-NEWS</Text>
            <Text style={styles.goNewsDesc}>
              Dimas Drajat selamatkan penalty, Timnas U-23 kalahkan brunei
            </Text>
            <TouchableOpacity style={styles.goNewsButton}>
              <Text style={styles.goNewsButtonText}>READ</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Information section */}
        <View style={styles.infoContainer}>
          <View style={styles.infoLogoContainer}>
            <Image source={ImgGojek} style={styles.infoLogo} />
          </View>
          <Text style={styles.infoTitle}>Complete Your Profile</Text>
          <View style={styles.infoContent}>
            <View>
              <Image source={ImgFacebook} />
            </View>
            <View style={{marginLeft: 16, flex: 1}}>
              <Text style={styles.infoContentTitle}>Connect with facebook</Text>
              <Text style={styles.infoContentDesc}>
                Login faster without verification code
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.goNewsButton}>
            <Text style={styles.goNewsButtonText}>CONNECT</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
        </View>
        {/* GO-FOOD section */}
        <View style={styles.goFoodContainer}>
          <View style={styles.goFoodBanner}>
            <Image style={styles.goFoodImage} source={ImgFood} />
            <View style={styles.backGround} />
            <View style={styles.goNewsLogoContainer}>
              <Image source={LogoGojek} style={styles.goNewsLogo} />
            </View>
            <View style={styles.goFoodContent}>
              <View>
                <Text style={styles.goFoodTitle}>FREE GO-FOOD voucher</Text>
                <Text style={styles.goFoodDesc}>
                  Quick, before they run out!
                </Text>
              </View>
              <View style={{flex: 1, paddingLeft: 12}}>
                <TouchableOpacity style={styles.goFoodButton}>
                  <Text style={styles.goNewsButtonText}>GET VOUCHER</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.separator} />
        </View>
        {/* nearby go-food section */}
        <View style={styles.nearbyContainer}>
          <View style={styles.nearbyLogoContainer}>
            <Image source={LogoGoFood} style={styles.nearbyLogo} />
          </View>
          <View style={styles.nearbyHeader}>
            <Text style={styles.nearbyHeaderTitle1}>Nearby Restaurants</Text>
            <Text style={styles.nearbyHeaderTitle2}>See All</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.nearbyProductContainer}>
            <View>
              <View style={styles.nearbyProductImgContainer}>
                <Image
                  source={ImgGoFoodBangka}
                  style={styles.nearbyProductImg}
                />
              </View>
              <Text style={styles.nearbyProductTitle}>Martabak bangka</Text>
            </View>
            <View>
              <View style={styles.nearbyProductImgContainer}>
                <Image source={ImgGoFoodKfc} style={styles.nearbyProductImg} />
              </View>
              <Text style={styles.nearbyProductTitle}>KFC Aeon Mall</Text>
            </View>
            <View>
              <View style={styles.nearbyProductImgContainer}>
                <Image source={ImgGoFoodGm} style={styles.nearbyProductImg} />
              </View>
              <Text style={styles.nearbyProductTitle}>Bakmi GM Aeon mall</Text>
            </View>
            <View>
              <View style={styles.nearbyProductImgContainer}>
                <Image
                  source={ImgGoFoodOrins}
                  style={styles.nearbyProductImg}
                />
              </View>
              <Text style={styles.nearbyProductTitle}>Sederhana minang</Text>
            </View>
            <View>
              <View style={styles.nearbyProductImgContainer}>
                <Image
                  source={ImgGoFoodPakBos}
                  style={styles.nearbyProductImg}
                />
              </View>
              <Text style={styles.nearbyProductTitle}>Ayam Pak Bos</Text>
            </View>
          </ScrollView>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#E8E9ED',
              marginTop: 16,
              marginHorizontal: 16,
            }}
          />
        </View>
      </ScrollView>
      <View style={styles.bottomNavigationContainer}>
        <View style={styles.bottomNavigation}>
          <Image style={styles.bottomNavigationIcon} source={IconHomeActive} />
          <Text style={[styles.bottomNavigationText, styles.activeMode]}>
            Home
          </Text>
        </View>
        <View style={styles.bottomNavigation}>
          <Image source={IconOrder} style={styles.bottomNavigationIcon} />
          <Text style={styles.bottomNavigationText}>Orders</Text>
        </View>
        <View style={styles.bottomNavigation}>
          <Image source={IconHelp} style={styles.bottomNavigationIcon} />
          <Text style={styles.bottomNavigationText}>Help</Text>
        </View>
        <View style={styles.bottomNavigation}>
          <Image source={IconInbox} style={styles.bottomNavigationIcon} />
          <Text style={styles.bottomNavigationText}>Inbox</Text>
        </View>
        <View style={styles.bottomNavigation}>
          <Image source={IconAccount} style={styles.bottomNavigationIcon} />
          <Text style={styles.bottomNavigationText}>Account</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  // searchBox
  searchBoxContainer: {
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
  // gopay
  gopayContainer: {
    marginHorizontal: 17,
    marginTop: 8,
  },
  gopay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2C5F88',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    padding: 14,
  },
  gopayText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  // pay menu
  payMenu: {
    flexDirection: 'row',
    paddingBottom: 14,
    paddingTop: 20,
    backgroundColor: '#2F65BD',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  payMenuComponent: {
    flex: 1,
    alignItems: 'center',
  },
  payMenuText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 15,
  },
  // fitur utama
  mainFeatureContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 18,
  },
  mainFeatureComponent: {
    width: '25%',
    alignItems: 'center',
  },
  mainFeatureImageContainer: {
    borderWidth: 1,
    height: 58,
    width: 58,
    borderColor: '#efefef',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainFeatureText: {
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 6,
    textAlign: 'center',
  },
  sectionFeature: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  spaceBottom: {
    marginBottom: 18,
  },
  // divider
  divider: {
    height: 17,
    backgroundColor: '#F2F2F4',
    marginTop: 20,
  },
  // GO-NEWS section
  goNewsContainer: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  goNewsImageContainer: {
    position: 'relative',
  },
  backGround: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.15,
    borderRadius: 6,
  },
  goNewsImage: {
    height: 200,
    width: '100%',
    borderRadius: 6,
  },
  goNewsLogoContainer: {
    height: 15,
    width: 55,
    position: 'absolute',
    top: 16,
    left: 16,
  },
  goNewsLogo: {
    resizeMode: 'contain',
    flex: 1,
    width: undefined,
  },
  goNewsContent: {
    paddingTop: 16,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E9ED',
  },
  goNewsTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#1C1C1C',
  },
  goNewsDesc: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#7A7A7A',
    marginBottom: 11,
  },
  goNewsButton: {
    backgroundColor: '#61A756',
    paddingHorizontal: 12,
    paddingVertical: 11,
    borderRadius: 4,
    alignSelf: 'flex-end',
  },
  goNewsButtonText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  // Information
  infoContainer: {
    padding: 16,
  },
  infoLogoContainer: {
    height: 15,
    width: 60,
  },
  infoLogo: {
    width: undefined,
  },
  infoTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1C1C1C',
    marginTop: 15,
    marginBottom: 20,
  },
  infoContent: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  infoContentTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  infoContentDesc: {
    fontSize: 17,
    fontWeight: 'normal',
    color: '#4A4A4A',
    width: '80%',
  },
  // GO-FOOD section
  goFoodContainer: {
    padding: 16,
  },
  goFoodBanner: {
    position: 'relative',
  },
  goFoodImage: {
    height: 170,
    width: '100%',
    borderRadius: 6,
  },
  goFoodContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  goFoodTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  goFoodDesc: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
  },
  goFoodButton: {
    backgroundColor: '#61A756',
    paddingHorizontal: 12,
    paddingVertical: 11,
    borderRadius: 4,
    alignSelf: 'stretch',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#E8E9ED',
    marginTop: 16,
    marginBottom: -16,
  },
  // Nearby goFood section
  nearbyContainer: {
    paddingTop: 16,
  },
  nearbyLogoContainer: {
    height: 15,
    width: 60,
    marginLeft: 16,
  },
  nearbyLogo: {
    width: undefined,
    flex: 1,
    resizeMode: 'contain',
  },
  nearbyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  nearbyHeaderTitle1: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#1C1C1C',
  },
  nearbyHeaderTitle2: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#61A652',
  },
  nearbyProductContainer: {
    flexDirection: 'row',
    paddingLeft: 16,
  },
  nearbyProductImgContainer: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginRight: 16,
  },
  nearbyProductImg: {
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    flex: 1,
    borderRadius: 10,
  },
  nearbyProductTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C1C1C',
    marginTop: 12,
  },
  // bottomNavigation
  bottomNavigationContainer: {
    height: 54,
    flexDirection: 'row',
  },
  bottomNavigation: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomNavigationIcon: {
    height: 26,
    width: 26,
  },
  bottomNavigationText: {
    fontSize: 10,
    marginTop: 4,
    color: '#545454',
  },
  activeMode: {
    color: '#43Ab4A',
  },
});

export default App;
