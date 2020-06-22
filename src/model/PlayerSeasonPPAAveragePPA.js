/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.0.1
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
 * The PlayerSeasonPPAAveragePPA model module.
 * @module model/PlayerSeasonPPAAveragePPA
 * @version 2.0.1
 */
export class PlayerSeasonPPAAveragePPA {
  /**
   * Constructs a new <code>PlayerSeasonPPAAveragePPA</code>.
   * @alias module:model/PlayerSeasonPPAAveragePPA
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PlayerSeasonPPAAveragePPA</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayerSeasonPPAAveragePPA} obj Optional instance to populate.
   * @return {module:model/PlayerSeasonPPAAveragePPA} The populated <code>PlayerSeasonPPAAveragePPA</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PlayerSeasonPPAAveragePPA();
      if (data.hasOwnProperty('all'))
        obj.all = ApiClient.convertToType(data['all'], 'Number');
      if (data.hasOwnProperty('pass'))
        obj.pass = ApiClient.convertToType(data['pass'], 'Number');
      if (data.hasOwnProperty('rush'))
        obj.rush = ApiClient.convertToType(data['rush'], 'Number');
      if (data.hasOwnProperty('firstDown'))
        obj.firstDown = ApiClient.convertToType(data['firstDown'], 'Number');
      if (data.hasOwnProperty('secondDown'))
        obj.secondDown = ApiClient.convertToType(data['secondDown'], 'Number');
      if (data.hasOwnProperty('thirdDown'))
        obj.thirdDown = ApiClient.convertToType(data['thirdDown'], 'Number');
      if (data.hasOwnProperty('standardDowns'))
        obj.standardDowns = ApiClient.convertToType(data['standardDowns'], 'Number');
      if (data.hasOwnProperty('passingDowns'))
        obj.passingDowns = ApiClient.convertToType(data['passingDowns'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} all
 */
PlayerSeasonPPAAveragePPA.prototype.all = undefined;

/**
 * @member {Number} pass
 */
PlayerSeasonPPAAveragePPA.prototype.pass = undefined;

/**
 * @member {Number} rush
 */
PlayerSeasonPPAAveragePPA.prototype.rush = undefined;

/**
 * @member {Number} firstDown
 */
PlayerSeasonPPAAveragePPA.prototype.firstDown = undefined;

/**
 * @member {Number} secondDown
 */
PlayerSeasonPPAAveragePPA.prototype.secondDown = undefined;

/**
 * @member {Number} thirdDown
 */
PlayerSeasonPPAAveragePPA.prototype.thirdDown = undefined;

/**
 * @member {Number} standardDowns
 */
PlayerSeasonPPAAveragePPA.prototype.standardDowns = undefined;

/**
 * @member {Number} passingDowns
 */
PlayerSeasonPPAAveragePPA.prototype.passingDowns = undefined;


