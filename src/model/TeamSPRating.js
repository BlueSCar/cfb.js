/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.4.3
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
 * The TeamSPRating model module.
 * @module model/TeamSPRating
 * @version 2.4.3
 */
export class TeamSPRating {
  /**
   * Constructs a new <code>TeamSPRating</code>.
   * @alias module:model/TeamSPRating
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TeamSPRating</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamSPRating} obj Optional instance to populate.
   * @return {module:model/TeamSPRating} The populated <code>TeamSPRating</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamSPRating();
      if (data.hasOwnProperty('year'))
        obj.year = ApiClient.convertToType(data['year'], 'Number');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('conference'))
        obj.conference = ApiClient.convertToType(data['conference'], 'String');
      if (data.hasOwnProperty('rating'))
        obj.rating = ApiClient.convertToType(data['rating'], 'Number');
      if (data.hasOwnProperty('ranking'))
        obj.ranking = ApiClient.convertToType(data['ranking'], 'Number');
      if (data.hasOwnProperty('secondOrderWins'))
        obj.secondOrderWins = ApiClient.convertToType(data['secondOrderWins'], 'Number');
      if (data.hasOwnProperty('sos'))
        obj.sos = ApiClient.convertToType(data['sos'], 'Number');
      if (data.hasOwnProperty('offense'))
        obj.offense = ApiClient.convertToType(data['offense'], Object);
      if (data.hasOwnProperty('defense'))
        obj.defense = ApiClient.convertToType(data['defense'], Object);
      if (data.hasOwnProperty('specialTeams'))
        obj.specialTeams = ApiClient.convertToType(data['specialTeams'], Object);
    }
    return obj;
  }
}

/**
 * @member {Number} year
 */
TeamSPRating.prototype.year = undefined;

/**
 * @member {String} team
 */
TeamSPRating.prototype.team = undefined;

/**
 * @member {String} conference
 */
TeamSPRating.prototype.conference = undefined;

/**
 * @member {Number} rating
 */
TeamSPRating.prototype.rating = undefined;

/**
 * @member {Number} ranking
 */
TeamSPRating.prototype.ranking = undefined;

/**
 * @member {Number} secondOrderWins
 */
TeamSPRating.prototype.secondOrderWins = undefined;

/**
 * @member {Number} sos
 */
TeamSPRating.prototype.sos = undefined;

/**
 * @member {Object} offense
 */
TeamSPRating.prototype.offense = undefined;

/**
 * @member {Object} defense
 */
TeamSPRating.prototype.defense = undefined;

/**
 * @member {Object} specialTeams
 */
TeamSPRating.prototype.specialTeams = undefined;


