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
 * The TeamGameStats model module.
 * @module model/TeamGameStats
 * @version 1.24.0
 */
export class TeamGameStats {
  /**
   * Constructs a new <code>TeamGameStats</code>.
   * @alias module:model/TeamGameStats
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TeamGameStats</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamGameStats} obj Optional instance to populate.
   * @return {module:model/TeamGameStats} The populated <code>TeamGameStats</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamGameStats();
      if (data.hasOwnProperty('category'))
        obj.category = ApiClient.convertToType(data['category'], 'String');
      if (data.hasOwnProperty('stat'))
        obj.stat = ApiClient.convertToType(data['stat'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} category
 */
TeamGameStats.prototype.category = undefined;

/**
 * @member {String} stat
 */
TeamGameStats.prototype.stat = undefined;

