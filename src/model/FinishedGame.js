/**
 * MaxwinServiceApi
 * Cluttery Maxwin game client API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  module.exports = factory(require('../ApiClient'));
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FinishedGame model module.
   * @module model/FinishedGame
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>FinishedGame</code>.
   * @alias module:model/FinishedGame
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>FinishedGame</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FinishedGame} obj Optional instance to populate.
   * @return {module:model/FinishedGame} The populated <code>FinishedGame</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('finished')) {
        obj['finished'] = ApiClient.convertToType(data['finished'], 'Number');
      }
      if (data.hasOwnProperty('winners')) {
        obj['winners'] = ApiClient.convertToType(data['winners'], 'Number');
      }
      if (data.hasOwnProperty('maxAmount')) {
        obj['maxAmount'] = ApiClient.convertToType(data['maxAmount'], 'String');
      }
      if (data.hasOwnProperty('prize')) {
        obj['prize'] = ApiClient.convertToType(data['prize'], 'String');
      }
    }
    return obj;
  }

  /**
   * Game ID
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Bit coin address of the game
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * Finished UNIX timestamp
   * @member {Number} finished
   */
  exports.prototype['finished'] = undefined;
  /**
   * Nuber of winners in the game
   * @member {Number} winners
   */
  exports.prototype['winners'] = undefined;
  /**
   * Maximum bet
   * @member {String} maxAmount
   */
  exports.prototype['maxAmount'] = undefined;
  /**
   * Total prize received by winners
   * @member {String} prize
   */
  exports.prototype['prize'] = undefined;



  return exports;
}));


