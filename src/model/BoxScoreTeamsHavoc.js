/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 1.24.5
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

/**
 * The BoxScoreTeamsHavoc model module.
 * @module model/BoxScoreTeamsHavoc
 * @version 1.24.5
 */
export class BoxScoreTeamsHavoc {
  /**
   * Constructs a new <code>BoxScoreTeamsHavoc</code>.
   * @alias module:model/BoxScoreTeamsHavoc
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BoxScoreTeamsHavoc</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxScoreTeamsHavoc} obj Optional instance to populate.
   * @return {module:model/BoxScoreTeamsHavoc} The populated <code>BoxScoreTeamsHavoc</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BoxScoreTeamsHavoc();
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('total'))
        obj.total = ApiClient.convertToType(data['total'], 'Number');
      if (data.hasOwnProperty('frontSeven'))
        obj.frontSeven = ApiClient.convertToType(data['frontSeven'], 'Number');
      if (data.hasOwnProperty('db'))
        obj.db = ApiClient.convertToType(data['db'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} team
 */
BoxScoreTeamsHavoc.prototype.team = undefined;

/**
 * @member {Number} total
 */
BoxScoreTeamsHavoc.prototype.total = undefined;

/**
 * @member {Number} frontSeven
 */
BoxScoreTeamsHavoc.prototype.frontSeven = undefined;

/**
 * @member {Number} db
 */
BoxScoreTeamsHavoc.prototype.db = undefined;


