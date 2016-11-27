'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /owner
 */
module.exports = {
    /**
     * summary: Create owner
     * description: This can only be done by the logged in user.
     * parameters: body
     * produces: application/xml, application/json
     * responses: default
     * operationId: createOwner
     */
    post: {
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/owner',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    }
};
