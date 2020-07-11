/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.2.1
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
import {PlayerSeasonPPAAveragePPA} from './PlayerSeasonPPAAveragePPA';

/**
 * The PlayerSeasonPPA model module.
 * @module model/PlayerSeasonPPA
 * @version 2.2.1
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
        obj.averagePPA = PlayerSeasonPPAAveragePPA.constructFromObject(data['averagePPA']);
      if (data.hasOwnProperty('totalPPA'))
        obj.totalPPA = PlayerSeasonPPAAveragePPA.constructFromObject(data['totalPPA']);
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
 * @member {module:model/PlayerSeasonPPAAveragePPA} averagePPA
 */
PlayerSeasonPPA.prototype.averagePPA = undefined;

/**
 * @member {module:model/PlayerSeasonPPAAveragePPA} totalPPA
 */
PlayerSeasonPPA.prototype.totalPPA = undefined;


