/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.0.2
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

/**
 * The PlayerSearchResult model module.
 * @module model/PlayerSearchResult
 * @version 2.0.2
 */
export class PlayerSearchResult {
  /**
   * Constructs a new <code>PlayerSearchResult</code>.
   * @alias module:model/PlayerSearchResult
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PlayerSearchResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayerSearchResult} obj Optional instance to populate.
   * @return {module:model/PlayerSearchResult} The populated <code>PlayerSearchResult</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PlayerSearchResult();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('firstName'))
        obj.firstName = ApiClient.convertToType(data['firstName'], 'String');
      if (data.hasOwnProperty('lastName'))
        obj.lastName = ApiClient.convertToType(data['lastName'], 'String');
      if (data.hasOwnProperty('weight'))
        obj.weight = ApiClient.convertToType(data['weight'], 'Number');
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
      if (data.hasOwnProperty('jersey'))
        obj.jersey = ApiClient.convertToType(data['jersey'], 'Number');
      if (data.hasOwnProperty('position'))
        obj.position = ApiClient.convertToType(data['position'], 'String');
      if (data.hasOwnProperty('hometown'))
        obj.hometown = ApiClient.convertToType(data['hometown'], 'String');
      if (data.hasOwnProperty('teamColor'))
        obj.teamColor = ApiClient.convertToType(data['teamColor'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
PlayerSearchResult.prototype.id = undefined;

/**
 * @member {String} team
 */
PlayerSearchResult.prototype.team = undefined;

/**
 * @member {String} name
 */
PlayerSearchResult.prototype.name = undefined;

/**
 * @member {String} firstName
 */
PlayerSearchResult.prototype.firstName = undefined;

/**
 * @member {String} lastName
 */
PlayerSearchResult.prototype.lastName = undefined;

/**
 * @member {Number} weight
 */
PlayerSearchResult.prototype.weight = undefined;

/**
 * @member {Number} height
 */
PlayerSearchResult.prototype.height = undefined;

/**
 * @member {Number} jersey
 */
PlayerSearchResult.prototype.jersey = undefined;

/**
 * @member {String} position
 */
PlayerSearchResult.prototype.position = undefined;

/**
 * @member {String} hometown
 */
PlayerSearchResult.prototype.hometown = undefined;

/**
 * @member {String} teamColor
 */
PlayerSearchResult.prototype.teamColor = undefined;


