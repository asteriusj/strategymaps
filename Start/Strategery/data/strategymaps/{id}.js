'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /strategymaps/{id}
 */
module.exports = {
    /**
     * summary: Find strategymaps by ID
     * description: Returns a single strategymaps
     * parameters: id
     * produces: application/xml, application/json
     * responses: 200, 400, 404
     * operationId: getStrategyMapById
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/strategymaps/{id}',
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
                path: '/strategymaps/{id}',
                operation: 'get',
                response: '400'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/strategymaps/{id}',
                operation: 'get',
                response: '404'
            }, callback);
        }
    },
    /**
     * summary: Updates a strategymaps with form data
     * description: 
     * parameters: id, title, status
     * produces: application/xml, application/json
     * responses: 405
     * operationId: updateStrategyMapWithForm
     */
    post: {
        405: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/strategymaps/{id}',
                operation: 'post',
                response: '405'
            }, callback);
        }
    },
    /**
     * summary: Deletes a strategymap
     * description: 
     * parameters: api_key, id
     * produces: application/xml, application/json
     * responses: 400, 404
     * operationId: deleteStrategyMap
     */
    delete: {
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/strategymaps/{id}',
                operation: 'delete',
                response: '400'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/strategymaps/{id}',
                operation: 'delete',
                response: '404'
            }, callback);
        }
    }
};
