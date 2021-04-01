/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\").
 *
 * OpenAPI spec version: 3.0.1
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';

/**
 * The GameLines model module.
 * @module model/GameLines
 * @version 3.0.1
 */
export class GameLines {
  /**
   * Constructs a new <code>GameLines</code>.
   * @alias module:model/GameLines
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GameLines</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GameLines} obj Optional instance to populate.
   * @return {module:model/GameLines} The populated <code>GameLines</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GameLines();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('season'))
        obj.season = ApiClient.convertToType(data['season'], 'Number');
      if (data.hasOwnProperty('week'))
        obj.week = ApiClient.convertToType(data['week'], 'Number');
      if (data.hasOwnProperty('seasonType'))
        obj.seasonType = ApiClient.convertToType(data['seasonType'], 'String');
      if (data.hasOwnProperty('homeTeam'))
        obj.homeTeam = ApiClient.convertToType(data['homeTeam'], 'String');
      if (data.hasOwnProperty('homeConference'))
        obj.homeConference = ApiClient.convertToType(data['homeConference'], 'String');
      if (data.hasOwnProperty('homeScore'))
        obj.homeScore = ApiClient.convertToType(data['homeScore'], 'Number');
      if (data.hasOwnProperty('awayTeam'))
        obj.awayTeam = ApiClient.convertToType(data['awayTeam'], 'String');
      if (data.hasOwnProperty('awayConference'))
        obj.awayConference = ApiClient.convertToType(data['awayConference'], 'String');
      if (data.hasOwnProperty('awayScore'))
        obj.awayScore = ApiClient.convertToType(data['awayScore'], 'Number');
      if (data.hasOwnProperty('lines'))
        obj.lines = ApiClient.convertToType(data['lines'], [Object]);
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
GameLines.prototype.id = undefined;

/**
 * @member {Number} season
 */
GameLines.prototype.season = undefined;

/**
 * @member {Number} week
 */
GameLines.prototype.week = undefined;

/**
 * @member {String} seasonType
 */
GameLines.prototype.seasonType = undefined;

/**
 * @member {String} homeTeam
 */
GameLines.prototype.homeTeam = undefined;

/**
 * @member {String} homeConference
 */
GameLines.prototype.homeConference = undefined;

/**
 * @member {Number} homeScore
 */
GameLines.prototype.homeScore = undefined;

/**
 * @member {String} awayTeam
 */
GameLines.prototype.awayTeam = undefined;

/**
 * @member {String} awayConference
 */
GameLines.prototype.awayConference = undefined;

/**
 * @member {Number} awayScore
 */
GameLines.prototype.awayScore = undefined;

/**
 * @member {Array.<Object>} lines
 */
GameLines.prototype.lines = undefined;


