/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.2.11
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
import {BoxScoreTeamsExplosiveness} from './BoxScoreTeamsExplosiveness';
import {BoxScoreTeamsFieldPosition} from './BoxScoreTeamsFieldPosition';
import {BoxScoreTeamsHavoc} from './BoxScoreTeamsHavoc';
import {BoxScoreTeamsPpa} from './BoxScoreTeamsPpa';
import {BoxScoreTeamsRushing} from './BoxScoreTeamsRushing';
import {BoxScoreTeamsScoringOpportunities} from './BoxScoreTeamsScoringOpportunities';
import {BoxScoreTeamsSuccessRates} from './BoxScoreTeamsSuccessRates';

/**
 * The BoxScoreTeams model module.
 * @module model/BoxScoreTeams
 * @version 2.2.11
 */
export class BoxScoreTeams {
  /**
   * Constructs a new <code>BoxScoreTeams</code>.
   * @alias module:model/BoxScoreTeams
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BoxScoreTeams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxScoreTeams} obj Optional instance to populate.
   * @return {module:model/BoxScoreTeams} The populated <code>BoxScoreTeams</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BoxScoreTeams();
      if (data.hasOwnProperty('ppa'))
        obj.ppa = ApiClient.convertToType(data['ppa'], [BoxScoreTeamsPpa]);
      if (data.hasOwnProperty('successRates'))
        obj.successRates = ApiClient.convertToType(data['successRates'], [BoxScoreTeamsSuccessRates]);
      if (data.hasOwnProperty('explosiveness'))
        obj.explosiveness = ApiClient.convertToType(data['explosiveness'], [BoxScoreTeamsExplosiveness]);
      if (data.hasOwnProperty('rushing'))
        obj.rushing = ApiClient.convertToType(data['rushing'], [BoxScoreTeamsRushing]);
      if (data.hasOwnProperty('havoc'))
        obj.havoc = ApiClient.convertToType(data['havoc'], [BoxScoreTeamsHavoc]);
      if (data.hasOwnProperty('scoringOpportunities'))
        obj.scoringOpportunities = ApiClient.convertToType(data['scoringOpportunities'], [BoxScoreTeamsScoringOpportunities]);
      if (data.hasOwnProperty('fieldPosition'))
        obj.fieldPosition = ApiClient.convertToType(data['fieldPosition'], [BoxScoreTeamsFieldPosition]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/BoxScoreTeamsPpa>} ppa
 */
BoxScoreTeams.prototype.ppa = undefined;

/**
 * @member {Array.<module:model/BoxScoreTeamsSuccessRates>} successRates
 */
BoxScoreTeams.prototype.successRates = undefined;

/**
 * @member {Array.<module:model/BoxScoreTeamsExplosiveness>} explosiveness
 */
BoxScoreTeams.prototype.explosiveness = undefined;

/**
 * @member {Array.<module:model/BoxScoreTeamsRushing>} rushing
 */
BoxScoreTeams.prototype.rushing = undefined;

/**
 * @member {Array.<module:model/BoxScoreTeamsHavoc>} havoc
 */
BoxScoreTeams.prototype.havoc = undefined;

/**
 * @member {Array.<module:model/BoxScoreTeamsScoringOpportunities>} scoringOpportunities
 */
BoxScoreTeams.prototype.scoringOpportunities = undefined;

/**
 * @member {Array.<module:model/BoxScoreTeamsFieldPosition>} fieldPosition
 */
BoxScoreTeams.prototype.fieldPosition = undefined;


