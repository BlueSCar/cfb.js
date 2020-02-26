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
import {RankingWeekRanks} from './RankingWeekRanks';

/**
 * The RankingWeekPolls model module.
 * @module model/RankingWeekPolls
 * @version 1.24.5
 */
export class RankingWeekPolls {
  /**
   * Constructs a new <code>RankingWeekPolls</code>.
   * @alias module:model/RankingWeekPolls
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RankingWeekPolls</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RankingWeekPolls} obj Optional instance to populate.
   * @return {module:model/RankingWeekPolls} The populated <code>RankingWeekPolls</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RankingWeekPolls();
      if (data.hasOwnProperty('poll'))
        obj.poll = ApiClient.convertToType(data['poll'], 'String');
      if (data.hasOwnProperty('ranks'))
        obj.ranks = ApiClient.convertToType(data['ranks'], [RankingWeekRanks]);
    }
    return obj;
  }
}

/**
 * @member {String} poll
 */
RankingWeekPolls.prototype.poll = undefined;

/**
 * @member {Array.<module:model/RankingWeekRanks>} ranks
 */
RankingWeekPolls.prototype.ranks = undefined;


