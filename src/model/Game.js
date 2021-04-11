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
 * The Game model module.
 * @module model/Game
 * @version 3.2.0
 */
export class Game {
  /**
   * Constructs a new <code>Game</code>.
   * @alias module:model/Game
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Game</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Game} obj Optional instance to populate.
   * @return {module:model/Game} The populated <code>Game</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Game();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('season'))
        obj.season = ApiClient.convertToType(data['season'], 'Number');
      if (data.hasOwnProperty('week'))
        obj.week = ApiClient.convertToType(data['week'], 'Number');
      if (data.hasOwnProperty('season_type'))
        obj.seasonType = ApiClient.convertToType(data['season_type'], 'String');
      if (data.hasOwnProperty('start_date'))
        obj.startDate = ApiClient.convertToType(data['start_date'], 'String');
      if (data.hasOwnProperty('start_time_tbd'))
        obj.startTimeTbd = ApiClient.convertToType(data['start_time_tbd'], 'Boolean');
      if (data.hasOwnProperty('neutral_site'))
        obj.neutralSite = ApiClient.convertToType(data['neutral_site'], 'Boolean');
      if (data.hasOwnProperty('conference_game'))
        obj.conferenceGame = ApiClient.convertToType(data['conference_game'], 'Boolean');
      if (data.hasOwnProperty('attendance'))
        obj.attendance = ApiClient.convertToType(data['attendance'], 'Number');
      if (data.hasOwnProperty('venue_id'))
        obj.venueId = ApiClient.convertToType(data['venue_id'], 'Number');
      if (data.hasOwnProperty('venue'))
        obj.venue = ApiClient.convertToType(data['venue'], 'String');
      if (data.hasOwnProperty('home_id'))
        obj.homeId = ApiClient.convertToType(data['home_id'], 'Number');
      if (data.hasOwnProperty('home_team'))
        obj.homeTeam = ApiClient.convertToType(data['home_team'], 'String');
      if (data.hasOwnProperty('home_conference'))
        obj.homeConference = ApiClient.convertToType(data['home_conference'], 'String');
      if (data.hasOwnProperty('home_points'))
        obj.homePoints = ApiClient.convertToType(data['home_points'], 'Number');
      if (data.hasOwnProperty('home_line_scores'))
        obj.homeLineScores = ApiClient.convertToType(data['home_line_scores'], ['Number']);
      if (data.hasOwnProperty('home_post_win_prob'))
        obj.homePostWinProb = ApiClient.convertToType(data['home_post_win_prob'], 'Number');
      if (data.hasOwnProperty('away_id'))
        obj.awayId = ApiClient.convertToType(data['away_id'], 'Number');
      if (data.hasOwnProperty('away_team'))
        obj.awayTeam = ApiClient.convertToType(data['away_team'], 'String');
      if (data.hasOwnProperty('away_conference'))
        obj.awayConference = ApiClient.convertToType(data['away_conference'], 'String');
      if (data.hasOwnProperty('away_points'))
        obj.awayPoints = ApiClient.convertToType(data['away_points'], 'Number');
      if (data.hasOwnProperty('away_line_scores'))
        obj.awayLineScores = ApiClient.convertToType(data['away_line_scores'], ['Number']);
      if (data.hasOwnProperty('away_post_win_prob'))
        obj.awayPostWinProb = ApiClient.convertToType(data['away_post_win_prob'], 'Number');
      if (data.hasOwnProperty('excitement_index'))
        obj.excitementIndex = ApiClient.convertToType(data['excitement_index'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
Game.prototype.id = undefined;

/**
 * @member {Number} season
 */
Game.prototype.season = undefined;

/**
 * @member {Number} week
 */
Game.prototype.week = undefined;

/**
 * @member {String} seasonType
 */
Game.prototype.seasonType = undefined;

/**
 * @member {String} startDate
 */
Game.prototype.startDate = undefined;

/**
 * @member {Boolean} startTimeTbd
 */
Game.prototype.startTimeTbd = undefined;

/**
 * @member {Boolean} neutralSite
 */
Game.prototype.neutralSite = undefined;

/**
 * @member {Boolean} conferenceGame
 */
Game.prototype.conferenceGame = undefined;

/**
 * @member {Number} attendance
 */
Game.prototype.attendance = undefined;

/**
 * @member {Number} venueId
 */
Game.prototype.venueId = undefined;

/**
 * @member {String} venue
 */
Game.prototype.venue = undefined;

/**
 * @member {Number} homeId
 */
Game.prototype.homeId = undefined;

/**
 * @member {String} homeTeam
 */
Game.prototype.homeTeam = undefined;

/**
 * @member {String} homeConference
 */
Game.prototype.homeConference = undefined;

/**
 * @member {Number} homePoints
 */
Game.prototype.homePoints = undefined;

/**
 * @member {Array.<Number>} homeLineScores
 */
Game.prototype.homeLineScores = undefined;

/**
 * @member {Number} homePostWinProb
 */
Game.prototype.homePostWinProb = undefined;

/**
 * @member {Number} awayId
 */
Game.prototype.awayId = undefined;

/**
 * @member {String} awayTeam
 */
Game.prototype.awayTeam = undefined;

/**
 * @member {String} awayConference
 */
Game.prototype.awayConference = undefined;

/**
 * @member {Number} awayPoints
 */
Game.prototype.awayPoints = undefined;

/**
 * @member {Array.<Number>} awayLineScores
 */
Game.prototype.awayLineScores = undefined;

/**
 * @member {Number} awayPostWinProb
 */
Game.prototype.awayPostWinProb = undefined;

/**
 * @member {Number} excitementIndex
 */
Game.prototype.excitementIndex = undefined;


