/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.0.2
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

/**
 * The AdvancedSeasonStatOffenseStandardDowns model module.
 * @module model/AdvancedSeasonStatOffenseStandardDowns
 * @version 2.0.2
 */
export class AdvancedSeasonStatOffenseStandardDowns {
  /**
   * Constructs a new <code>AdvancedSeasonStatOffenseStandardDowns</code>.
   * @alias module:model/AdvancedSeasonStatOffenseStandardDowns
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AdvancedSeasonStatOffenseStandardDowns</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdvancedSeasonStatOffenseStandardDowns} obj Optional instance to populate.
   * @return {module:model/AdvancedSeasonStatOffenseStandardDowns} The populated <code>AdvancedSeasonStatOffenseStandardDowns</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AdvancedSeasonStatOffenseStandardDowns();
      if (data.hasOwnProperty('rate'))
        obj.rate = ApiClient.convertToType(data['rate'], 'Number');
      if (data.hasOwnProperty('ppa'))
        obj.ppa = ApiClient.convertToType(data['ppa'], 'Number');
      if (data.hasOwnProperty('successRate'))
        obj.successRate = ApiClient.convertToType(data['successRate'], 'Number');
      if (data.hasOwnProperty('explosiveness'))
        obj.explosiveness = ApiClient.convertToType(data['explosiveness'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} rate
 */
AdvancedSeasonStatOffenseStandardDowns.prototype.rate = undefined;

/**
 * @member {Number} ppa
 */
AdvancedSeasonStatOffenseStandardDowns.prototype.ppa = undefined;

/**
 * @member {Number} successRate
 */
AdvancedSeasonStatOffenseStandardDowns.prototype.successRate = undefined;

/**
 * @member {Number} explosiveness
 */
AdvancedSeasonStatOffenseStandardDowns.prototype.explosiveness = undefined;


