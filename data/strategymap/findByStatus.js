'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /strategymap/findByStatus
 */
module.exports = {
    /**
     * summary: Finds Strategy Maps by status
     * description: Multiple status values can be provided with comma separated strings
     * parameters: status
     * produces: application/json
     * responses: 200, 400
     * operationId: findStrategyMapByStatus
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/strategymap/findByStatus',
                operation: 'get',
                response: '200'
            }, callback);
        },
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/strategymap/findByStatus',
                operation: 'get',
                response: '400'
            }, callback);
        }
    }
};
