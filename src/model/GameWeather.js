/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.1.1
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.21
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.GameWeather = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GameWeather model module.
   * @module model/GameWeather
   * @version 4.1.1
   */

  /**
   * Constructs a new <code>GameWeather</code>.
   * @alias module:model/GameWeather
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GameWeather</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GameWeather} obj Optional instance to populate.
   * @return {module:model/GameWeather} The populated <code>GameWeather</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('season'))
        obj.season = ApiClient.convertToType(data['season'], 'Number');
      if (data.hasOwnProperty('week'))
        obj.week = ApiClient.convertToType(data['week'], 'Number');
      if (data.hasOwnProperty('seasonType'))
        obj.seasonType = ApiClient.convertToType(data['seasonType'], 'String');
      if (data.hasOwnProperty('startTime'))
        obj.startTime = ApiClient.convertToType(data['startTime'], 'String');
      if (data.hasOwnProperty('isStartTimeTBD'))
        obj.isStartTimeTBD = ApiClient.convertToType(data['isStartTimeTBD'], 'Boolean');
      if (data.hasOwnProperty('homeTeam'))
        obj.homeTeam = ApiClient.convertToType(data['homeTeam'], 'String');
      if (data.hasOwnProperty('homeConference'))
        obj.homeConference = ApiClient.convertToType(data['homeConference'], 'String');
      if (data.hasOwnProperty('awayTeam'))
        obj.awayTeam = ApiClient.convertToType(data['awayTeam'], 'String');
      if (data.hasOwnProperty('awayConference'))
        obj.awayConference = ApiClient.convertToType(data['awayConference'], 'String');
      if (data.hasOwnProperty('venueId'))
        obj.venueId = ApiClient.convertToType(data['venueId'], 'Number');
      if (data.hasOwnProperty('venue'))
        obj.venue = ApiClient.convertToType(data['venue'], 'String');
      if (data.hasOwnProperty('temperature'))
        obj.temperature = ApiClient.convertToType(data['temperature'], 'Number');
      if (data.hasOwnProperty('dewPoint'))
        obj.dewPoint = ApiClient.convertToType(data['dewPoint'], 'Number');
      if (data.hasOwnProperty('humidity'))
        obj.humidity = ApiClient.convertToType(data['humidity'], 'Number');
      if (data.hasOwnProperty('precipitation'))
        obj.precipitation = ApiClient.convertToType(data['precipitation'], 'Number');
      if (data.hasOwnProperty('snowfall'))
        obj.snowfall = ApiClient.convertToType(data['snowfall'], 'Number');
      if (data.hasOwnProperty('windDirection'))
        obj.windDirection = ApiClient.convertToType(data['windDirection'], 'Number');
      if (data.hasOwnProperty('windSpeed'))
        obj.windSpeed = ApiClient.convertToType(data['windSpeed'], 'Number');
      if (data.hasOwnProperty('pressure'))
        obj.pressure = ApiClient.convertToType(data['pressure'], 'Number');
      if (data.hasOwnProperty('weatherConditionCode'))
        obj.weatherConditionCode = ApiClient.convertToType(data['weatherConditionCode'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Number} season
   */
  exports.prototype.season = undefined;

  /**
   * @member {Number} week
   */
  exports.prototype.week = undefined;

  /**
   * @member {String} seasonType
   */
  exports.prototype.seasonType = undefined;

  /**
   * @member {String} startTime
   */
  exports.prototype.startTime = undefined;

  /**
   * @member {Boolean} isStartTimeTBD
   */
  exports.prototype.isStartTimeTBD = undefined;

  /**
   * @member {String} homeTeam
   */
  exports.prototype.homeTeam = undefined;

  /**
   * @member {String} homeConference
   */
  exports.prototype.homeConference = undefined;

  /**
   * @member {String} awayTeam
   */
  exports.prototype.awayTeam = undefined;

  /**
   * @member {String} awayConference
   */
  exports.prototype.awayConference = undefined;

  /**
   * @member {Number} venueId
   */
  exports.prototype.venueId = undefined;

  /**
   * @member {String} venue
   */
  exports.prototype.venue = undefined;

  /**
   * @member {Number} temperature
   */
  exports.prototype.temperature = undefined;

  /**
   * @member {Number} dewPoint
   */
  exports.prototype.dewPoint = undefined;

  /**
   * @member {Number} humidity
   */
  exports.prototype.humidity = undefined;

  /**
   * @member {Number} precipitation
   */
  exports.prototype.precipitation = undefined;

  /**
   * @member {Number} snowfall
   */
  exports.prototype.snowfall = undefined;

  /**
   * @member {Number} windDirection
   */
  exports.prototype.windDirection = undefined;

  /**
   * @member {Number} windSpeed
   */
  exports.prototype.windSpeed = undefined;

  /**
   * @member {Number} pressure
   */
  exports.prototype.pressure = undefined;

  /**
   * @member {Number} weatherConditionCode
   */
  exports.prototype.weatherConditionCode = undefined;


  return exports;

}));