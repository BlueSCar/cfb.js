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
 * The TeamTalent model module.
 * @module model/TeamTalent
 * @version 2.0.2
 */
export class TeamTalent {
  /**
   * Constructs a new <code>TeamTalent</code>.
   * @alias module:model/TeamTalent
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TeamTalent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamTalent} obj Optional instance to populate.
   * @return {module:model/TeamTalent} The populated <code>TeamTalent</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamTalent();
      if (data.hasOwnProperty('year'))
        obj.year = ApiClient.convertToType(data['year'], 'Number');
      if (data.hasOwnProperty('school'))
        obj.school = ApiClient.convertToType(data['school'], 'String');
      if (data.hasOwnProperty('talent'))
        obj.talent = ApiClient.convertToType(data['talent'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} year
 */
TeamTalent.prototype.year = undefined;

/**
 * @member {String} school
 */
TeamTalent.prototype.school = undefined;

/**
 * @member {Number} talent
 */
TeamTalent.prototype.talent = undefined;


