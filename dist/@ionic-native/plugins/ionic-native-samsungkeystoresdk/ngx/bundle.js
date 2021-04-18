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
    SamsungKeyStoreSDK.prototype.coolMethod = function (message, index) { return core.cordova(this, "coolMethod", {}, arguments); };
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
