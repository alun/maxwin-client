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
   * The Game model module.
   * @module model/Game
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Game</code>.
   * @alias module:model/Game
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Game</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Game} obj Optional instance to populate.
   * @return {module:model/Game} The populated <code>Game</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('finished')) {
        obj['finished'] = ApiClient.convertToType(data['finished'], 'Boolean');
      }
      if (data.hasOwnProperty('maxAmount')) {
        obj['maxAmount'] = ApiClient.convertToType(data['maxAmount'], 'String');
      }
      if (data.hasOwnProperty('balance')) {
        obj['balance'] = ApiClient.convertToType(data['balance'], 'String');
      }
      if (data.hasOwnProperty('deadline')) {
        obj['deadline'] = ApiClient.convertToType(data['deadline'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * Bit coin address of the game
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * Is game finished
   * @member {Boolean} finished
   */
  exports.prototype['finished'] = undefined;
  /**
   * Maximum bet
   * @member {String} maxAmount
   */
  exports.prototype['maxAmount'] = undefined;
  /**
   * Total money amount
   * @member {String} balance
   */
  exports.prototype['balance'] = undefined;
  /**
   * Time (ms) to the moment when game is finished
   * @member {Integer} deadline
   */
  exports.prototype['deadline'] = undefined;



  return exports;
}));


