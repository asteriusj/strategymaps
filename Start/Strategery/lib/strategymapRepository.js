'use strict';

var strategymaps = require('./strategymaps.json');
var jp = require('jsonpath');

module.exports = {
    get: function (id) {
        return jp.query(strategymaps, '$..[?(@.id=='+id+')]');
    },
    all: function () {
        return strategymaps;
    }
};