/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.2.14
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
import {PlayerGamePPAAveragePPA} from './PlayerGamePPAAveragePPA';

/**
 * The PlayerGamePPA model module.
 * @module model/PlayerGamePPA
 * @version 2.2.14
 */
export class PlayerGamePPA {
  /**
   * Constructs a new <code>PlayerGamePPA</code>.
   * @alias module:model/PlayerGamePPA
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PlayerGamePPA</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayerGamePPA} obj Optional instance to populate.
   * @return {module:model/PlayerGamePPA} The populated <code>PlayerGamePPA</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PlayerGamePPA();
      if (data.hasOwnProperty('season'))
        obj.season = ApiClient.convertToType(data['season'], 'Number');
      if (data.hasOwnProperty('week'))
        obj.week = ApiClient.convertToType(data['week'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('position'))
        obj.position = ApiClient.convertToType(data['position'], 'String');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('opponent'))
        obj.opponent = ApiClient.convertToType(data['opponent'], 'String');
      if (data.hasOwnProperty('averagePPA'))
        obj.averagePPA = PlayerGamePPAAveragePPA.constructFromObject(data['averagePPA']);
    }
    return obj;
  }
}

/**
 * @member {Number} season
 */
PlayerGamePPA.prototype.season = undefined;

/**
 * @member {Number} week
 */
PlayerGamePPA.prototype.week = undefined;

/**
 * @member {String} name
 */
PlayerGamePPA.prototype.name = undefined;

/**
 * @member {String} position
 */
PlayerGamePPA.prototype.position = undefined;

/**
 * @member {String} team
 */
PlayerGamePPA.prototype.team = undefined;

/**
 * @member {String} opponent
 */
PlayerGamePPA.prototype.opponent = undefined;

/**
 * @member {module:model/PlayerGamePPAAveragePPA} averagePPA
 */
PlayerGamePPA.prototype.averagePPA = undefined;


