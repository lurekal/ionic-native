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
import {
  Plugin,
  Cordova,
  CordovaProperty,
  CordovaInstance,
  InstanceProperty,
  IonicNativePlugin,
} from '@ionic-native/core';
import { Observable } from 'rxjs';

/**
 * @name @ionic-native/samsungkeystoresdk
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { @ionic-native/samsungkeystoresdk } from '@ionic-native/ionic-native-samsungkeystoresdk';
 *
 *
 * constructor(private @ionic-native/samsungkeystoresdk: @ionic-native/samsungkeystoresdk) { }
 *
 * ...
 *
 *
 * this.@ionic-native/samsungkeystoresdk.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'cordova-plugin-skeystoresdk',
  plugin: 'cordova-plugin-skeystoresdk', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.SKeystoreSDK', // the variable reference to call the plugin, example: navigator.geolocation
  repo: '', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android'], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class SamsungKeyStoreSDK extends IonicNativePlugin {
  /**
   * This function does something
   * @param message {string} Some param to configure something
   * @param index {number} Another param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */

  @Cordova({})
  coolMethod(message: string, index: number): Promise<any> {
    return;
  }
}
