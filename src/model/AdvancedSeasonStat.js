/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 1.25.1
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
import {AdvancedSeasonStatDefense} from './AdvancedSeasonStatDefense';
import {AdvancedSeasonStatOffense} from './AdvancedSeasonStatOffense';

/**
 * The AdvancedSeasonStat model module.
 * @module model/AdvancedSeasonStat
 * @version 1.25.1
 */
export class AdvancedSeasonStat {
  /**
   * Constructs a new <code>AdvancedSeasonStat</code>.
   * @alias module:model/AdvancedSeasonStat
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AdvancedSeasonStat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdvancedSeasonStat} obj Optional instance to populate.
   * @return {module:model/AdvancedSeasonStat} The populated <code>AdvancedSeasonStat</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AdvancedSeasonStat();
      if (data.hasOwnProperty('season'))
        obj.season = ApiClient.convertToType(data['season'], 'Number');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('conference'))
        obj.conference = ApiClient.convertToType(data['conference'], 'String');
      if (data.hasOwnProperty('offense'))
        obj.offense = AdvancedSeasonStatOffense.constructFromObject(data['offense']);
      if (data.hasOwnProperty('defense'))
        obj.defense = AdvancedSeasonStatDefense.constructFromObject(data['defense']);
    }
    return obj;
  }
}

/**
 * @member {Number} season
 */
AdvancedSeasonStat.prototype.season = undefined;

/**
 * @member {String} team
 */
AdvancedSeasonStat.prototype.team = undefined;

/**
 * @member {String} conference
 */
AdvancedSeasonStat.prototype.conference = undefined;

/**
 * @member {module:model/AdvancedSeasonStatOffense} offense
 */
AdvancedSeasonStat.prototype.offense = undefined;

/**
 * @member {module:model/AdvancedSeasonStatDefense} defense
 */
AdvancedSeasonStat.prototype.defense = undefined;


