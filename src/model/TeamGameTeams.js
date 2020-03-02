/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 1.24.6
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
import {TeamGameStats} from './TeamGameStats';

/**
 * The TeamGameTeams model module.
 * @module model/TeamGameTeams
 * @version 1.24.6
 */
export class TeamGameTeams {
  /**
   * Constructs a new <code>TeamGameTeams</code>.
   * @alias module:model/TeamGameTeams
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TeamGameTeams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamGameTeams} obj Optional instance to populate.
   * @return {module:model/TeamGameTeams} The populated <code>TeamGameTeams</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamGameTeams();
      if (data.hasOwnProperty('school'))
        obj.school = ApiClient.convertToType(data['school'], 'String');
      if (data.hasOwnProperty('conference'))
        obj.conference = ApiClient.convertToType(data['conference'], 'String');
      if (data.hasOwnProperty('homeAway'))
        obj.homeAway = ApiClient.convertToType(data['homeAway'], 'Boolean');
      if (data.hasOwnProperty('points'))
        obj.points = ApiClient.convertToType(data['points'], 'Number');
      if (data.hasOwnProperty('stats'))
        obj.stats = ApiClient.convertToType(data['stats'], [TeamGameStats]);
    }
    return obj;
  }
}

/**
 * @member {String} school
 */
TeamGameTeams.prototype.school = undefined;

/**
 * @member {String} conference
 */
TeamGameTeams.prototype.conference = undefined;

/**
 * @member {Boolean} homeAway
 */
TeamGameTeams.prototype.homeAway = undefined;

/**
 * @member {Number} points
 */
TeamGameTeams.prototype.points = undefined;

/**
 * @member {Array.<module:model/TeamGameStats>} stats
 */
TeamGameTeams.prototype.stats = undefined;


