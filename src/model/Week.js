/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.4.0
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
 * The Week model module.
 * @module model/Week
 * @version 2.4.0
 */
export class Week {
  /**
   * Constructs a new <code>Week</code>.
   * @alias module:model/Week
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Week</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Week} obj Optional instance to populate.
   * @return {module:model/Week} The populated <code>Week</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Week();
      if (data.hasOwnProperty('season'))
        obj.season = ApiClient.convertToType(data['season'], 'Number');
      if (data.hasOwnProperty('week'))
        obj.week = ApiClient.convertToType(data['week'], 'Number');
      if (data.hasOwnProperty('seasonType'))
        obj.seasonType = ApiClient.convertToType(data['seasonType'], 'String');
      if (data.hasOwnProperty('firstGameStart'))
        obj.firstGameStart = ApiClient.convertToType(data['firstGameStart'], 'String');
      if (data.hasOwnProperty('lastGameStart'))
        obj.lastGameStart = ApiClient.convertToType(data['lastGameStart'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} season
 */
Week.prototype.season = undefined;

/**
 * @member {Number} week
 */
Week.prototype.week = undefined;

/**
 * @member {String} seasonType
 */
Week.prototype.seasonType = undefined;

/**
 * @member {String} firstGameStart
 */
Week.prototype.firstGameStart = undefined;

/**
 * @member {String} lastGameStart
 */
Week.prototype.lastGameStart = undefined;

