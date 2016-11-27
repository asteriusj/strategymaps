'use strict';
var dataProvider = require('../../data/map/{id}.js');
/**
 * Operations on /map/{id}
 */
module.exports = {
    /**
     * summary: Find map by ID
     * description: Returns a single map
     * parameters: id
     * produces: application/xml, application/json
     * responses: 200, 400, 404
     */
    get: function getMapById(req, res, next) {
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
     * summary: Updates a map  with form data
     * description: 
     * parameters: id, title, status
     * produces: application/xml, application/json
     * responses: 405
     */
    post: function updateMapWithForm(req, res, next) {
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
    },
    /**
     * summary: Deletes a map
     * description: 
     * parameters: api_key, id
     * produces: application/xml, application/json
     * responses: 400, 404
     */
    delete: function deleteMap(req, res, next) {
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
