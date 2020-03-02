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
import {BoxScoreTeamsOverall} from './BoxScoreTeamsOverall';

/**
 * The BoxScoreTeamsPpa model module.
 * @module model/BoxScoreTeamsPpa
 * @version 1.24.6
 */
export class BoxScoreTeamsPpa {
  /**
   * Constructs a new <code>BoxScoreTeamsPpa</code>.
   * @alias module:model/BoxScoreTeamsPpa
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BoxScoreTeamsPpa</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxScoreTeamsPpa} obj Optional instance to populate.
   * @return {module:model/BoxScoreTeamsPpa} The populated <code>BoxScoreTeamsPpa</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BoxScoreTeamsPpa();
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('overall'))
        obj.overall = BoxScoreTeamsOverall.constructFromObject(data['overall']);
      if (data.hasOwnProperty('passing'))
        obj.passing = BoxScoreTeamsOverall.constructFromObject(data['passing']);
      if (data.hasOwnProperty('rushing'))
        obj.rushing = BoxScoreTeamsOverall.constructFromObject(data['rushing']);
    }
    return obj;
  }
}

/**
 * @member {String} team
 */
BoxScoreTeamsPpa.prototype.team = undefined;

/**
 * @member {module:model/BoxScoreTeamsOverall} overall
 */
BoxScoreTeamsPpa.prototype.overall = undefined;

/**
 * @member {module:model/BoxScoreTeamsOverall} passing
 */
BoxScoreTeamsPpa.prototype.passing = undefined;

/**
 * @member {module:model/BoxScoreTeamsOverall} rushing
 */
BoxScoreTeamsPpa.prototype.rushing = undefined;


