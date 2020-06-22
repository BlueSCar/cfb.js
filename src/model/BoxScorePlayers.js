/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.0.1
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';
import {BoxScorePlayersPpa} from './BoxScorePlayersPpa';
import {BoxScorePlayersUsage} from './BoxScorePlayersUsage';

/**
 * The BoxScorePlayers model module.
 * @module model/BoxScorePlayers
 * @version 2.0.1
 */
export class BoxScorePlayers {
  /**
   * Constructs a new <code>BoxScorePlayers</code>.
   * @alias module:model/BoxScorePlayers
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BoxScorePlayers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxScorePlayers} obj Optional instance to populate.
   * @return {module:model/BoxScorePlayers} The populated <code>BoxScorePlayers</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BoxScorePlayers();
      if (data.hasOwnProperty('usage'))
        obj.usage = ApiClient.convertToType(data['usage'], [BoxScorePlayersUsage]);
      if (data.hasOwnProperty('ppa'))
        obj.ppa = ApiClient.convertToType(data['ppa'], [BoxScorePlayersPpa]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/BoxScorePlayersUsage>} usage
 */
BoxScorePlayers.prototype.usage = undefined;

/**
 * @member {Array.<module:model/BoxScorePlayersPpa>} ppa
 */
BoxScorePlayers.prototype.ppa = undefined;


