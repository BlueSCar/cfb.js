/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.2.14
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';
import {PlayerGameTeams} from './PlayerGameTeams';

/**
 * The PlayerGame model module.
 * @module model/PlayerGame
 * @version 2.2.14
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
        obj.teams = ApiClient.convertToType(data['teams'], [PlayerGameTeams]);
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
PlayerGame.prototype.id = undefined;

/**
 * @member {Array.<module:model/PlayerGameTeams>} teams
 */
PlayerGame.prototype.teams = undefined;


