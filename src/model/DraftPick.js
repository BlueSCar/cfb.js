/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\").
 *
 * OpenAPI spec version: 3.3.1
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
 * The DraftPick model module.
 * @module model/DraftPick
 * @version 3.3.1
 */
export class DraftPick {
  /**
   * Constructs a new <code>DraftPick</code>.
   * @alias module:model/DraftPick
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DraftPick</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DraftPick} obj Optional instance to populate.
   * @return {module:model/DraftPick} The populated <code>DraftPick</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DraftPick();
      if (data.hasOwnProperty('collegeAthleteId'))
        obj.collegeAthleteId = ApiClient.convertToType(data['collegeAthleteId'], 'Number');
      if (data.hasOwnProperty('nflAthleteId'))
        obj.nflAthleteId = ApiClient.convertToType(data['nflAthleteId'], 'Number');
      if (data.hasOwnProperty('collegeId'))
        obj.collegeId = ApiClient.convertToType(data['collegeId'], 'Number');
      if (data.hasOwnProperty('collegeTeam'))
        obj.collegeTeam = ApiClient.convertToType(data['collegeTeam'], 'String');
      if (data.hasOwnProperty('collegeConference'))
        obj.collegeConference = ApiClient.convertToType(data['collegeConference'], 'String');
      if (data.hasOwnProperty('nflTeam'))
        obj.nflTeam = ApiClient.convertToType(data['nflTeam'], 'String');
      if (data.hasOwnProperty('year'))
        obj.year = ApiClient.convertToType(data['year'], 'Number');
      if (data.hasOwnProperty('overall'))
        obj.overall = ApiClient.convertToType(data['overall'], 'Number');
      if (data.hasOwnProperty('round'))
        obj.round = ApiClient.convertToType(data['round'], 'Number');
      if (data.hasOwnProperty('pick'))
        obj.pick = ApiClient.convertToType(data['pick'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('position'))
        obj.position = ApiClient.convertToType(data['position'], 'String');
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
      if (data.hasOwnProperty('weight'))
        obj.weight = ApiClient.convertToType(data['weight'], 'Number');
      if (data.hasOwnProperty('preDraftRanking'))
        obj.preDraftRanking = ApiClient.convertToType(data['preDraftRanking'], 'Number');
      if (data.hasOwnProperty('preDraftPositionRanking'))
        obj.preDraftPositionRanking = ApiClient.convertToType(data['preDraftPositionRanking'], 'Number');
      if (data.hasOwnProperty('preDraftGrade'))
        obj.preDraftGrade = ApiClient.convertToType(data['preDraftGrade'], 'Number');
      if (data.hasOwnProperty('hometownInfo'))
        obj.hometownInfo = ApiClient.convertToType(data['hometownInfo'], Object);
    }
    return obj;
  }
}

/**
 * @member {Number} collegeAthleteId
 */
DraftPick.prototype.collegeAthleteId = undefined;

/**
 * @member {Number} nflAthleteId
 */
DraftPick.prototype.nflAthleteId = undefined;

/**
 * @member {Number} collegeId
 */
DraftPick.prototype.collegeId = undefined;

/**
 * @member {String} collegeTeam
 */
DraftPick.prototype.collegeTeam = undefined;

/**
 * @member {String} collegeConference
 */
DraftPick.prototype.collegeConference = undefined;

/**
 * @member {String} nflTeam
 */
DraftPick.prototype.nflTeam = undefined;

/**
 * @member {Number} year
 */
DraftPick.prototype.year = undefined;

/**
 * @member {Number} overall
 */
DraftPick.prototype.overall = undefined;

/**
 * @member {Number} round
 */
DraftPick.prototype.round = undefined;

/**
 * @member {Number} pick
 */
DraftPick.prototype.pick = undefined;

/**
 * @member {String} name
 */
DraftPick.prototype.name = undefined;

/**
 * @member {String} position
 */
DraftPick.prototype.position = undefined;

/**
 * @member {Number} height
 */
DraftPick.prototype.height = undefined;

/**
 * @member {Number} weight
 */
DraftPick.prototype.weight = undefined;

/**
 * @member {Number} preDraftRanking
 */
DraftPick.prototype.preDraftRanking = undefined;

/**
 * @member {Number} preDraftPositionRanking
 */
DraftPick.prototype.preDraftPositionRanking = undefined;

/**
 * @member {Number} preDraftGrade
 */
DraftPick.prototype.preDraftGrade = undefined;

/**
 * @member {Object} hometownInfo
 */
DraftPick.prototype.hometownInfo = undefined;

