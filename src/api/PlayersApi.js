/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.2.11
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

import {ApiClient} from "../ApiClient";
import {PlayerSearchResult} from '../model/PlayerSearchResult';
import {PlayerSeasonStat} from '../model/PlayerSeasonStat';
import {PlayerUsage} from '../model/PlayerUsage';
import {ReturningProduction} from '../model/ReturningProduction';

/**
* Players service.
* @module api/PlayersApi
* @version 2.2.11
*/
export class PlayersApi {

    /**
    * Constructs a new PlayersApi. 
    * @alias module:api/PlayersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Player stats by season
     * Season player stats
     * @param {Number} year Year filter
     * @param {Object} opts Optional parameters
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @param {Number} opts.startWeek Start week filter
     * @param {Number} opts.endWeek Start week filter
     * @param {String} opts.seasonType Season type filter (regular, postseason, or both)
     * @param {String} opts.category Stat category filter (e.g. passing)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PlayerSeasonStat>} and HTTP response
     */
    getPlayerSeasonStatsWithHttpInfo(year, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'year' is set
      if (year === undefined || year === null) {
        throw new Error("Missing the required parameter 'year' when calling getPlayerSeasonStats");
      }


      let pathParams = {
      };
      let queryParams = {
        'year': year,
        'team': opts['team'],
        'conference': opts['conference'],
        'startWeek': opts['startWeek'],
        'endWeek': opts['endWeek'],
        'seasonType': opts['seasonType'],
        'category': opts['category']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [PlayerSeasonStat];

      return this.apiClient.callApi(
        '/stats/player/season', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Player stats by season
     * Season player stats
     * @param {Number} year Year filter
     * @param {Object} opts Optional parameters
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @param {Number} opts.startWeek Start week filter
     * @param {Number} opts.endWeek Start week filter
     * @param {String} opts.seasonType Season type filter (regular, postseason, or both)
     * @param {String} opts.category Stat category filter (e.g. passing)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PlayerSeasonStat>}
     */
    getPlayerSeasonStats(year, opts) {
      return this.getPlayerSeasonStatsWithHttpInfo(year, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Player usage metrics broken down by season
     * Player usage metrics by season
     * @param {Number} year Year filter
     * @param {Object} opts Optional parameters
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @param {String} opts.position Position abbreviation filter
     * @param {Number} opts.playerId Player id filter
     * @param {Boolean} opts.excludeGarbageTime Filter to remove garbage time plays from calculations
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PlayerUsage>} and HTTP response
     */
    getPlayerUsageWithHttpInfo(year, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'year' is set
      if (year === undefined || year === null) {
        throw new Error("Missing the required parameter 'year' when calling getPlayerUsage");
      }


      let pathParams = {
      };
      let queryParams = {
        'year': year,
        'team': opts['team'],
        'conference': opts['conference'],
        'position': opts['position'],
        'playerId': opts['playerId'],
        'excludeGarbageTime': opts['excludeGarbageTime']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [PlayerUsage];

      return this.apiClient.callApi(
        '/player/usage', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Player usage metrics broken down by season
     * Player usage metrics by season
     * @param {Number} year Year filter
     * @param {Object} opts Optional parameters
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @param {String} opts.position Position abbreviation filter
     * @param {Number} opts.playerId Player id filter
     * @param {Boolean} opts.excludeGarbageTime Filter to remove garbage time plays from calculations
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PlayerUsage>}
     */
    getPlayerUsage(year, opts) {
      return this.getPlayerUsageWithHttpInfo(year, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Team returning production metrics
     * Returning production metrics
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ReturningProduction>} and HTTP response
     */
    getReturningProductionWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'year': opts['year'],
        'team': opts['team'],
        'conference': opts['conference']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ReturningProduction];

      return this.apiClient.callApi(
        '/player/returning', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Team returning production metrics
     * Returning production metrics
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ReturningProduction>}
     */
    getReturningProduction(opts) {
      return this.getReturningProductionWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search for player information
     * Search for players
     * @param {String} searchTerm Term to search on
     * @param {Object} opts Optional parameters
     * @param {String} opts.position Position abbreviation filter
     * @param {String} opts.team Team filter
     * @param {Number} opts.year Year filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PlayerSearchResult>} and HTTP response
     */
    playerSearchWithHttpInfo(searchTerm, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'searchTerm' is set
      if (searchTerm === undefined || searchTerm === null) {
        throw new Error("Missing the required parameter 'searchTerm' when calling playerSearch");
      }


      let pathParams = {
      };
      let queryParams = {
        'searchTerm': searchTerm,
        'position': opts['position'],
        'team': opts['team'],
        'year': opts['year']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [PlayerSearchResult];

      return this.apiClient.callApi(
        '/player/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search for player information
     * Search for players
     * @param {String} searchTerm Term to search on
     * @param {Object} opts Optional parameters
     * @param {String} opts.position Position abbreviation filter
     * @param {String} opts.team Team filter
     * @param {Number} opts.year Year filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PlayerSearchResult>}
     */
    playerSearch(searchTerm, opts) {
      return this.playerSearchWithHttpInfo(searchTerm, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
