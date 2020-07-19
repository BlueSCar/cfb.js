/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.2.4
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

import {ApiClient} from "../ApiClient";
import {Play} from '../model/Play';
import {PlayStat} from '../model/PlayStat';
import {PlayStatType} from '../model/PlayStatType';
import {PlayType} from '../model/PlayType';

/**
* Plays service.
* @module api/PlaysApi
* @version 2.2.4
*/
export class PlaysApi {

    /**
    * Constructs a new PlaysApi. 
    * @alias module:api/PlaysApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Types of player play stats
     * Type of play stats
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PlayStatType>} and HTTP response
     */
    getPlayStatTypesWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [PlayStatType];

      return this.apiClient.callApi(
        '/play/stat/types', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Types of player play stats
     * Type of play stats
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PlayStatType>}
     */
    getPlayStatTypes() {
      return this.getPlayStatTypesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Play stats by play
     * Gets player stats associated by play (limit 1000)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @param {Number} opts.week Week filter
     * @param {String} opts.team Team filter
     * @param {Number} opts.gameId gameId filter (from /games endpoint)
     * @param {Number} opts.athleteId athleteId filter (from /roster endpoint)
     * @param {Number} opts.statTypeId statTypeId filter (from /play/stat/types endpoint)
     * @param {String} opts.seasonType regular, postseason, or both
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PlayStat>} and HTTP response
     */
    getPlayStatsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'year': opts['year'],
        'week': opts['week'],
        'team': opts['team'],
        'gameId': opts['gameId'],
        'athleteId': opts['athleteId'],
        'statTypeId': opts['statTypeId'],
        'seasonType': opts['seasonType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [PlayStat];

      return this.apiClient.callApi(
        '/play/stats', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Play stats by play
     * Gets player stats associated by play (limit 1000)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @param {Number} opts.week Week filter
     * @param {String} opts.team Team filter
     * @param {Number} opts.gameId gameId filter (from /games endpoint)
     * @param {Number} opts.athleteId athleteId filter (from /roster endpoint)
     * @param {Number} opts.statTypeId statTypeId filter (from /play/stat/types endpoint)
     * @param {String} opts.seasonType regular, postseason, or both
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PlayStat>}
     */
    getPlayStats(opts) {
      return this.getPlayStatsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Play types
     * Types of plays
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PlayType>} and HTTP response
     */
    getPlayTypesWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [PlayType];

      return this.apiClient.callApi(
        '/play/types', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Play types
     * Types of plays
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PlayType>}
     */
    getPlayTypes() {
      return this.getPlayTypesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Play by play data
     * Get play data and results. Requires either a week or team to be specified.
     * @param {Number} year Year filter
     * @param {Object} opts Optional parameters
     * @param {String} opts.seasonType Season type filter (default to regular)
     * @param {Number} opts.week Week filter (required if team, offense, or defense, not specified)
     * @param {String} opts.team Team filter
     * @param {String} opts.offense Offensive team filter
     * @param {String} opts.defense Defensive team filter
     * @param {String} opts.conference Conference filter
     * @param {String} opts.offenseConference Offensive conference filter
     * @param {String} opts.defenseConference Defensive conference filter
     * @param {Number} opts.playType Play type filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Play>} and HTTP response
     */
    getPlaysWithHttpInfo(year, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'year' is set
      if (year === undefined || year === null) {
        throw new Error("Missing the required parameter 'year' when calling getPlays");
      }


      let pathParams = {
      };
      let queryParams = {
        'seasonType': opts['seasonType'],
        'year': year,
        'week': opts['week'],
        'team': opts['team'],
        'offense': opts['offense'],
        'defense': opts['defense'],
        'conference': opts['conference'],
        'offenseConference': opts['offenseConference'],
        'defenseConference': opts['defenseConference'],
        'playType': opts['playType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Play];

      return this.apiClient.callApi(
        '/plays', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Play by play data
     * Get play data and results. Requires either a week or team to be specified.
     * @param {Number} year Year filter
     * @param {Object} opts Optional parameters
     * @param {String} opts.seasonType Season type filter (default to regular)
     * @param {Number} opts.week Week filter (required if team, offense, or defense, not specified)
     * @param {String} opts.team Team filter
     * @param {String} opts.offense Offensive team filter
     * @param {String} opts.defense Defensive team filter
     * @param {String} opts.conference Conference filter
     * @param {String} opts.offenseConference Offensive conference filter
     * @param {String} opts.defenseConference Defensive conference filter
     * @param {Number} opts.playType Play type filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Play>}
     */
    getPlays(year, opts) {
      return this.getPlaysWithHttpInfo(year, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
