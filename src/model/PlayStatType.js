/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 1.24.6
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

/**
 * The PlayStatType model module.
 * @module model/PlayStatType
 * @version 1.24.6
 */
export class PlayStatType {
  /**
   * Constructs a new <code>PlayStatType</code>.
   * @alias module:model/PlayStatType
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PlayStatType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayStatType} obj Optional instance to populate.
   * @return {module:model/PlayStatType} The populated <code>PlayStatType</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PlayStatType();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
PlayStatType.prototype.id = undefined;

/**
 * @member {String} name
 */
PlayStatType.prototype.name = undefined;


