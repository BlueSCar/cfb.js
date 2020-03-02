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
import {AdvancedGameStatOffenseRushingPlays} from './AdvancedGameStatOffenseRushingPlays';
import {AdvancedGameStatOffenseStandardDowns} from './AdvancedGameStatOffenseStandardDowns';

/**
 * The AdvancedGameStatOffense model module.
 * @module model/AdvancedGameStatOffense
 * @version 1.24.6
 */
export class AdvancedGameStatOffense {
  /**
   * Constructs a new <code>AdvancedGameStatOffense</code>.
   * @alias module:model/AdvancedGameStatOffense
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AdvancedGameStatOffense</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdvancedGameStatOffense} obj Optional instance to populate.
   * @return {module:model/AdvancedGameStatOffense} The populated <code>AdvancedGameStatOffense</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AdvancedGameStatOffense();
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
      if (data.hasOwnProperty('standardDowns'))
        obj.standardDowns = AdvancedGameStatOffenseStandardDowns.constructFromObject(data['standardDowns']);
      if (data.hasOwnProperty('passingDowns'))
        obj.passingDowns = AdvancedGameStatOffenseStandardDowns.constructFromObject(data['passingDowns']);
      if (data.hasOwnProperty('rushingPlays'))
        obj.rushingPlays = AdvancedGameStatOffenseRushingPlays.constructFromObject(data['rushingPlays']);
      if (data.hasOwnProperty('passingPlays'))
        obj.passingPlays = AdvancedGameStatOffenseRushingPlays.constructFromObject(data['passingPlays']);
    }
    return obj;
  }
}

/**
 * @member {Number} plays
 */
AdvancedGameStatOffense.prototype.plays = undefined;

/**
 * @member {Number} drives
 */
AdvancedGameStatOffense.prototype.drives = undefined;

/**
 * @member {Number} ppa
 */
AdvancedGameStatOffense.prototype.ppa = undefined;

/**
 * @member {Number} totalPPA
 */
AdvancedGameStatOffense.prototype.totalPPA = undefined;

/**
 * @member {Number} successRate
 */
AdvancedGameStatOffense.prototype.successRate = undefined;

/**
 * @member {Number} explosiveness
 */
AdvancedGameStatOffense.prototype.explosiveness = undefined;

/**
 * @member {Number} powerSuccess
 */
AdvancedGameStatOffense.prototype.powerSuccess = undefined;

/**
 * @member {Number} stuffRate
 */
AdvancedGameStatOffense.prototype.stuffRate = undefined;

/**
 * @member {Number} lineYards
 */
AdvancedGameStatOffense.prototype.lineYards = undefined;

/**
 * @member {Number} lineYardsTotal
 */
AdvancedGameStatOffense.prototype.lineYardsTotal = undefined;

/**
 * @member {Number} secondLevelYards
 */
AdvancedGameStatOffense.prototype.secondLevelYards = undefined;

/**
 * @member {Number} secondLevelYardsTotal
 */
AdvancedGameStatOffense.prototype.secondLevelYardsTotal = undefined;

/**
 * @member {Number} openFieldYards
 */
AdvancedGameStatOffense.prototype.openFieldYards = undefined;

/**
 * @member {Number} openFieldYardsTotal
 */
AdvancedGameStatOffense.prototype.openFieldYardsTotal = undefined;

/**
 * @member {module:model/AdvancedGameStatOffenseStandardDowns} standardDowns
 */
AdvancedGameStatOffense.prototype.standardDowns = undefined;

/**
 * @member {module:model/AdvancedGameStatOffenseStandardDowns} passingDowns
 */
AdvancedGameStatOffense.prototype.passingDowns = undefined;

/**
 * @member {module:model/AdvancedGameStatOffenseRushingPlays} rushingPlays
 */
AdvancedGameStatOffense.prototype.rushingPlays = undefined;

/**
 * @member {module:model/AdvancedGameStatOffenseRushingPlays} passingPlays
 */
AdvancedGameStatOffense.prototype.passingPlays = undefined;


