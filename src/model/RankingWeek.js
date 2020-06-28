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
import {RankingWeekPolls} from './RankingWeekPolls';

/**
 * The RankingWeek model module.
 * @module model/RankingWeek
 * @version 2.1.0
 */
export class RankingWeek {
  /**
   * Constructs a new <code>RankingWeek</code>.
   * @alias module:model/RankingWeek
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RankingWeek</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RankingWeek} obj Optional instance to populate.
   * @return {module:model/RankingWeek} The populated <code>RankingWeek</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RankingWeek();
      if (data.hasOwnProperty('season'))
        obj.season = ApiClient.convertToType(data['season'], 'Number');
      if (data.hasOwnProperty('seasonType'))
        obj.seasonType = ApiClient.convertToType(data['seasonType'], 'String');
      if (data.hasOwnProperty('week'))
        obj.week = ApiClient.convertToType(data['week'], 'Number');
      if (data.hasOwnProperty('polls'))
        obj.polls = ApiClient.convertToType(data['polls'], [RankingWeekPolls]);
    }
    return obj;
  }
}

/**
 * @member {Number} season
 */
RankingWeek.prototype.season = undefined;

/**
 * @member {String} seasonType
 */
RankingWeek.prototype.seasonType = undefined;

/**
 * @member {Number} week
 */
RankingWeek.prototype.week = undefined;

/**
 * @member {Array.<module:model/RankingWeekPolls>} polls
 */
RankingWeek.prototype.polls = undefined;


