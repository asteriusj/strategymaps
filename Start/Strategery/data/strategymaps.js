'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /strategymaps
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: 
     * produces: application/json, text/json
     * responses: 200
     * operationId: getStrategyMaps
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/strategymaps',
                operation: 'get',
                response: '200'
            }, callback);
        }
    },
    /**
     * summary: Add a new strategy map
     * description: 
     * parameters: body
     * produces: application/xml, application/json
     * responses: 405
     * operationId: addStrategyMap
     */
    post: {
        405: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/strategymaps',
                operation: 'post',
                response: '405'
            }, callback);
        }
    }
};
