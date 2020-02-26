/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 1.24.3
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
 * The GameLinesLines model module.
 * @module model/GameLinesLines
 * @version 1.24.3
 */
export class GameLinesLines {
  /**
   * Constructs a new <code>GameLinesLines</code>.
   * @alias module:model/GameLinesLines
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GameLinesLines</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GameLinesLines} obj Optional instance to populate.
   * @return {module:model/GameLinesLines} The populated <code>GameLinesLines</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GameLinesLines();
      if (data.hasOwnProperty('provider'))
        obj.provider = ApiClient.convertToType(data['provider'], 'String');
      if (data.hasOwnProperty('spread'))
        obj.spread = ApiClient.convertToType(data['spread'], 'Number');
      if (data.hasOwnProperty('formattedSpread'))
        obj.formattedSpread = ApiClient.convertToType(data['formattedSpread'], 'String');
      if (data.hasOwnProperty('overUnder'))
        obj.overUnder = ApiClient.convertToType(data['overUnder'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} provider
 */
GameLinesLines.prototype.provider = undefined;

/**
 * @member {Number} spread
 */
GameLinesLines.prototype.spread = undefined;

/**
 * @member {String} formattedSpread
 */
GameLinesLines.prototype.formattedSpread = undefined;

/**
 * @member {Number} overUnder
 */
GameLinesLines.prototype.overUnder = undefined;


