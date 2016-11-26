 'use strict';

 var repository = require('../../lib/strategymapsRepository');

 module.exports = {
     get: function strategymaps_get(req, res) {
         res.json(repository.get(req.params['id']));
     }    
 };
