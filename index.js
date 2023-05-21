'use strict';

var moment = require('moment');  
//old version of import moment from 'moment';
//en terminal, ejecutar lo siguiente para añadir dependencia a fichero .json:
//npm install --save moment

/**
 * Returns a string element with a footer and updating year
 * @param {string} name
 * @return {string}
 */
exports.footer = function (name) {
    return "Copyright " + moment().format('YYYY') + " " + name + " All rights reserved";
};
