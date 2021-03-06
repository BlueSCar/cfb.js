/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.4.1
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';

/**
 * The DriveStartTime model module.
 * @module model/DriveStartTime
 * @version 2.4.1
 */
export class DriveStartTime {
  /**
   * Constructs a new <code>DriveStartTime</code>.
   * @alias module:model/DriveStartTime
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DriveStartTime</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DriveStartTime} obj Optional instance to populate.
   * @return {module:model/DriveStartTime} The populated <code>DriveStartTime</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DriveStartTime();
      if (data.hasOwnProperty('minutes'))
        obj.minutes = ApiClient.convertToType(data['minutes'], 'Number');
      if (data.hasOwnProperty('seconds'))
        obj.seconds = ApiClient.convertToType(data['seconds'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} minutes
 */
DriveStartTime.prototype.minutes = undefined;

/**
 * @member {Number} seconds
 */
DriveStartTime.prototype.seconds = undefined;


