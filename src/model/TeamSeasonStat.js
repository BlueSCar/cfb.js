/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 3.0.1
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
 * The TeamSeasonStat model module.
 * @module model/TeamSeasonStat
 * @version 3.0.1
 */
export class TeamSeasonStat {
  /**
   * Constructs a new <code>TeamSeasonStat</code>.
   * @alias module:model/TeamSeasonStat
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TeamSeasonStat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamSeasonStat} obj Optional instance to populate.
   * @return {module:model/TeamSeasonStat} The populated <code>TeamSeasonStat</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamSeasonStat();
      if (data.hasOwnProperty('season'))
        obj.season = ApiClient.convertToType(data['season'], 'Number');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('conference'))
        obj.conference = ApiClient.convertToType(data['conference'], 'String');
      if (data.hasOwnProperty('statName'))
        obj.statName = ApiClient.convertToType(data['statName'], 'String');
      if (data.hasOwnProperty('statValue'))
        obj.statValue = ApiClient.convertToType(data['statValue'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} season
 */
TeamSeasonStat.prototype.season = undefined;

/**
 * @member {String} team
 */
TeamSeasonStat.prototype.team = undefined;

/**
 * @member {String} conference
 */
TeamSeasonStat.prototype.conference = undefined;

/**
 * @member {String} statName
 */
TeamSeasonStat.prototype.statName = undefined;

/**
 * @member {Number} statValue
 */
TeamSeasonStat.prototype.statValue = undefined;


