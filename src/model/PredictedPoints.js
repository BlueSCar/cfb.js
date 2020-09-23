/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.2.14
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

import {ApiClient} from '../ApiClient';

/**
 * The PredictedPoints model module.
 * @module model/PredictedPoints
 * @version 2.2.14
 */
export class PredictedPoints {
  /**
   * Constructs a new <code>PredictedPoints</code>.
   * @alias module:model/PredictedPoints
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PredictedPoints</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PredictedPoints} obj Optional instance to populate.
   * @return {module:model/PredictedPoints} The populated <code>PredictedPoints</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PredictedPoints();
      if (data.hasOwnProperty('yardLine'))
        obj.yardLine = ApiClient.convertToType(data['yardLine'], 'Number');
      if (data.hasOwnProperty('predictedPoints'))
        obj.predictedPoints = ApiClient.convertToType(data['predictedPoints'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} yardLine
 */
PredictedPoints.prototype.yardLine = undefined;

/**
 * @member {Number} predictedPoints
 */
PredictedPoints.prototype.predictedPoints = undefined;


