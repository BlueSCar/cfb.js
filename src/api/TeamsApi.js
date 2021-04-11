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

import {ApiClient} from "../ApiClient";
import {Player} from '../model/Player';
import {Team} from '../model/Team';
import {TeamMatchup} from '../model/TeamMatchup';
import {TeamTalent} from '../model/TeamTalent';

/**
* Teams service.
* @module api/TeamsApi
* @version 3.2.0
*/
export class TeamsApi {

    /**
    * Constructs a new TeamsApi. 
    * @alias module:api/TeamsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * FBS team list
     * Information on major division teams
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Team>} and HTTP response
     */
    getFbsTeamsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'year': opts['year']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Team];

      return this.apiClient.callApi(
        '/teams/fbs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * FBS team list
     * Information on major division teams
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Team>}
     */
    getFbsTeams(opts) {
      return this.getFbsTeamsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Team rosters
     * Roster data
     * @param {Object} opts Optional parameters
     * @param {String} opts.team Team name
     * @param {Number} opts.year Season year
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Player>} and HTTP response
     */
    getRosterWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'team': opts['team'],
        'year': opts['year']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Player];

      return this.apiClient.callApi(
        '/roster', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Team rosters
     * Roster data
     * @param {Object} opts Optional parameters
     * @param {String} opts.team Team name
     * @param {Number} opts.year Season year
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Player>}
     */
    getRoster(opts) {
      return this.getRosterWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Team talent composite rankings
     * Team talent composite
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TeamTalent>} and HTTP response
     */
    getTalentWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'year': opts['year']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [TeamTalent];

      return this.apiClient.callApi(
        '/talent', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Team talent composite rankings
     * Team talent composite
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TeamTalent>}
     */
    getTalent(opts) {
      return this.getTalentWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Team matchup history
     * Matchup history
     * @param {String} team1 First team
     * @param {String} team2 Second team
     * @param {Object} opts Optional parameters
     * @param {Number} opts.minYear Minimum year
     * @param {Number} opts.maxYear Maximum year
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TeamMatchup>} and HTTP response
     */
    getTeamMatchupWithHttpInfo(team1, team2, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'team1' is set
      if (team1 === undefined || team1 === null) {
        throw new Error("Missing the required parameter 'team1' when calling getTeamMatchup");
      }

      // verify the required parameter 'team2' is set
      if (team2 === undefined || team2 === null) {
        throw new Error("Missing the required parameter 'team2' when calling getTeamMatchup");
      }


      let pathParams = {
      };
      let queryParams = {
        'team1': team1,
        'team2': team2,
        'minYear': opts['minYear'],
        'maxYear': opts['maxYear']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [TeamMatchup];

      return this.apiClient.callApi(
        '/teams/matchup', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Team matchup history
     * Matchup history
     * @param {String} team1 First team
     * @param {String} team2 Second team
     * @param {Object} opts Optional parameters
     * @param {Number} opts.minYear Minimum year
     * @param {Number} opts.maxYear Maximum year
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TeamMatchup>}
     */
    getTeamMatchup(team1, team2, opts) {
      return this.getTeamMatchupWithHttpInfo(team1, team2, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Team information
     * Get team information
     * @param {Object} opts Optional parameters
     * @param {String} opts.conference Conference abbreviation filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Team>} and HTTP response
     */
    getTeamsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'conference': opts['conference']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Team];

      return this.apiClient.callApi(
        '/teams', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Team information
     * Get team information
     * @param {Object} opts Optional parameters
     * @param {String} opts.conference Conference abbreviation filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Team>}
     */
    getTeams(opts) {
      return this.getTeamsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
