/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.0.0
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
import {BoxScoreTeamsOverall} from './BoxScoreTeamsOverall';

/**
 * The BoxScoreTeamsSuccessRates model module.
 * @module model/BoxScoreTeamsSuccessRates
 * @version 2.0.0
 */
export class BoxScoreTeamsSuccessRates {
  /**
   * Constructs a new <code>BoxScoreTeamsSuccessRates</code>.
   * @alias module:model/BoxScoreTeamsSuccessRates
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BoxScoreTeamsSuccessRates</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxScoreTeamsSuccessRates} obj Optional instance to populate.
   * @return {module:model/BoxScoreTeamsSuccessRates} The populated <code>BoxScoreTeamsSuccessRates</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BoxScoreTeamsSuccessRates();
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('overall'))
        obj.overall = BoxScoreTeamsOverall.constructFromObject(data['overall']);
      if (data.hasOwnProperty('standardDowns'))
        obj.standardDowns = BoxScoreTeamsOverall.constructFromObject(data['standardDowns']);
      if (data.hasOwnProperty('passingDowns'))
        obj.passingDowns = BoxScoreTeamsOverall.constructFromObject(data['passingDowns']);
    }
    return obj;
  }
}

/**
 * @member {String} team
 */
BoxScoreTeamsSuccessRates.prototype.team = undefined;

/**
 * @member {module:model/BoxScoreTeamsOverall} overall
 */
BoxScoreTeamsSuccessRates.prototype.overall = undefined;

/**
 * @member {module:model/BoxScoreTeamsOverall} standardDowns
 */
BoxScoreTeamsSuccessRates.prototype.standardDowns = undefined;

/**
 * @member {module:model/BoxScoreTeamsOverall} passingDowns
 */
BoxScoreTeamsSuccessRates.prototype.passingDowns = undefined;


