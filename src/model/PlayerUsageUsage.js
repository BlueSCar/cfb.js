/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 1.24.0
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';

/**
 * The PlayerUsageUsage model module.
 * @module model/PlayerUsageUsage
 * @version 1.24.0
 */
export class PlayerUsageUsage {
  /**
   * Constructs a new <code>PlayerUsageUsage</code>.
   * @alias module:model/PlayerUsageUsage
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PlayerUsageUsage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayerUsageUsage} obj Optional instance to populate.
   * @return {module:model/PlayerUsageUsage} The populated <code>PlayerUsageUsage</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PlayerUsageUsage();
      if (data.hasOwnProperty('overall'))
        obj.overall = ApiClient.convertToType(data['overall'], 'Number');
      if (data.hasOwnProperty('pass'))
        obj.pass = ApiClient.convertToType(data['pass'], 'Number');
      if (data.hasOwnProperty('rush'))
        obj.rush = ApiClient.convertToType(data['rush'], 'Number');
      if (data.hasOwnProperty('firstDown'))
        obj.firstDown = ApiClient.convertToType(data['firstDown'], 'Number');
      if (data.hasOwnProperty('secondDown'))
        obj.secondDown = ApiClient.convertToType(data['secondDown'], 'Number');
      if (data.hasOwnProperty('thirdDown'))
        obj.thirdDown = ApiClient.convertToType(data['thirdDown'], 'Number');
      if (data.hasOwnProperty('standardDowns'))
        obj.standardDowns = ApiClient.convertToType(data['standardDowns'], 'Number');
      if (data.hasOwnProperty('passingDowns'))
        obj.passingDowns = ApiClient.convertToType(data['passingDowns'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} overall
 */
PlayerUsageUsage.prototype.overall = undefined;

/**
 * @member {Number} pass
 */
PlayerUsageUsage.prototype.pass = undefined;

/**
 * @member {Number} rush
 */
PlayerUsageUsage.prototype.rush = undefined;

/**
 * @member {Number} firstDown
 */
PlayerUsageUsage.prototype.firstDown = undefined;

/**
 * @member {Number} secondDown
 */
PlayerUsageUsage.prototype.secondDown = undefined;

/**
 * @member {Number} thirdDown
 */
PlayerUsageUsage.prototype.thirdDown = undefined;

/**
 * @member {Number} standardDowns
 */
PlayerUsageUsage.prototype.standardDowns = undefined;

/**
 * @member {Number} passingDowns
 */
PlayerUsageUsage.prototype.passingDowns = undefined;

