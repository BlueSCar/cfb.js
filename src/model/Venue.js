/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\").
 *
 * OpenAPI spec version: 3.2.0
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
 * The Venue model module.
 * @module model/Venue
 * @version 3.2.0
 */
export class Venue {
  /**
   * Constructs a new <code>Venue</code>.
   * @alias module:model/Venue
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Venue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Venue} obj Optional instance to populate.
   * @return {module:model/Venue} The populated <code>Venue</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Venue();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('capacity'))
        obj.capacity = ApiClient.convertToType(data['capacity'], 'Number');
      if (data.hasOwnProperty('grass'))
        obj.grass = ApiClient.convertToType(data['grass'], 'Boolean');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('zip'))
        obj.zip = ApiClient.convertToType(data['zip'], 'String');
      if (data.hasOwnProperty('country_code'))
        obj.countryCode = ApiClient.convertToType(data['country_code'], 'String');
      if (data.hasOwnProperty('location'))
        obj.location = ApiClient.convertToType(data['location'], Object);
      if (data.hasOwnProperty('elevation'))
        obj.elevation = ApiClient.convertToType(data['elevation'], 'Number');
      if (data.hasOwnProperty('year'))
        obj.year = ApiClient.convertToType(data['year'], 'Number');
      if (data.hasOwnProperty('dome'))
        obj.dome = ApiClient.convertToType(data['dome'], 'Boolean');
      if (data.hasOwnProperty('timezone'))
        obj.timezone = ApiClient.convertToType(data['timezone'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
Venue.prototype.id = undefined;

/**
 * @member {String} name
 */
Venue.prototype.name = undefined;

/**
 * @member {Number} capacity
 */
Venue.prototype.capacity = undefined;

/**
 * @member {Boolean} grass
 */
Venue.prototype.grass = undefined;

/**
 * @member {String} city
 */
Venue.prototype.city = undefined;

/**
 * @member {String} state
 */
Venue.prototype.state = undefined;

/**
 * @member {String} zip
 */
Venue.prototype.zip = undefined;

/**
 * @member {String} countryCode
 */
Venue.prototype.countryCode = undefined;

/**
 * @member {Object} location
 */
Venue.prototype.location = undefined;

/**
 * @member {Number} elevation
 */
Venue.prototype.elevation = undefined;

/**
 * @member {Number} year
 */
Venue.prototype.year = undefined;

/**
 * @member {Boolean} dome
 */
Venue.prototype.dome = undefined;

/**
 * @member {String} timezone
 */
Venue.prototype.timezone = undefined;


