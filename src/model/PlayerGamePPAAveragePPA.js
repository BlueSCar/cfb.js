/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 1.24.5
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
 * The PlayerGamePPAAveragePPA model module.
 * @module model/PlayerGamePPAAveragePPA
 * @version 1.24.5
 */
export class PlayerGamePPAAveragePPA {
  /**
   * Constructs a new <code>PlayerGamePPAAveragePPA</code>.
   * @alias module:model/PlayerGamePPAAveragePPA
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PlayerGamePPAAveragePPA</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayerGamePPAAveragePPA} obj Optional instance to populate.
   * @return {module:model/PlayerGamePPAAveragePPA} The populated <code>PlayerGamePPAAveragePPA</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PlayerGamePPAAveragePPA();
      if (data.hasOwnProperty('all'))
        obj.all = ApiClient.convertToType(data['all'], 'Number');
      if (data.hasOwnProperty('pass'))
        obj.pass = ApiClient.convertToType(data['pass'], 'Number');
      if (data.hasOwnProperty('rush'))
        obj.rush = ApiClient.convertToType(data['rush'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} all
 */
PlayerGamePPAAveragePPA.prototype.all = undefined;

/**
 * @member {Number} pass
 */
PlayerGamePPAAveragePPA.prototype.pass = undefined;

/**
 * @member {Number} rush
 */
PlayerGamePPAAveragePPA.prototype.rush = undefined;


