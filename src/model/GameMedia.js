/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.0.0
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.21
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';

/**
 * The GameMedia model module.
 * @module model/GameMedia
 * @version 4.0.0
 */
export class GameMedia {
  /**
   * Constructs a new <code>GameMedia</code>.
   * @alias module:model/GameMedia
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GameMedia</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GameMedia} obj Optional instance to populate.
   * @return {module:model/GameMedia} The populated <code>GameMedia</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GameMedia();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('season'))
        obj.season = ApiClient.convertToType(data['season'], 'Number');
      if (data.hasOwnProperty('week'))
        obj.week = ApiClient.convertToType(data['week'], 'Number');
      if (data.hasOwnProperty('seasonType'))
        obj.seasonType = ApiClient.convertToType(data['seasonType'], 'String');
      if (data.hasOwnProperty('startTime'))
        obj.startTime = ApiClient.convertToType(data['startTime'], 'String');
      if (data.hasOwnProperty('isStartTimeTBD'))
        obj.isStartTimeTBD = ApiClient.convertToType(data['isStartTimeTBD'], 'Boolean');
      if (data.hasOwnProperty('homeTeam'))
        obj.homeTeam = ApiClient.convertToType(data['homeTeam'], 'String');
      if (data.hasOwnProperty('homeConference'))
        obj.homeConference = ApiClient.convertToType(data['homeConference'], 'String');
      if (data.hasOwnProperty('awayTeam'))
        obj.awayTeam = ApiClient.convertToType(data['awayTeam'], 'String');
      if (data.hasOwnProperty('awayConference'))
        obj.awayConference = ApiClient.convertToType(data['awayConference'], 'String');
      if (data.hasOwnProperty('mediaType'))
        obj.mediaType = ApiClient.convertToType(data['mediaType'], 'String');
      if (data.hasOwnProperty('outlet'))
        obj.outlet = ApiClient.convertToType(data['outlet'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
GameMedia.prototype.id = undefined;

/**
 * @member {Number} season
 */
GameMedia.prototype.season = undefined;

/**
 * @member {Number} week
 */
GameMedia.prototype.week = undefined;

/**
 * @member {String} seasonType
 */
GameMedia.prototype.seasonType = undefined;

/**
 * @member {String} startTime
 */
GameMedia.prototype.startTime = undefined;

/**
 * @member {Boolean} isStartTimeTBD
 */
GameMedia.prototype.isStartTimeTBD = undefined;

/**
 * @member {String} homeTeam
 */
GameMedia.prototype.homeTeam = undefined;

/**
 * @member {String} homeConference
 */
GameMedia.prototype.homeConference = undefined;

/**
 * @member {String} awayTeam
 */
GameMedia.prototype.awayTeam = undefined;

/**
 * @member {String} awayConference
 */
GameMedia.prototype.awayConference = undefined;

/**
 * @member {String} mediaType
 */
GameMedia.prototype.mediaType = undefined;

/**
 * @member {String} outlet
 */
GameMedia.prototype.outlet = undefined;


