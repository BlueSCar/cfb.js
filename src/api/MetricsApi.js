/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.1.0
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
    define(['ApiClient', 'model/GamePPA', 'model/PlayWP', 'model/PlayerGamePPA', 'model/PlayerSeasonPPA', 'model/PredictedPoints', 'model/PregameWP', 'model/TeamPPA'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GamePPA'), require('../model/PlayWP'), require('../model/PlayerGamePPA'), require('../model/PlayerSeasonPPA'), require('../model/PredictedPoints'), require('../model/PregameWP'), require('../model/TeamPPA'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.MetricsApi = factory(root.cfb.ApiClient, root.cfb.GamePPA, root.cfb.PlayWP, root.cfb.PlayerGamePPA, root.cfb.PlayerSeasonPPA, root.cfb.PredictedPoints, root.cfb.PregameWP, root.cfb.TeamPPA);
  }
}(this, function(ApiClient, GamePPA, PlayWP, PlayerGamePPA, PlayerSeasonPPA, PredictedPoints, PregameWP, TeamPPA) {
  'use strict';

  /**
   * Metrics service.
   * @module api/MetricsApi
   * @version 4.1.0
   */

  /**
   * Constructs a new MetricsApi. 
   * @alias module:api/MetricsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Team Predicated Points Added (PPA/EPA) by game
     * Predicted Points Added (PPA) by game
     * @param {Number} year Year filter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.week Week filter
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference filter
     * @param {Boolean} opts.excludeGarbageTime Filter to remove garbage time plays from calculations
     * @param {String} opts.seasonType Season type filter (regular or postseason) (default to regular)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/GamePPA>} and HTTP response
     */
    this.getGamePPAWithHttpInfo = function(year, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'year' is set
      if (year === undefined || year === null) {
        throw new Error("Missing the required parameter 'year' when calling getGamePPA");
      }


      var pathParams = {
      };
      var queryParams = {
        'year': year,
        'week': opts['week'],
        'team': opts['team'],
        'conference': opts['conference'],
        'excludeGarbageTime': opts['excludeGarbageTime'],
        'seasonType': opts['seasonType'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [GamePPA];

      return this.apiClient.callApi(
        '/ppa/games', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Team Predicated Points Added (PPA/EPA) by game
     * Predicted Points Added (PPA) by game
     * @param {Number} year Year filter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.week Week filter
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference filter
     * @param {Boolean} opts.excludeGarbageTime Filter to remove garbage time plays from calculations
     * @param {String} opts.seasonType Season type filter (regular or postseason) (default to regular)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/GamePPA>}
     */
    this.getGamePPA = function(year, opts) {
      return this.getGamePPAWithHttpInfo(year, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Player Predicated Points Added (PPA/EPA) broken down by game
     * Predicted Points Added (PPA) by player game
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @param {Number} opts.week Week filter
     * @param {String} opts.team Team filter
     * @param {String} opts.position Position abbreviation filter
     * @param {Number} opts.playerId Player id filter
     * @param {String} opts.threshold Minimum play threshold filter
     * @param {Boolean} opts.excludeGarbageTime Filter to remove garbage time plays from calculations
     * @param {String} opts.seasonType Season type filter (regular or postseason) (default to regular)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PlayerGamePPA>} and HTTP response
     */
    this.getPlayerGamePPAWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'year': opts['year'],
        'week': opts['week'],
        'team': opts['team'],
        'position': opts['position'],
        'playerId': opts['playerId'],
        'threshold': opts['threshold'],
        'excludeGarbageTime': opts['excludeGarbageTime'],
        'seasonType': opts['seasonType'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [PlayerGamePPA];

      return this.apiClient.callApi(
        '/ppa/players/games', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Player Predicated Points Added (PPA/EPA) broken down by game
     * Predicted Points Added (PPA) by player game
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @param {Number} opts.week Week filter
     * @param {String} opts.team Team filter
     * @param {String} opts.position Position abbreviation filter
     * @param {Number} opts.playerId Player id filter
     * @param {String} opts.threshold Minimum play threshold filter
     * @param {Boolean} opts.excludeGarbageTime Filter to remove garbage time plays from calculations
     * @param {String} opts.seasonType Season type filter (regular or postseason) (default to regular)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PlayerGamePPA>}
     */
    this.getPlayerGamePPA = function(opts) {
      return this.getPlayerGamePPAWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Player Predicated Points Added (PPA/EPA) broken down by season
     * Predicted Points Added (PPA) by player season
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @param {String} opts.position Position abbreviation filter
     * @param {Number} opts.playerId Player id filter
     * @param {String} opts.threshold Minimum play threshold filter
     * @param {Boolean} opts.excludeGarbageTime Filter to remove garbage time plays from calculations
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PlayerSeasonPPA>} and HTTP response
     */
    this.getPlayerSeasonPPAWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'year': opts['year'],
        'team': opts['team'],
        'conference': opts['conference'],
        'position': opts['position'],
        'playerId': opts['playerId'],
        'threshold': opts['threshold'],
        'excludeGarbageTime': opts['excludeGarbageTime'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [PlayerSeasonPPA];

      return this.apiClient.callApi(
        '/ppa/players/season', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Player Predicated Points Added (PPA/EPA) broken down by season
     * Predicted Points Added (PPA) by player season
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @param {String} opts.position Position abbreviation filter
     * @param {Number} opts.playerId Player id filter
     * @param {String} opts.threshold Minimum play threshold filter
     * @param {Boolean} opts.excludeGarbageTime Filter to remove garbage time plays from calculations
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PlayerSeasonPPA>}
     */
    this.getPlayerSeasonPPA = function(opts) {
      return this.getPlayerSeasonPPAWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Predicted Points (i.e. Expected Points or EP)
     * Predicted Points
     * @param {Number} down Down filter
     * @param {Number} distance Distance filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PredictedPoints>} and HTTP response
     */
    this.getPredictedPointsWithHttpInfo = function(down, distance) {
      var postBody = null;

      // verify the required parameter 'down' is set
      if (down === undefined || down === null) {
        throw new Error("Missing the required parameter 'down' when calling getPredictedPoints");
      }

      // verify the required parameter 'distance' is set
      if (distance === undefined || distance === null) {
        throw new Error("Missing the required parameter 'distance' when calling getPredictedPoints");
      }


      var pathParams = {
      };
      var queryParams = {
        'down': down,
        'distance': distance,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [PredictedPoints];

      return this.apiClient.callApi(
        '/ppa/predicted', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Predicted Points (i.e. Expected Points or EP)
     * Predicted Points
     * @param {Number} down Down filter
     * @param {Number} distance Distance filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PredictedPoints>}
     */
    this.getPredictedPoints = function(down, distance) {
      return this.getPredictedPointsWithHttpInfo(down, distance)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Pregame win probability data
     * Pregame win probabilities
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @param {Number} opts.week Week filter
     * @param {String} opts.team Team filter
     * @param {String} opts.seasonType regular or postseason
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PregameWP>} and HTTP response
     */
    this.getPregameWinProbabilitiesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'year': opts['year'],
        'week': opts['week'],
        'team': opts['team'],
        'seasonType': opts['seasonType'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [PregameWP];

      return this.apiClient.callApi(
        '/metrics/wp/pregame', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Pregame win probability data
     * Pregame win probabilities
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @param {Number} opts.week Week filter
     * @param {String} opts.team Team filter
     * @param {String} opts.seasonType regular or postseason
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PregameWP>}
     */
    this.getPregameWinProbabilities = function(opts) {
      return this.getPregameWinProbabilitiesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Predicted Points Added (PPA/EPA) data by team
     * Predicted Points Added (PPA)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter (required if team not specified)
     * @param {String} opts.team Team filter (required if year not specified)
     * @param {String} opts.conference Conference filter
     * @param {Boolean} opts.excludeGarbageTime Filter to remove garbage time plays from calculations
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TeamPPA>} and HTTP response
     */
    this.getTeamPPAWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'year': opts['year'],
        'team': opts['team'],
        'conference': opts['conference'],
        'excludeGarbageTime': opts['excludeGarbageTime'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [TeamPPA];

      return this.apiClient.callApi(
        '/ppa/teams', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Predicted Points Added (PPA/EPA) data by team
     * Predicted Points Added (PPA)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter (required if team not specified)
     * @param {String} opts.team Team filter (required if year not specified)
     * @param {String} opts.conference Conference filter
     * @param {Boolean} opts.excludeGarbageTime Filter to remove garbage time plays from calculations
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TeamPPA>}
     */
    this.getTeamPPA = function(opts) {
      return this.getTeamPPAWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Win probability chart data
     * Win probability data
     * @param {Number} gameId Game id filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PlayWP>} and HTTP response
     */
    this.getWinProbabilityDataWithHttpInfo = function(gameId) {
      var postBody = null;

      // verify the required parameter 'gameId' is set
      if (gameId === undefined || gameId === null) {
        throw new Error("Missing the required parameter 'gameId' when calling getWinProbabilityData");
      }


      var pathParams = {
      };
      var queryParams = {
        'gameId': gameId,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [PlayWP];

      return this.apiClient.callApi(
        '/metrics/wp', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Win probability chart data
     * Win probability data
     * @param {Number} gameId Game id filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PlayWP>}
     */
    this.getWinProbabilityData = function(gameId) {
      return this.getWinProbabilityDataWithHttpInfo(gameId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
