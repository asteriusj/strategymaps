 'use strict';

 var repository = require('../lib/strategymapRepository');

 module.exports = {
     get: function strategymaps_get(req, res) {
         res.json(repository.all())
     }
 };
