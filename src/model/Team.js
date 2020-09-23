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

/**
 * The Team model module.
 * @module model/Team
 * @version 2.2.14
 */
export class Team {
  /**
   * Constructs a new <code>Team</code>.
   * @alias module:model/Team
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Team</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Team} obj Optional instance to populate.
   * @return {module:model/Team} The populated <code>Team</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Team();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('school'))
        obj.school = ApiClient.convertToType(data['school'], 'String');
      if (data.hasOwnProperty('mascot'))
        obj.mascot = ApiClient.convertToType(data['mascot'], 'String');
      if (data.hasOwnProperty('abbreviation'))
        obj.abbreviation = ApiClient.convertToType(data['abbreviation'], 'String');
      if (data.hasOwnProperty('alt_name_1'))
        obj.altName1 = ApiClient.convertToType(data['alt_name_1'], 'String');
      if (data.hasOwnProperty('alt_name_2'))
        obj.altName2 = ApiClient.convertToType(data['alt_name_2'], 'String');
      if (data.hasOwnProperty('alt_name_3'))
        obj.altName3 = ApiClient.convertToType(data['alt_name_3'], 'String');
      if (data.hasOwnProperty('conference'))
        obj.conference = ApiClient.convertToType(data['conference'], 'String');
      if (data.hasOwnProperty('division'))
        obj.division = ApiClient.convertToType(data['division'], 'String');
      if (data.hasOwnProperty('color'))
        obj.color = ApiClient.convertToType(data['color'], 'String');
      if (data.hasOwnProperty('alt_color'))
        obj.altColor = ApiClient.convertToType(data['alt_color'], 'String');
      if (data.hasOwnProperty('logos'))
        obj.logos = ApiClient.convertToType(data['logos'], ['String']);
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
Team.prototype.id = undefined;

/**
 * @member {String} school
 */
Team.prototype.school = undefined;

/**
 * @member {String} mascot
 */
Team.prototype.mascot = undefined;

/**
 * @member {String} abbreviation
 */
Team.prototype.abbreviation = undefined;

/**
 * @member {String} altName1
 */
Team.prototype.altName1 = undefined;

/**
 * @member {String} altName2
 */
Team.prototype.altName2 = undefined;

/**
 * @member {String} altName3
 */
Team.prototype.altName3 = undefined;

/**
 * @member {String} conference
 */
Team.prototype.conference = undefined;

/**
 * @member {String} division
 */
Team.prototype.division = undefined;

/**
 * @member {String} color
 */
Team.prototype.color = undefined;

/**
 * @member {String} altColor
 */
Team.prototype.altColor = undefined;

/**
 * @member {Array.<String>} logos
 */
Team.prototype.logos = undefined;


