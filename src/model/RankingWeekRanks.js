/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.2.8
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

/**
 * The RankingWeekRanks model module.
 * @module model/RankingWeekRanks
 * @version 2.2.8
 */
export class RankingWeekRanks {
  /**
   * Constructs a new <code>RankingWeekRanks</code>.
   * @alias module:model/RankingWeekRanks
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RankingWeekRanks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RankingWeekRanks} obj Optional instance to populate.
   * @return {module:model/RankingWeekRanks} The populated <code>RankingWeekRanks</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RankingWeekRanks();
      if (data.hasOwnProperty('rank'))
        obj.rank = ApiClient.convertToType(data['rank'], 'Number');
      if (data.hasOwnProperty('school'))
        obj.school = ApiClient.convertToType(data['school'], 'String');
      if (data.hasOwnProperty('conference'))
        obj.conference = ApiClient.convertToType(data['conference'], 'String');
      if (data.hasOwnProperty('firstPlaceVotes'))
        obj.firstPlaceVotes = ApiClient.convertToType(data['firstPlaceVotes'], 'Number');
      if (data.hasOwnProperty('points'))
        obj.points = ApiClient.convertToType(data['points'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} rank
 */
RankingWeekRanks.prototype.rank = undefined;

/**
 * @member {String} school
 */
RankingWeekRanks.prototype.school = undefined;

/**
 * @member {String} conference
 */
RankingWeekRanks.prototype.conference = undefined;

/**
 * @member {Number} firstPlaceVotes
 */
RankingWeekRanks.prototype.firstPlaceVotes = undefined;

/**
 * @member {Number} points
 */
RankingWeekRanks.prototype.points = undefined;


