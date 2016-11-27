'use strict';
var dataProvider = require('../data/strategymap.js');
/**
 * Operations on /strategymap
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: 
     * produces: application/json, text/json
     * responses: 200
     */
    get: function strategymap_get(req, res, next) {
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
     * summary: Add a new strategy map
     * description: 
     * parameters: body
     * produces: application/xml, application/json
     * responses: 405
     */
    post: function addStrategyMap(req, res, next) {
        /**
         * Get the data for response 405
         * For response `default` status 200 is used.
         */
        var status = 405;
        var provider = dataProvider['post']['405'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
