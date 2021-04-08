/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\").
 *
 * OpenAPI spec version: 3.1.1
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
 * The TeamRecord model module.
 * @module model/TeamRecord
 * @version 3.1.1
 */
export class TeamRecord {
  /**
   * Constructs a new <code>TeamRecord</code>.
   * @alias module:model/TeamRecord
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TeamRecord</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamRecord} obj Optional instance to populate.
   * @return {module:model/TeamRecord} The populated <code>TeamRecord</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamRecord();
      if (data.hasOwnProperty('year'))
        obj.year = ApiClient.convertToType(data['year'], 'Number');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('conference'))
        obj.conference = ApiClient.convertToType(data['conference'], 'String');
      if (data.hasOwnProperty('division'))
        obj.division = ApiClient.convertToType(data['division'], 'String');
      if (data.hasOwnProperty('total'))
        obj.total = ApiClient.convertToType(data['total'], Object);
      if (data.hasOwnProperty('conferenceGames'))
        obj.conferenceGames = ApiClient.convertToType(data['conferenceGames'], Object);
      if (data.hasOwnProperty('homeGames'))
        obj.homeGames = ApiClient.convertToType(data['homeGames'], Object);
      if (data.hasOwnProperty('awayGames'))
        obj.awayGames = ApiClient.convertToType(data['awayGames'], Object);
    }
    return obj;
  }
}

/**
 * @member {Number} year
 */
TeamRecord.prototype.year = undefined;

/**
 * @member {String} team
 */
TeamRecord.prototype.team = undefined;

/**
 * @member {String} conference
 */
TeamRecord.prototype.conference = undefined;

/**
 * @member {String} division
 */
TeamRecord.prototype.division = undefined;

/**
 * @member {Object} total
 */
TeamRecord.prototype.total = undefined;

/**
 * @member {Object} conferenceGames
 */
TeamRecord.prototype.conferenceGames = undefined;

/**
 * @member {Object} homeGames
 */
TeamRecord.prototype.homeGames = undefined;

/**
 * @member {Object} awayGames
 */
TeamRecord.prototype.awayGames = undefined;


