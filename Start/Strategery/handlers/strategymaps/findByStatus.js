'use strict';
var dataProvider = require('../../data/strategymaps/findByStatus.js');
/**
 * Operations on /strategymaps/findByStatus
 */
module.exports = {
    /**
     * summary: Finds Strategy Maps by status
     * description: Multiple status values can be provided with comma separated strings
     * parameters: status
     * produces: application/json
     * responses: 200, 400
     */
    get: function findStrategyMapsByStatus(req, res, next) {
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
    }
};
