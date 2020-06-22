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
import {BoxScorePlayers} from './BoxScorePlayers';
import {BoxScoreTeams} from './BoxScoreTeams';

/**
 * The BoxScore model module.
 * @module model/BoxScore
 * @version 2.0.1
 */
export class BoxScore {
  /**
   * Constructs a new <code>BoxScore</code>.
   * @alias module:model/BoxScore
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BoxScore</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxScore} obj Optional instance to populate.
   * @return {module:model/BoxScore} The populated <code>BoxScore</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BoxScore();
      if (data.hasOwnProperty('teams'))
        obj.teams = BoxScoreTeams.constructFromObject(data['teams']);
      if (data.hasOwnProperty('players'))
        obj.players = BoxScorePlayers.constructFromObject(data['players']);
    }
    return obj;
  }
}

/**
 * @member {module:model/BoxScoreTeams} teams
 */
BoxScore.prototype.teams = undefined;

/**
 * @member {module:model/BoxScorePlayers} players
 */
BoxScore.prototype.players = undefined;


