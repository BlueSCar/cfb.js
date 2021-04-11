/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\").
 *
 * OpenAPI spec version: 3.2.0
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';

/**
 * The PlayerGame model module.
 * @module model/PlayerGame
 * @version 3.2.0
 */
export class PlayerGame {
  /**
   * Constructs a new <code>PlayerGame</code>.
   * @alias module:model/PlayerGame
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PlayerGame</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayerGame} obj Optional instance to populate.
   * @return {module:model/PlayerGame} The populated <code>PlayerGame</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PlayerGame();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('teams'))
        obj.teams = ApiClient.convertToType(data['teams'], [Object]);
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
PlayerGame.prototype.id = undefined;

/**
 * @member {Array.<Object>} teams
 */
PlayerGame.prototype.teams = undefined;


