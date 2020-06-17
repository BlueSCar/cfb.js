/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 1.26.0
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
 * The VenueLocation model module.
 * @module model/VenueLocation
 * @version 1.26.0
 */
export class VenueLocation {
  /**
   * Constructs a new <code>VenueLocation</code>.
   * @alias module:model/VenueLocation
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>VenueLocation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VenueLocation} obj Optional instance to populate.
   * @return {module:model/VenueLocation} The populated <code>VenueLocation</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new VenueLocation();
      if (data.hasOwnProperty('x'))
        obj.x = ApiClient.convertToType(data['x'], 'Number');
      if (data.hasOwnProperty('y'))
        obj.y = ApiClient.convertToType(data['y'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} x
 */
VenueLocation.prototype.x = undefined;

/**
 * @member {Number} y
 */
VenueLocation.prototype.y = undefined;


