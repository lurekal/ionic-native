import { SamsungKeyStoreSDK } from './@ionic-native/plugins/ionic-native-samsungkeystoresdk';
window.IonicNative = {
SamsungKeyStoreSDK
};
require('./@ionic-native/core/bootstrap').checkReady();
require('./@ionic-native/core/ng1').initAngular1(window.IonicNative);