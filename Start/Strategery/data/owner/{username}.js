'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /owner/{username}
 */
module.exports = {
    /**
     * summary: Get owner by user name
     * description: 
     * parameters: username
     * produces: application/xml, application/json
     * responses: 200, 400, 404
     * operationId: getOwnerByName
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/owner/{username}',
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
                path: '/owner/{username}',
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
                path: '/owner/{username}',
                operation: 'get',
                response: '404'
            }, callback);
        }
    },
    /**
     * summary: Updated owner
     * description: This can only be done by the logged in user.
     * parameters: username, body
     * produces: application/xml, application/json
     * responses: 400, 404
     * operationId: updateOwner
     */
    put: {
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/owner/{username}',
                operation: 'put',
                response: '400'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/owner/{username}',
                operation: 'put',
                response: '404'
            }, callback);
        }
    },
    /**
     * summary: Delete owner
     * description: This can only be done by the logged in user.
     * parameters: username
     * produces: application/xml, application/json
     * responses: 400, 404
     * operationId: deleteOwner
     */
    delete: {
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/owner/{username}',
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
                path: '/owner/{username}',
                operation: 'delete',
                response: '404'
            }, callback);
        }
    }
};
