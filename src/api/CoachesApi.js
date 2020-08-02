/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.2.6
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
import {InlineResponse200} from '../model/InlineResponse200';

/**
* Coaches service.
* @module api/CoachesApi
* @version 2.2.6
*/
export class CoachesApi {

    /**
    * Constructs a new CoachesApi. 
    * @alias module:api/CoachesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Coaching records and history
     * Coaching history
     * @param {Object} opts Optional parameters
     * @param {String} opts.firstName First name filter
     * @param {String} opts.lastName Last name filter
     * @param {String} opts.team Team name filter
     * @param {Number} opts.year Year filter
     * @param {Number} opts.minYear Minimum year filter (inclusive)
     * @param {Number} opts.maxYear Maximum year filter (inclusive)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    getCoachesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'firstName': opts['firstName'],
        'lastName': opts['lastName'],
        'team': opts['team'],
        'year': opts['year'],
        'minYear': opts['minYear'],
        'maxYear': opts['maxYear']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/coaches', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Coaching records and history
     * Coaching history
     * @param {Object} opts Optional parameters
     * @param {String} opts.firstName First name filter
     * @param {String} opts.lastName Last name filter
     * @param {String} opts.team Team name filter
     * @param {Number} opts.year Year filter
     * @param {Number} opts.minYear Minimum year filter (inclusive)
     * @param {Number} opts.maxYear Maximum year filter (inclusive)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    getCoaches(opts) {
      return this.getCoachesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
