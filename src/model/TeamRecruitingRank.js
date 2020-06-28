/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.1.0
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
 * The TeamRecruitingRank model module.
 * @module model/TeamRecruitingRank
 * @version 2.1.0
 */
export class TeamRecruitingRank {
  /**
   * Constructs a new <code>TeamRecruitingRank</code>.
   * @alias module:model/TeamRecruitingRank
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TeamRecruitingRank</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamRecruitingRank} obj Optional instance to populate.
   * @return {module:model/TeamRecruitingRank} The populated <code>TeamRecruitingRank</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamRecruitingRank();
      if (data.hasOwnProperty('year'))
        obj.year = ApiClient.convertToType(data['year'], 'Number');
      if (data.hasOwnProperty('rank'))
        obj.rank = ApiClient.convertToType(data['rank'], 'Number');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('points'))
        obj.points = ApiClient.convertToType(data['points'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} year
 */
TeamRecruitingRank.prototype.year = undefined;

/**
 * @member {Number} rank
 */
TeamRecruitingRank.prototype.rank = undefined;

/**
 * @member {String} team
 */
TeamRecruitingRank.prototype.team = undefined;

/**
 * @member {Number} points
 */
TeamRecruitingRank.prototype.points = undefined;


