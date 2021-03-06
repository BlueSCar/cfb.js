/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.4.1
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';

/**
 * The PlayerGameSchool model module.
 * @module model/PlayerGameSchool
 * @version 2.4.1
 */
export class PlayerGameSchool {
  /**
   * Constructs a new <code>PlayerGameSchool</code>.
   * @alias module:model/PlayerGameSchool
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PlayerGameSchool</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayerGameSchool} obj Optional instance to populate.
   * @return {module:model/PlayerGameSchool} The populated <code>PlayerGameSchool</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PlayerGameSchool();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('conference'))
        obj.conference = ApiClient.convertToType(data['conference'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
PlayerGameSchool.prototype.name = undefined;

/**
 * @member {String} conference
 */
PlayerGameSchool.prototype.conference = undefined;


