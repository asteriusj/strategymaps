'use strict';
var dataProvider = require('../../data/owner/{username}.js');
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
     */
    get: function getOwnerByName(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: Updated owner
     * description: This can only be done by the logged in user.
     * parameters: username, body
     * produces: application/xml, application/json
     * responses: 400, 404
     */
    put: function updateOwner(req, res, next) {
        /**
         * Get the data for response 400
         * For response `default` status 200 is used.
         */
        var status = 400;
        var provider = dataProvider['put']['400'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: Delete owner
     * description: This can only be done by the logged in user.
     * parameters: username
     * produces: application/xml, application/json
     * responses: 400, 404
     */
    delete: function deleteOwner(req, res, next) {
        /**
         * Get the data for response 400
         * For response `default` status 200 is used.
         */
        var status = 400;
        var provider = dataProvider['delete']['400'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
