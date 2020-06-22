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
import {AdvancedSeasonStatOffenseFieldPosition} from './AdvancedSeasonStatOffenseFieldPosition';
import {AdvancedSeasonStatOffenseRushingPlays} from './AdvancedSeasonStatOffenseRushingPlays';
import {AdvancedSeasonStatOffenseStandardDowns} from './AdvancedSeasonStatOffenseStandardDowns';
import {TeamSPRatingDefenseHavoc} from './TeamSPRatingDefenseHavoc';

/**
 * The AdvancedSeasonStatDefense model module.
 * @module model/AdvancedSeasonStatDefense
 * @version 2.0.1
 */
export class AdvancedSeasonStatDefense {
  /**
   * Constructs a new <code>AdvancedSeasonStatDefense</code>.
   * @alias module:model/AdvancedSeasonStatDefense
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AdvancedSeasonStatDefense</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdvancedSeasonStatDefense} obj Optional instance to populate.
   * @return {module:model/AdvancedSeasonStatDefense} The populated <code>AdvancedSeasonStatDefense</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AdvancedSeasonStatDefense();
      if (data.hasOwnProperty('plays'))
        obj.plays = ApiClient.convertToType(data['plays'], 'Number');
      if (data.hasOwnProperty('drives'))
        obj.drives = ApiClient.convertToType(data['drives'], 'Number');
      if (data.hasOwnProperty('ppa'))
        obj.ppa = ApiClient.convertToType(data['ppa'], 'Number');
      if (data.hasOwnProperty('totalPPA'))
        obj.totalPPA = ApiClient.convertToType(data['totalPPA'], 'Number');
      if (data.hasOwnProperty('successRate'))
        obj.successRate = ApiClient.convertToType(data['successRate'], 'Number');
      if (data.hasOwnProperty('explosiveness'))
        obj.explosiveness = ApiClient.convertToType(data['explosiveness'], 'Number');
      if (data.hasOwnProperty('powerSuccess'))
        obj.powerSuccess = ApiClient.convertToType(data['powerSuccess'], 'Number');
      if (data.hasOwnProperty('stuffRate'))
        obj.stuffRate = ApiClient.convertToType(data['stuffRate'], 'Number');
      if (data.hasOwnProperty('lineYards'))
        obj.lineYards = ApiClient.convertToType(data['lineYards'], 'Number');
      if (data.hasOwnProperty('lineYardsTotal'))
        obj.lineYardsTotal = ApiClient.convertToType(data['lineYardsTotal'], 'Number');
      if (data.hasOwnProperty('secondLevelYards'))
        obj.secondLevelYards = ApiClient.convertToType(data['secondLevelYards'], 'Number');
      if (data.hasOwnProperty('secondLevelYardsTotal'))
        obj.secondLevelYardsTotal = ApiClient.convertToType(data['secondLevelYardsTotal'], 'Number');
      if (data.hasOwnProperty('openFieldYards'))
        obj.openFieldYards = ApiClient.convertToType(data['openFieldYards'], 'Number');
      if (data.hasOwnProperty('openFieldYardsTotal'))
        obj.openFieldYardsTotal = ApiClient.convertToType(data['openFieldYardsTotal'], 'Number');
      if (data.hasOwnProperty('pointsPerOpportunity'))
        obj.pointsPerOpportunity = ApiClient.convertToType(data['pointsPerOpportunity'], 'Number');
      if (data.hasOwnProperty('fieldPosition'))
        obj.fieldPosition = AdvancedSeasonStatOffenseFieldPosition.constructFromObject(data['fieldPosition']);
      if (data.hasOwnProperty('havoc'))
        obj.havoc = TeamSPRatingDefenseHavoc.constructFromObject(data['havoc']);
      if (data.hasOwnProperty('standardDowns'))
        obj.standardDowns = AdvancedSeasonStatOffenseStandardDowns.constructFromObject(data['standardDowns']);
      if (data.hasOwnProperty('passingDowns'))
        obj.passingDowns = AdvancedSeasonStatOffenseStandardDowns.constructFromObject(data['passingDowns']);
      if (data.hasOwnProperty('rushingPlays'))
        obj.rushingPlays = AdvancedSeasonStatOffenseRushingPlays.constructFromObject(data['rushingPlays']);
      if (data.hasOwnProperty('passingPlays'))
        obj.passingPlays = AdvancedSeasonStatOffenseRushingPlays.constructFromObject(data['passingPlays']);
    }
    return obj;
  }
}

/**
 * @member {Number} plays
 */
AdvancedSeasonStatDefense.prototype.plays = undefined;

/**
 * @member {Number} drives
 */
AdvancedSeasonStatDefense.prototype.drives = undefined;

/**
 * @member {Number} ppa
 */
AdvancedSeasonStatDefense.prototype.ppa = undefined;

/**
 * @member {Number} totalPPA
 */
AdvancedSeasonStatDefense.prototype.totalPPA = undefined;

/**
 * @member {Number} successRate
 */
AdvancedSeasonStatDefense.prototype.successRate = undefined;

/**
 * @member {Number} explosiveness
 */
AdvancedSeasonStatDefense.prototype.explosiveness = undefined;

/**
 * @member {Number} powerSuccess
 */
AdvancedSeasonStatDefense.prototype.powerSuccess = undefined;

/**
 * @member {Number} stuffRate
 */
AdvancedSeasonStatDefense.prototype.stuffRate = undefined;

/**
 * @member {Number} lineYards
 */
AdvancedSeasonStatDefense.prototype.lineYards = undefined;

/**
 * @member {Number} lineYardsTotal
 */
AdvancedSeasonStatDefense.prototype.lineYardsTotal = undefined;

/**
 * @member {Number} secondLevelYards
 */
AdvancedSeasonStatDefense.prototype.secondLevelYards = undefined;

/**
 * @member {Number} secondLevelYardsTotal
 */
AdvancedSeasonStatDefense.prototype.secondLevelYardsTotal = undefined;

/**
 * @member {Number} openFieldYards
 */
AdvancedSeasonStatDefense.prototype.openFieldYards = undefined;

/**
 * @member {Number} openFieldYardsTotal
 */
AdvancedSeasonStatDefense.prototype.openFieldYardsTotal = undefined;

/**
 * @member {Number} pointsPerOpportunity
 */
AdvancedSeasonStatDefense.prototype.pointsPerOpportunity = undefined;

/**
 * @member {module:model/AdvancedSeasonStatOffenseFieldPosition} fieldPosition
 */
AdvancedSeasonStatDefense.prototype.fieldPosition = undefined;

/**
 * @member {module:model/TeamSPRatingDefenseHavoc} havoc
 */
AdvancedSeasonStatDefense.prototype.havoc = undefined;

/**
 * @member {module:model/AdvancedSeasonStatOffenseStandardDowns} standardDowns
 */
AdvancedSeasonStatDefense.prototype.standardDowns = undefined;

/**
 * @member {module:model/AdvancedSeasonStatOffenseStandardDowns} passingDowns
 */
AdvancedSeasonStatDefense.prototype.passingDowns = undefined;

/**
 * @member {module:model/AdvancedSeasonStatOffenseRushingPlays} rushingPlays
 */
AdvancedSeasonStatDefense.prototype.rushingPlays = undefined;

/**
 * @member {module:model/AdvancedSeasonStatOffenseRushingPlays} passingPlays
 */
AdvancedSeasonStatDefense.prototype.passingPlays = undefined;


