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
 * The PlayerSeasonPPA model module.
 * @module model/PlayerSeasonPPA
 * @version 4.0.0
 */
export class PlayerSeasonPPA {
  /**
   * Constructs a new <code>PlayerSeasonPPA</code>.
   * @alias module:model/PlayerSeasonPPA
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PlayerSeasonPPA</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayerSeasonPPA} obj Optional instance to populate.
   * @return {module:model/PlayerSeasonPPA} The populated <code>PlayerSeasonPPA</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PlayerSeasonPPA();
      if (data.hasOwnProperty('season'))
        obj.season = ApiClient.convertToType(data['season'], 'Number');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('position'))
        obj.position = ApiClient.convertToType(data['position'], 'String');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('conference'))
        obj.conference = ApiClient.convertToType(data['conference'], 'String');
      if (data.hasOwnProperty('averagePPA'))
        obj.averagePPA = ApiClient.convertToType(data['averagePPA'], Object);
      if (data.hasOwnProperty('totalPPA'))
        obj.totalPPA = ApiClient.convertToType(data['totalPPA'], Object);
    }
    return obj;
  }
}

/**
 * @member {Number} season
 */
PlayerSeasonPPA.prototype.season = undefined;

/**
 * @member {Number} id
 */
PlayerSeasonPPA.prototype.id = undefined;

/**
 * @member {String} name
 */
PlayerSeasonPPA.prototype.name = undefined;

/**
 * @member {String} position
 */
PlayerSeasonPPA.prototype.position = undefined;

/**
 * @member {String} team
 */
PlayerSeasonPPA.prototype.team = undefined;

/**
 * @member {String} conference
 */
PlayerSeasonPPA.prototype.conference = undefined;

/**
 * @member {Object} averagePPA
 */
PlayerSeasonPPA.prototype.averagePPA = undefined;

/**
 * @member {Object} totalPPA
 */
PlayerSeasonPPA.prototype.totalPPA = undefined;


