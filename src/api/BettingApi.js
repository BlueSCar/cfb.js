/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 1.25.1
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
import {GameLines} from '../model/GameLines';

/**
* Betting service.
* @module api/BettingApi
* @version 1.25.1
*/
export class BettingApi {

    /**
    * Constructs a new BettingApi. 
    * @alias module:api/BettingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get betting line information
     * Closing betting lines
     * @param {Number} year Year/season filter for games
     * @param {Object} opts Optional parameters
     * @param {Number} opts.week Week filter
     * @param {String} opts.seasonType Season type filter (regular or postseason) (default to regular)
     * @param {String} opts.team Team
     * @param {String} opts.home Home team filter
     * @param {String} opts.away Away team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/GameLines>} and HTTP response
     */
    getLinesWithHttpInfo(year, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'year' is set
      if (year === undefined || year === null) {
        throw new Error("Missing the required parameter 'year' when calling getLines");
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
        'conference': opts['conference']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GameLines];

      return this.apiClient.callApi(
        '/lines', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get betting line information
     * Closing betting lines
     * @param {Number} year Year/season filter for games
     * @param {Object} opts Optional parameters
     * @param {Number} opts.week Week filter
     * @param {String} opts.seasonType Season type filter (regular or postseason) (default to regular)
     * @param {String} opts.team Team
     * @param {String} opts.home Home team filter
     * @param {String} opts.away Away team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/GameLines>}
     */
    getLines(year, opts) {
      return this.getLinesWithHttpInfo(year, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
