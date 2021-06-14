/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\").
 *
 * OpenAPI spec version: 3.3.3
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.20
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';

/**
 * The PlayWP model module.
 * @module model/PlayWP
 * @version 3.3.3
 */
export class PlayWP {
  /**
   * Constructs a new <code>PlayWP</code>.
   * @alias module:model/PlayWP
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PlayWP</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayWP} obj Optional instance to populate.
   * @return {module:model/PlayWP} The populated <code>PlayWP</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PlayWP();
      if (data.hasOwnProperty('gamesId'))
        obj.gamesId = ApiClient.convertToType(data['gamesId'], 'Number');
      if (data.hasOwnProperty('playId'))
        obj.playId = ApiClient.convertToType(data['playId'], 'Number');
      if (data.hasOwnProperty('playText'))
        obj.playText = ApiClient.convertToType(data['playText'], 'String');
      if (data.hasOwnProperty('homeId'))
        obj.homeId = ApiClient.convertToType(data['homeId'], 'Number');
      if (data.hasOwnProperty('home'))
        obj.home = ApiClient.convertToType(data['home'], 'String');
      if (data.hasOwnProperty('awayId'))
        obj.awayId = ApiClient.convertToType(data['awayId'], 'Number');
      if (data.hasOwnProperty('away'))
        obj.away = ApiClient.convertToType(data['away'], 'String');
      if (data.hasOwnProperty('spread'))
        obj.spread = ApiClient.convertToType(data['spread'], 'Number');
      if (data.hasOwnProperty('homeBall'))
        obj.homeBall = ApiClient.convertToType(data['homeBall'], 'Boolean');
      if (data.hasOwnProperty('homeScore'))
        obj.homeScore = ApiClient.convertToType(data['homeScore'], 'Number');
      if (data.hasOwnProperty('awayScore'))
        obj.awayScore = ApiClient.convertToType(data['awayScore'], 'Number');
      if (data.hasOwnProperty('timeRemaining'))
        obj.timeRemaining = ApiClient.convertToType(data['timeRemaining'], 'Number');
      if (data.hasOwnProperty('yardLine'))
        obj.yardLine = ApiClient.convertToType(data['yardLine'], 'Number');
      if (data.hasOwnProperty('down'))
        obj.down = ApiClient.convertToType(data['down'], 'Number');
      if (data.hasOwnProperty('distance'))
        obj.distance = ApiClient.convertToType(data['distance'], 'Number');
      if (data.hasOwnProperty('homeWinProb'))
        obj.homeWinProb = ApiClient.convertToType(data['homeWinProb'], 'Number');
      if (data.hasOwnProperty('playNumber'))
        obj.playNumber = ApiClient.convertToType(data['playNumber'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} gamesId
 */
PlayWP.prototype.gamesId = undefined;

/**
 * @member {Number} playId
 */
PlayWP.prototype.playId = undefined;

/**
 * @member {String} playText
 */
PlayWP.prototype.playText = undefined;

/**
 * @member {Number} homeId
 */
PlayWP.prototype.homeId = undefined;

/**
 * @member {String} home
 */
PlayWP.prototype.home = undefined;

/**
 * @member {Number} awayId
 */
PlayWP.prototype.awayId = undefined;

/**
 * @member {String} away
 */
PlayWP.prototype.away = undefined;

/**
 * @member {Number} spread
 */
PlayWP.prototype.spread = undefined;

/**
 * @member {Boolean} homeBall
 */
PlayWP.prototype.homeBall = undefined;

/**
 * @member {Number} homeScore
 */
PlayWP.prototype.homeScore = undefined;

/**
 * @member {Number} awayScore
 */
PlayWP.prototype.awayScore = undefined;

/**
 * @member {Number} timeRemaining
 */
PlayWP.prototype.timeRemaining = undefined;

/**
 * @member {Number} yardLine
 */
PlayWP.prototype.yardLine = undefined;

/**
 * @member {Number} down
 */
PlayWP.prototype.down = undefined;

/**
 * @member {Number} distance
 */
PlayWP.prototype.distance = undefined;

/**
 * @member {Number} homeWinProb
 */
PlayWP.prototype.homeWinProb = undefined;

/**
 * @member {Number} playNumber
 */
PlayWP.prototype.playNumber = undefined;


