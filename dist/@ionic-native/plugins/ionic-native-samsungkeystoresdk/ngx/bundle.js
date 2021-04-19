'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var SamsungKeyStoreSDK = /** @class */ (function (_super) {
    tslib.__extends(SamsungKeyStoreSDK, _super);
    function SamsungKeyStoreSDK() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SamsungKeyStoreSDK.prototype.getInstance = function () { return core.cordova(this, "getInstance", {}, arguments); };
    SamsungKeyStoreSDK.prototype.getKeystoreApiLevel = function () { return core.cordova(this, "getKeystoreApiLevel", {}, arguments); };
    SamsungKeyStoreSDK.prototype.checkMandatoryAppUpdate = function () { return core.cordova(this, "checkMandatoryAppUpdate", {}, arguments); };
    SamsungKeyStoreSDK.prototype.getSeedHash = function () { return core.cordova(this, "getSeedHash", {}, arguments); };
    SamsungKeyStoreSDK.prototype.getAddress = function (index) { return core.cordova(this, "getAddress", {}, arguments); };
    SamsungKeyStoreSDK.prototype.getPublicKey = function (index) { return core.cordova(this, "getPublicKey", {}, arguments); };
    SamsungKeyStoreSDK.prototype.signTransaction = function (rawTransaction, addressIndex) { return core.cordova(this, "signTransaction", {}, arguments); };
    SamsungKeyStoreSDK.prototype.signPersonalMessage = function (message, addressIndex) { return core.cordova(this, "signPersonalMessage", {}, arguments); };
    SamsungKeyStoreSDK.prototype.linkSDK = function (urlcode) { return core.cordova(this, "linkSDK", {}, arguments); };
    SamsungKeyStoreSDK.pluginName = "cordova-plugin-skeystoresdk";
    SamsungKeyStoreSDK.plugin = "cordova-plugin-skeystoresdk";
    SamsungKeyStoreSDK.pluginRef = "cordova.plugins.SKeystoreSDK";
    SamsungKeyStoreSDK.repo = "";
    SamsungKeyStoreSDK.install = "";
    SamsungKeyStoreSDK.installVariables = [];
    SamsungKeyStoreSDK.platforms = ["Android"];
    SamsungKeyStoreSDK.decorators = [
        { type: core$1.Injectable }
    ];
    return SamsungKeyStoreSDK;
}(core.IonicNativePlugin));

exports.SamsungKeyStoreSDK = SamsungKeyStoreSDK;
