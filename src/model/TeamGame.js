/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.0.0
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.21
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';

/**
 * The TeamGame model module.
 * @module model/TeamGame
 * @version 4.0.0
 */
export class TeamGame {
  /**
   * Constructs a new <code>TeamGame</code>.
   * @alias module:model/TeamGame
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TeamGame</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamGame} obj Optional instance to populate.
   * @return {module:model/TeamGame} The populated <code>TeamGame</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamGame();
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
TeamGame.prototype.id = undefined;

/**
 * @member {Array.<Object>} teams
 */
TeamGame.prototype.teams = undefined;


