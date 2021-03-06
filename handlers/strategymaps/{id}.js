'use strict';

var repository = require('../../lib/strategymapRepository.js');

module.exports = {
    get: function getStrategyMapById(req, res) {
        res.json(repository.get(req.params['id']));
    }    
};
 
 
// var dataProvider = require('../../data/strategymaps/{id}.js');
// /**
//  * Operations on /strategymaps/{id}
//  */
// module.exports = {
//     /**
//      * summary: Find strategymaps by ID
//      * description: Returns a single strategymaps
//      * parameters: id
//      * produces: application/xml, application/json
//      * responses: 200, 400, 404
//      */
//     get: function getStrategyMapById(req, res, next) {
//         /**
//          * Get the data for response 200
//          * For response `default` status 200 is used.
//          */
//         var status = 200;
//         var provider = dataProvider['get']['200'];
//         provider(req, res, function (err, data) {
//             if (err) {
//                 next(err);
//                 return;
//             }
//             res.status(status).send(data && data.responses);
//         });
//     },
//     /**
//      * summary: Updates a strategymaps with form data
//      * description: 
//      * parameters: id, title, status
//      * produces: application/xml, application/json
//      * responses: 405
//      */
//     post: function updateStrategyMapWithForm(req, res, next) {
//         /**
//          * Get the data for response 405
//          * For response `default` status 200 is used.
//          */
//         var status = 405;
//         var provider = dataProvider['post']['405'];
//         provider(req, res, function (err, data) {
//             if (err) {
//                 next(err);
//                 return;
//             }
//             res.status(status).send(data && data.responses);
//         });
//     },
//     /**
//      * summary: Deletes a strategymap
//      * description: 
//      * parameters: api_key, id
//      * produces: application/xml, application/json
//      * responses: 400, 404
//      */
//     delete: function deleteStrategyMap(req, res, next) {
//         /**
//          * Get the data for response 400
//          * For response `default` status 200 is used.
//          */
//         var status = 400;
//         var provider = dataProvider['delete']['400'];
//         provider(req, res, function (err, data) {
//             if (err) {
//                 next(err);
//                 return;
//             }
//             res.status(status).send(data && data.responses);
//         });
//     }
// };
