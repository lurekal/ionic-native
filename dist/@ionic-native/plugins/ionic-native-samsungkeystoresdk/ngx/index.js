import { __extends } from "tslib";
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var SamsungKeyStoreSDK = /** @class */ (function (_super) {
    __extends(SamsungKeyStoreSDK, _super);
    function SamsungKeyStoreSDK() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SamsungKeyStoreSDK.prototype.getInstance = function () { return cordova(this, "getInstance", {}, arguments); };
    ;
    SamsungKeyStoreSDK.prototype.getKeystoreApiLevel = function () { return cordova(this, "getKeystoreApiLevel", {}, arguments); };
    ;
    SamsungKeyStoreSDK.prototype.checkMandatoryAppUpdate = function () { return cordova(this, "checkMandatoryAppUpdate", {}, arguments); };
    ;
    SamsungKeyStoreSDK.prototype.getSeedHash = function () { return cordova(this, "getSeedHash", {}, arguments); };
    ;
    SamsungKeyStoreSDK.prototype.getAddress = function (index) { return cordova(this, "getAddress", {}, arguments); };
    ;
    SamsungKeyStoreSDK.prototype.getPublicKey = function (index) { return cordova(this, "getPublicKey", {}, arguments); };
    ;
    SamsungKeyStoreSDK.prototype.signTransaction = function (rawTransaction, addressIndex) { return cordova(this, "signTransaction", {}, arguments); };
    ;
    SamsungKeyStoreSDK.prototype.signPersonalMessage = function (message, addressIndex) { return cordova(this, "signPersonalMessage", {}, arguments); };
    ;
    SamsungKeyStoreSDK.prototype.linkSDK = function (urlcode) { return cordova(this, "linkSDK", {}, arguments); };
    ;
    SamsungKeyStoreSDK.pluginName = "cordova-plugin-skeystoresdk";
    SamsungKeyStoreSDK.plugin = "cordova-plugin-skeystoresdk";
    SamsungKeyStoreSDK.pluginRef = "cordova.plugins.SKeystoreSDK";
    SamsungKeyStoreSDK.repo = "";
    SamsungKeyStoreSDK.install = "";
    SamsungKeyStoreSDK.installVariables = [];
    SamsungKeyStoreSDK.platforms = ["Android"];
    SamsungKeyStoreSDK.decorators = [
        { type: Injectable }
    ];
    return SamsungKeyStoreSDK;
}(IonicNativePlugin));
export { SamsungKeyStoreSDK };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2lvbmljLW5hdGl2ZS1zYW1zdW5na2V5c3RvcmVzZGsvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7OztHQVVHO0FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQU9OLE1BQU0sb0JBQW9CLENBQUM7O0lBa0NZLHNDQUFpQjs7OztJQUl2RCx3Q0FBVztJQUF5QixDQUFDO0lBRXJDLGdEQUFtQjtJQUF5QixDQUFDO0lBRTdDLG9EQUF1QjtJQUF5QixDQUFDO0lBRWpELHdDQUFXO0lBQXlCLENBQUM7SUFFckMsdUNBQVUsYUFBQyxLQUFhO0lBQXdCLENBQUM7SUFFakQseUNBQVksYUFBQyxLQUFhO0lBQXdCLENBQUM7SUFFbkQsNENBQWUsYUFBQyxjQUFtQixFQUFFLFlBQW9CO0lBQXdCLENBQUM7SUFFbEYsZ0RBQW1CLGFBQUMsT0FBZSxFQUFFLFlBQW9CO0lBQXdCLENBQUM7SUFFbEYsb0NBQU8sYUFBQyxPQUFlO0lBQXdCLENBQUM7Ozs7Ozs7OztnQkFyQmpELFVBQVU7OzZCQXBEWDtFQXFEd0MsaUJBQWlCO1NBQTVDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBpcyBhIHRlbXBsYXRlIGZvciBuZXcgcGx1Z2luIHdyYXBwZXJzXG4gKlxuICogVE9ETzpcbiAqIC0gQWRkL0NoYW5nZSBpbmZvcm1hdGlvbiBiZWxvd1xuICogLSBEb2N1bWVudCB1c2FnZSAoaW1wb3J0aW5nLCBleGVjdXRpbmcgbWFpbiBmdW5jdGlvbmFsaXR5KVxuICogLSBSZW1vdmUgYW55IGltcG9ydHMgdGhhdCB5b3UgYXJlIG5vdCB1c2luZ1xuICogLSBSZW1vdmUgYWxsIHRoZSBjb21tZW50cyBpbmNsdWRlZCBpbiB0aGlzIHRlbXBsYXRlLCBFWENFUFQgdGhlIEBQbHVnaW4gd3JhcHBlciBkb2NzIGFuZCBhbnkgb3RoZXIgZG9jcyB5b3UgYWRkZWRcbiAqIC0gUmVtb3ZlIHRoaXMgbm90ZVxuICpcbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUGx1Z2luLFxuICBDb3Jkb3ZhLFxuICBDb3Jkb3ZhUHJvcGVydHksXG4gIENvcmRvdmFJbnN0YW5jZSxcbiAgSW5zdGFuY2VQcm9wZXJ0eSxcbiAgSW9uaWNOYXRpdmVQbHVnaW4sXG59IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQG5hbWUgQGlvbmljLW5hdGl2ZS9zYW1zdW5na2V5c3RvcmVzZGtcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEBpb25pYy1uYXRpdmUvc2Ftc3VuZ2tleXN0b3Jlc2RrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9pb25pYy1uYXRpdmUtc2Ftc3VuZ2tleXN0b3Jlc2RrJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBAaW9uaWMtbmF0aXZlL3NhbXN1bmdrZXlzdG9yZXNkazogQGlvbmljLW5hdGl2ZS9zYW1zdW5na2V5c3RvcmVzZGspIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLkBpb25pYy1uYXRpdmUvc2Ftc3VuZ2tleXN0b3Jlc2RrLmZ1bmN0aW9uTmFtZSgnSGVsbG8nLCAxMjMpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnY29yZG92YS1wbHVnaW4tc2tleXN0b3Jlc2RrJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc2tleXN0b3Jlc2RrJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5TS2V5c3RvcmVTREsnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gIHJlcG86ICcnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIGluc3RhbGw6ICcnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTYW1zdW5nS2V5U3RvcmVTREsgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cblxuICBAQ29yZG92YSgpXG4gIGdldEluc3RhbmNlKCk6IFByb21pc2U8YW55PntyZXR1cm47fTtcbiAgQENvcmRvdmEoKVxuICBnZXRLZXlzdG9yZUFwaUxldmVsKCk6IFByb21pc2U8YW55PntyZXR1cm47fTtcbiAgQENvcmRvdmEoKVxuICBjaGVja01hbmRhdG9yeUFwcFVwZGF0ZSgpOiBQcm9taXNlPGFueT57cmV0dXJuO307XG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U2VlZEhhc2goKTogUHJvbWlzZTxhbnk+e3JldHVybjt9O1xuICBAQ29yZG92YSgpXG4gIGdldEFkZHJlc3MoaW5kZXg6IG51bWJlcik6IFByb21pc2U8YW55PntyZXR1cm47fTtcbiAgQENvcmRvdmEoKVxuICBnZXRQdWJsaWNLZXkoaW5kZXg6IG51bWJlcik6IFByb21pc2U8YW55PntyZXR1cm47fTtcbiAgQENvcmRvdmEoKVxuICBzaWduVHJhbnNhY3Rpb24ocmF3VHJhbnNhY3Rpb246IGFueSwgYWRkcmVzc0luZGV4OiBudW1iZXIpOiBQcm9taXNlPGFueT57cmV0dXJuO307XG4gIEBDb3Jkb3ZhKClcbiAgc2lnblBlcnNvbmFsTWVzc2FnZShtZXNzYWdlOiBzdHJpbmcsIGFkZHJlc3NJbmRleDogbnVtYmVyKTogUHJvbWlzZTxhbnk+e3JldHVybjt9O1xuICBAQ29yZG92YSgpXG4gIGxpbmtTREsodXJsY29kZTogbnVtYmVyKTogUHJvbWlzZTxhbnk+e3JldHVybjt9O1xuXG5cblxuXG5cblxuXG59XG4iXX0=