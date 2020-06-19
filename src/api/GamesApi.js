/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 1.27.0
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
import {BoxScore} from '../model/BoxScore';
import {Game} from '../model/Game';
import {GameMedia} from '../model/GameMedia';
import {PlayerGame} from '../model/PlayerGame';
import {TeamGame} from '../model/TeamGame';
import {TeamRecord} from '../model/TeamRecord';

/**
* Games service.
* @module api/GamesApi
* @version 1.27.0
*/
export class GamesApi {

    /**
    * Constructs a new GamesApi. 
    * @alias module:api/GamesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get advanced box score
     * Advanced box score
     * @param {Number} gameId Game id parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/BoxScore>} and HTTP response
     */
    getAdvancedBoxScoreWithHttpInfo(gameId) {
      let postBody = null;

      // verify the required parameter 'gameId' is set
      if (gameId === undefined || gameId === null) {
        throw new Error("Missing the required parameter 'gameId' when calling getAdvancedBoxScore");
      }


      let pathParams = {
      };
      let queryParams = {
        'gameId': gameId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [BoxScore];

      return this.apiClient.callApi(
        '/game/box/advanced', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get advanced box score
     * Advanced box score
     * @param {Number} gameId Game id parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/BoxScore>}
     */
    getAdvancedBoxScore(gameId) {
      return this.getAdvancedBoxScoreWithHttpInfo(gameId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get game media information (TV, radio, etc)
     * Game media information (TV, radio, etc)
     * @param {Number} year Year filter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year2 Week filter
     * @param {Number} opts.seasonType Season type filter (regular, postseason, or both)
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference filter
     * @param {String} opts.mediaType Media type filter (tv, radio, web, ppv, or mobile)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/GameMedia>} and HTTP response
     */
    getGameMediaWithHttpInfo(year, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'year' is set
      if (year === undefined || year === null) {
        throw new Error("Missing the required parameter 'year' when calling getGameMedia");
      }


      let pathParams = {
      };
      let queryParams = {
        'year': year,
        'year': opts['year2'],
        'seasonType': opts['seasonType'],
        'team': opts['team'],
        'conference': opts['conference'],
        'mediaType': opts['mediaType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GameMedia];

      return this.apiClient.callApi(
        '/games/media', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get game media information (TV, radio, etc)
     * Game media information (TV, radio, etc)
     * @param {Number} year Year filter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year2 Week filter
     * @param {Number} opts.seasonType Season type filter (regular, postseason, or both)
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference filter
     * @param {String} opts.mediaType Media type filter (tv, radio, web, ppv, or mobile)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/GameMedia>}
     */
    getGameMedia(year, opts) {
      return this.getGameMediaWithHttpInfo(year, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get game information
     * Game results
     * @param {Number} year Year/season filter for games
     * @param {Object} opts Optional parameters
     * @param {Number} opts.week Week filter
     * @param {String} opts.seasonType Season type filter (regular or postseason) (default to regular)
     * @param {String} opts.team Team
     * @param {String} opts.home Home team filter
     * @param {String} opts.away Away team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @param {Number} opts.id id filter for querying a single game
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Game>} and HTTP response
     */
    getGamesWithHttpInfo(year, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'year' is set
      if (year === undefined || year === null) {
        throw new Error("Missing the required parameter 'year' when calling getGames");
      }


      let pathParams = {
      };
      let queryParams = {
        'year': year,
        'week': opts['week'],
        'seasonType': opts['seasonType'],
        'team': opts['team'],
        'home': opts['home'],
        'away': opts['away'],
        'conference': opts['conference'],
        'id': opts['id']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Game];

      return this.apiClient.callApi(
        '/games', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get game information
     * Game results
     * @param {Number} year Year/season filter for games
     * @param {Object} opts Optional parameters
     * @param {Number} opts.week Week filter
     * @param {String} opts.seasonType Season type filter (regular or postseason) (default to regular)
     * @param {String} opts.team Team
     * @param {String} opts.home Home team filter
     * @param {String} opts.away Away team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @param {Number} opts.id id filter for querying a single game
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Game>}
     */
    getGames(year, opts) {
      return this.getGamesWithHttpInfo(year, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get player statistics by game
     * Player game stats
     * @param {Number} year Year/season filter for games
     * @param {Object} opts Optional parameters
     * @param {Number} opts.week Week filter
     * @param {String} opts.seasonType Season type filter (regular or postseason) (default to regular)
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @param {String} opts.category Category filter (e.g defensive)
     * @param {Number} opts.gameId Game id filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PlayerGame>} and HTTP response
     */
    getPlayerGameStatsWithHttpInfo(year, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'year' is set
      if (year === undefined || year === null) {
        throw new Error("Missing the required parameter 'year' when calling getPlayerGameStats");
      }


      let pathParams = {
      };
      let queryParams = {
        'year': year,
        'week': opts['week'],
        'seasonType': opts['seasonType'],
        'team': opts['team'],
        'conference': opts['conference'],
        'category': opts['category'],
        'gameId': opts['gameId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [PlayerGame];

      return this.apiClient.callApi(
        '/games/players', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get player statistics by game
     * Player game stats
     * @param {Number} year Year/season filter for games
     * @param {Object} opts Optional parameters
     * @param {Number} opts.week Week filter
     * @param {String} opts.seasonType Season type filter (regular or postseason) (default to regular)
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @param {String} opts.category Category filter (e.g defensive)
     * @param {Number} opts.gameId Game id filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PlayerGame>}
     */
    getPlayerGameStats(year, opts) {
      return this.getPlayerGameStatsWithHttpInfo(year, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get team statistics by game
     * Team game stats
     * @param {Number} year Year/season filter for games
     * @param {Object} opts Optional parameters
     * @param {Number} opts.week Week filter
     * @param {String} opts.seasonType Season type filter (regular or postseason) (default to regular)
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @param {Number} opts.gameId Game id filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TeamGame>} and HTTP response
     */
    getTeamGameStatsWithHttpInfo(year, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'year' is set
      if (year === undefined || year === null) {
        throw new Error("Missing the required parameter 'year' when calling getTeamGameStats");
      }


      let pathParams = {
      };
      let queryParams = {
        'year': year,
        'week': opts['week'],
        'seasonType': opts['seasonType'],
        'team': opts['team'],
        'conference': opts['conference'],
        'gameId': opts['gameId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [TeamGame];

      return this.apiClient.callApi(
        '/games/teams', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get team statistics by game
     * Team game stats
     * @param {Number} year Year/season filter for games
     * @param {Object} opts Optional parameters
     * @param {Number} opts.week Week filter
     * @param {String} opts.seasonType Season type filter (regular or postseason) (default to regular)
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @param {Number} opts.gameId Game id filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TeamGame>}
     */
    getTeamGameStats(year, opts) {
      return this.getTeamGameStatsWithHttpInfo(year, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get records by year
     * Team records by year
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TeamRecord>} and HTTP response
     */
    getTeamRecordsWithHttpInfo(opts) {
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
      let returnType = [TeamRecord];

      return this.apiClient.callApi(
        '/records', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get records by year
     * Team records by year
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TeamRecord>}
     */
    getTeamRecords(opts) {
      return this.getTeamRecordsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
