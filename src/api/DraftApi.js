/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\").
 *
 * OpenAPI spec version: 3.3.3
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.20
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from "../ApiClient";
import {DraftPick} from '../model/DraftPick';
import {DraftPosition} from '../model/DraftPosition';
import {DraftTeam} from '../model/DraftTeam';

/**
* Draft service.
* @module api/DraftApi
* @version 3.3.3
*/
export class DraftApi {

    /**
    * Constructs a new DraftApi. 
    * @alias module:api/DraftApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * List of NFL Draft picks
     * List of NFL Draft picks
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @param {String} opts.nflTeam NFL team filter
     * @param {String} opts.college Player college filter
     * @param {String} opts.conference College confrence abbreviation filter
     * @param {String} opts.position NFL position filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/DraftPick>} and HTTP response
     */
    getDraftPicksWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'year': opts['year'],
        'nflTeam': opts['nflTeam'],
        'college': opts['college'],
        'conference': opts['conference'],
        'position': opts['position']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [DraftPick];

      return this.apiClient.callApi(
        '/draft/picks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List of NFL Draft picks
     * List of NFL Draft picks
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @param {String} opts.nflTeam NFL team filter
     * @param {String} opts.college Player college filter
     * @param {String} opts.conference College confrence abbreviation filter
     * @param {String} opts.position NFL position filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/DraftPick>}
     */
    getDraftPicks(opts) {
      return this.getDraftPicksWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List of NFL positions
     * List of NFL positions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/DraftPosition>} and HTTP response
     */
    getNFLPositionsWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [DraftPosition];

      return this.apiClient.callApi(
        '/draft/positions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List of NFL positions
     * List of NFL positions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/DraftPosition>}
     */
    getNFLPositions() {
      return this.getNFLPositionsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List of NFL teams
     * List of NFL teams
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/DraftTeam>} and HTTP response
     */
    getNFLTeamsWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [DraftTeam];

      return this.apiClient.callApi(
        '/draft/teams', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List of NFL teams
     * List of NFL teams
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/DraftTeam>}
     */
    getNFLTeams() {
      return this.getNFLTeamsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
