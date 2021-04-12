/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\").
 *
 * OpenAPI spec version: 3.2.1
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
 * The Recruit model module.
 * @module model/Recruit
 * @version 3.2.1
 */
export class Recruit {
  /**
   * Constructs a new <code>Recruit</code>.
   * @alias module:model/Recruit
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Recruit</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Recruit} obj Optional instance to populate.
   * @return {module:model/Recruit} The populated <code>Recruit</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Recruit();
      if (data.hasOwnProperty('recruitType'))
        obj.recruitType = ApiClient.convertToType(data['recruitType'], 'String');
      if (data.hasOwnProperty('year'))
        obj.year = ApiClient.convertToType(data['year'], 'Number');
      if (data.hasOwnProperty('ranking'))
        obj.ranking = ApiClient.convertToType(data['ranking'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('school'))
        obj.school = ApiClient.convertToType(data['school'], 'String');
      if (data.hasOwnProperty('committedTo'))
        obj.committedTo = ApiClient.convertToType(data['committedTo'], 'String');
      if (data.hasOwnProperty('position'))
        obj.position = ApiClient.convertToType(data['position'], 'String');
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
      if (data.hasOwnProperty('weight'))
        obj.weight = ApiClient.convertToType(data['weight'], 'Number');
      if (data.hasOwnProperty('stars'))
        obj.stars = ApiClient.convertToType(data['stars'], 'Number');
      if (data.hasOwnProperty('rating'))
        obj.rating = ApiClient.convertToType(data['rating'], 'Number');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('stateProvince'))
        obj.stateProvince = ApiClient.convertToType(data['stateProvince'], 'String');
      if (data.hasOwnProperty('country'))
        obj.country = ApiClient.convertToType(data['country'], 'String');
      if (data.hasOwnProperty('hometownInfo'))
        obj.hometownInfo = ApiClient.convertToType(data['hometownInfo'], Object);
    }
    return obj;
  }
}

/**
 * @member {String} recruitType
 */
Recruit.prototype.recruitType = undefined;

/**
 * @member {Number} year
 */
Recruit.prototype.year = undefined;

/**
 * @member {Number} ranking
 */
Recruit.prototype.ranking = undefined;

/**
 * @member {String} name
 */
Recruit.prototype.name = undefined;

/**
 * @member {String} school
 */
Recruit.prototype.school = undefined;

/**
 * @member {String} committedTo
 */
Recruit.prototype.committedTo = undefined;

/**
 * @member {String} position
 */
Recruit.prototype.position = undefined;

/**
 * @member {Number} height
 */
Recruit.prototype.height = undefined;

/**
 * @member {Number} weight
 */
Recruit.prototype.weight = undefined;

/**
 * @member {Number} stars
 */
Recruit.prototype.stars = undefined;

/**
 * @member {Number} rating
 */
Recruit.prototype.rating = undefined;

/**
 * @member {String} city
 */
Recruit.prototype.city = undefined;

/**
 * @member {String} stateProvince
 */
Recruit.prototype.stateProvince = undefined;

/**
 * @member {String} country
 */
Recruit.prototype.country = undefined;

/**
 * @member {Object} hometownInfo
 */
Recruit.prototype.hometownInfo = undefined;


