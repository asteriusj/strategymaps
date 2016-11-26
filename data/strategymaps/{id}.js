'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /strategymaps/{id}
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: id
     * produces: application/json, text/json
     * responses: 200
     * operationId: contacts_getById
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
        }
    }
};
